/* eslint-disable @next/next/no-img-element */
import Link from "next/dist/client/link";
import { useSession, signIn } from "next-auth/react";
import { urlFor } from "../lib/sanity";
import Image from "next/image";

const Subject = ({ name, desc, id, img }) => {
  const { data: session } = useSession();

  return (
    <div className="rounded-md shadow-md shadow-gray-500 w-[250px] m-2 pb-2">
      <img
        src={`${img}`}
        alt="image"
        className="w-full h-40 bg-gray-600 rounded-t-md"
      ></img>
      <h1 className="text-3xl font-semibold py-3 px-1">{name}</h1>
      <p className="px-1 py-2 h-[200px] overflow-clip mb-2">{desc}</p>

      {session ? (
        <Link className="my-2" href={`/blog/${id}`}>
          <a className="bg-orange-500 text-xl rounded-md mx-1 my-2 mt-4 px-4 py-1 hover:bg-orange-600 text-white">
            Read more
          </a>
        </Link>
      ) : (
        <button
          className="bg-orange-500 text-xl rounded-md mx-1 my-2 mt-4 px-4 py-1 hover:bg-orange-600 text-white"
          onClick={(e) => signIn()}
        >
          Read more
        </button>
      )}
    </div>
  );
};

export default Subject;
