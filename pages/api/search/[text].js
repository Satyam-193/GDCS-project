import { sanityClient } from "../../../lib/sanity";

const handler = async (req, res) => {
  const { method } = req;

  const allSub = await sanityClient.fetch(`*[_type=="subject"]{
        _id,
        subjectName,
        desc,
        subImg,
      }`);

  if (method === "GET") {
    const { text } = req.query;
    const temp = [];
    allSub.forEach((element) => {
      if (
        element.subjectName.includes(text) ||
        element.subjectName.toLowerCase().includes(text)
      ) {
        temp.push(element);
      }
    });

    res.send(temp);
  }
};

export default handler;
