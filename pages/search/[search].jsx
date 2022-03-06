import { useEffect } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import { subjectArray } from "../../components/context";

const Search = () => {
  const router = useRouter();
  const { search } = router.query;

  return <div>{search}</div>;
};
export default Search;
