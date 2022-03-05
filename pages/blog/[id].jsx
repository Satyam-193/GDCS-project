import { useRouter } from "next/router";
import { sanityClient } from "../../lib/sanity";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";

const Blog = ({ post }) => {
  const [content, setContent] = useState(post[0].body);

  const renderContent = async (e) => {
    const data = await fetch(
      `http://localhost:3000/api/getonepost/${e.target.id}`
    );
    const json = await data.json();
    setContent(json.body);
  };

  return (
    <div>
      {post.map((item) => (
        <li key={item._id} id={item.slug} onClick={(e) => renderContent(e)}>
          {item.title}
        </li>
      ))}

      <h1 className="text-3xl">Content comes up here</h1>
      <article className="prose lg:prose-xl">
        <PortableText value={content} />
      </article>
    </div>
  );
};

export default Blog;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(`*[_type=="subject"]{
        "params":{"id":_id}
      }`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(`${process.env.API_URL}/api/getpost/${params.id}`);
  const post = await data.json();

  console.log(post);

  return {
    props: { post },
  };
}
