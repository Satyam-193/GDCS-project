import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>hello you are on index pages {id}</div>;
};

export default IndexPage;
