import { sanityClient } from "../../lib/sanity";
import { useState } from "react";
import { PortableText } from "@portabletext/react";

// This is the blog page where we will show blog and its index
const Blog = ({ post }) => {
  const [content, setContent] = useState(post[0].body);
  const [contentTitle, setContentTitle] = useState(post[0].title);

  // function to render the content of the blog
  const renderContent = async (e) => {
    const data = await fetch(
      `http://localhost:3000/api/getonepost/${e.target.id}`
    );
    const json = await data.json();
    setContent(json.body);
    setContentTitle(json.title);
  };

  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
      <div className="mx-4 mt-10 bg-slate-300 rounded-md col-span-2">
        <h1 className="text-4xl text-center font-semibold">{contentTitle}</h1>
        <hr />
        <article className="prose lg:prose-xl px-32">
          <PortableText value={content} />
        </article>
      </div>
      <div className="mt-10 px-4 ">
        <h2 className="text-xl font-semibold mb-5">Topics</h2>
        {post.map((item) => (
          <li
            className="cursor-pointer list-none"
            key={item._id}
            id={item.slug}
            onClick={(e) => renderContent(e)}
          >
            {item.title}
          </li>
        ))}
      </div>
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
