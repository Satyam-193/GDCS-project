import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-blue-500 flex justify-between align-middle text-white px-3 py-2">
      <ul className="flex space-x-5 text-2xl">
        <li className="cursor-pointer hover:text-gray-200">Home</li>
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
      </div>
    </nav>
  );
};

export default Navigation;
