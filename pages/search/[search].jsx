import { useEffect } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import Subject from "../../components/Sub";
import { urlFor } from "../../lib/sanity";
import { subjectArray } from "../../components/context";

const Search = () => {
  const router = useRouter();
  const { search } = router.query;
  const [searchRes, setSearchRes] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const makingRequest = async () => {
    const data = await fetch(`http://localhost:3000/api/search/${search}`);
    const json = await data.json();
    console.log(json);
    setSearchRes(json);
  };

  useEffect(() => {
    makingRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div>
      {searchRes.length ? (
        searchRes.map((item) => {
          return (
            <Subject
              key={item._id}
              name={item.subjectName}
              desc={item.desc}
              id={item._id}
              img={urlFor(item.subImg).url()}
            />
          );
        })
      ) : (
        <div>nothing...</div>
      )}
    </div>
  );
};
export default Search;
