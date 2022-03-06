import { sanityClient } from "../../lib/sanity";

const handler = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    const data = await sanityClient.fetch(`*[_type=="subject"]{
        _id,
        subjectName,
        desc,
        subImg,
      }`);

    res.send(data);
  }
};

export default handler;
