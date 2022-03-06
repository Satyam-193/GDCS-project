import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";

const Navigation = () => {
  const { data: session } = useSession();
  const [search, setSearch] = useState("");

  const doSearch = () => {
    Router.push(`/search/${search}`);
  };

  if (session) {
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`;
    };
    return (
      <nav className="bg-blue-500 flex justify-between align-middle px-3 py-2">
        <ul className="flex space-x-5 text-2xl">
          <li className="cursor-pointer hover:text-gray-200 text-white">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 text-white">
            Blogs
          </li>
          <li className="cursor-pointer hover:text-gray-200 text-white">
            About us
          </li>
          <li className="cursor-pointer">
            <Image
              src={session.user.image}
              loader={myLoader}
              alt="image"
              className="rounded-full"
              width={30}
              height={30}
            />
          </li>
          <li className="cursor-pointer hover:text-gray-200 text-white">
            {session.user.name}
          </li>
        </ul>

        <div className="flex">
          <form
            className="flex"
            onSubmit={(e) => {
              e.preventDefault();
              doSearch();
            }}
          >
            <input
              className="rounded-md px-1 py-1 focus:outline-none focus:outline-blue-700 text-black"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="bg-orange-500 text-xl rounded-md mx-3 px-4 py-1 text-white hover:bg-orange-600"
            >
              Search
            </button>
          </form>

          <button
            className="bg-orange-500 text-xl rounded-md mx-2 px-4 py-1 hover:bg-orange-600 text-white"
            onClick={(e) => signOut()}
          >
            Log out
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="bg-blue-500 flex justify-between align-middle text-white px-3 py-2">
        <ul className="flex space-x-5 text-2xl">
          <li className="cursor-pointer hover:text-gray-200">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200">Blogs</li>
          <li className="cursor-pointer hover:text-gray-200">About us</li>
        </ul>

        <div className="flex">
          <form
            className="flex"
            onSubmit={(e) => {
              e.preventDefault();
              doSearch();
            }}
          >
            <input
              className="rounded-md px-1 py-1 focus:outline-none focus:outline-blue-700 text-black"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="bg-orange-500 text-xl rounded-md mx-3 px-4 py-1 text-white hover:bg-orange-600"
            >
              Search
            </button>
          </form>

          <button
            className="bg-orange-500 text-xl rounded-md mx-2 px-4 py-1 hover:bg-orange-600 text-white"
            onClick={(e) => signIn()}
          >
            Log in
          </button>
        </div>
      </nav>
    );
  }
};

export default Navigation;
