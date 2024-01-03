import Link from "next/link";
import React from "react";

const PlanBox = () => {
  return (
    <div className="text-center bg-gray-200 pb-7">
      <h2 className="bg-gray-600 p-3">Plan C</h2>
      <div className="border-b-2 border-gray-300 p-2.5">
        <h2 className="text-3xl font-medium">Free</h2>
        <p className="">Per Month</p>
      </div>
      <ul className="list-disc p-3 flex items-center gap-2 flex-col text-sm">
        <li>Benefit should be written here</li>
        <li>Benefit should be written here</li>
        <li>Benefit should be written here</li>
        <li>Benefit should be written here</li>
        <li>Benefit should be written here</li>
      </ul>
      <div className="mt-2">
        <button className="px-6 py-3.5 bg-gray-400 w-fit font-semibold text-lg ">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PlanBox;
