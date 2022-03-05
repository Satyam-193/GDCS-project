import { sanityClient } from "../../../lib/sanity";

const handler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;
  const groq = `*[_type=="post" && subject._ref == $id ]{
    "slug":slug.current,
    title,
    _id,
    body,
  }`;
  if (method === "GET") {
    const posts = await sanityClient.fetch(groq, { id });
    res.send(posts);
  }
};

export default handler;
