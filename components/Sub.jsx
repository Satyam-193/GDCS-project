const Subject = () => {
  return (
    <div className="rounded-md shadow-md shadow-gray-500 w-[250px] m-2">
      <div className="w-full h-36 bg-gray-600 rounded-t-md"></div>
      <h1 className="text-3xl font-semibold py-3 px-1">Title</h1>
      <p className="px-1 py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas harum
        cumque voluptate quia quos ad iusto placeat, dolores, totam pariatur
        tempore natus, culpa corporis aperiam labore iure? Quibusdam, voluptatem
        in.
      </p>
      <button className="bg-orange-500 text-xl rounded-md mx-1 mb-2 mt-4 px-4 py-1 hover:bg-orange-600 text-white">
        Read more
      </button>
    </div>
  );
};

export default Subject;
