import React from "react";

const ImportSearch = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex gap-4 bg-red-200 p-2.5 items-center px-5">
        <section className="w-7 h-7 bg-gray-600"></section>
        <h2 className="">All</h2>
      </div>
      <div className="bg-red-200 flex basis-3/5 p-2.5">
        <section className="w-7 h-7 bg-gray-600"></section>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Keyword"
          className="w-4/6 ml-4 border-none hover:outline-none outline-none bg-red-200"
        />
      </div>
      <button className="bg-black text-white p-3 px-8">Search</button>
      <div className="flex gap-4 bg-red-200 p-2.5 items-center px-5 ml-auto">
        <section className="w-7 h-7 bg-gray-600"></section>
        <h3 className="">Filter</h3>
      </div>
    </div>
  );
};

export default ImportSearch;
