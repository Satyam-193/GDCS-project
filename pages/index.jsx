import Head from "next/head";
import Image from "next/image";
import Subject from "../components/Sub";

export default function Home({ json }) {
  return (
    <div>
      <Head>
        <title>Edu App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-wrap justify-center align-middle px-10 mt-4">
        {json.map((item) => (
          <Subject
            key={item._id}
            name={item.subjectName}
            desc={item.desc}
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${process.env.API_URL}/api`);
  const json = await data.json();
  return {
    props: { json },
  };
}
