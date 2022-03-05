import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navigation = () => {
  const { data: session } = useSession();

  if (session) {
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
          <li className="cursor-pointer hover:text-gray-200">
            {session.user.email}
          </li>
        </ul>

        <div>
          <input
            className="rounded-md px-1 py-1 focus:outline-none focus:outline-blue-700"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-orange-500 text-xl rounded-md mx-3 px-4 py-1 hover:bg-orange-600">
            Search
          </button>

          <button
            className="bg-orange-500 text-xl rounded-md mx-2 px-4 py-1 hover:bg-orange-600"
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

        <div>
          <input
            className="rounded-md px-1 py-1 focus:outline-none focus:outline-blue-700"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-orange-500 text-xl rounded-md mx-3 px-4 py-1 hover:bg-orange-600">
            Search
          </button>

          <button
            className="bg-orange-500 text-xl rounded-md mx-2 px-4 py-1 hover:bg-orange-600"
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
