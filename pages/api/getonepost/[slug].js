import { sanityClient } from "../../../lib/sanity";

const handler = async (req, res) => {
  const { method } = req;
  const groq = `*[_type=="post" && slug.current == $slug]{
        body,
        _id,
        "slug":slug.current,
        title,
      }[0]`;

  if (method === "GET") {
    const { slug } = req.query;
    const post = await sanityClient.fetch(groq, { slug });
    res.send(post);
  }
};

export default handler;
