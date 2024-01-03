import React from "react";

const page = () => {
  return (
    <div className="mt-3 p-6 bg-gray-300">
      <div className="flex items-center gap-3">
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
      <div className=" grid grid-cols-6 mt-6 gap-5">
        <div className="p-2 bg-white">
          <section className=" bg-gray-300 w-full h-24"></section>
          <h2 className="text-center font-semibold mt-1">Health</h2>
        </div>
        <div className="p-2 bg-white">
          <section className=" bg-gray-300 w-full h-24"></section>
          <h2 className="text-center font-semibold mt-1">Health</h2>
        </div>
        <div className="p-2 bg-white">
          <section className=" bg-gray-300 w-full h-24"></section>
          <h2 className="text-center font-semibold mt-1">Health</h2>
        </div>
        <div className="p-2 bg-white">
          <section className=" bg-gray-300 w-full h-24"></section>
          <h2 className="text-center font-semibold mt-1">Health</h2>
        </div>
        <div className="p-2 bg-white">
          <section className=" bg-gray-300 w-full h-24"></section>
          <h2 className="text-center font-semibold mt-1">Health</h2>
        </div>
        <div className="p-2 bg-white">
          <section className=" bg-gray-300 w-full h-24"></section>
          <h2 className="text-center font-semibold mt-1">Health</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
