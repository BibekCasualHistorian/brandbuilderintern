import React from "react";

const TotalSales = () => {
  return (
    <div className="p-4 bg-gray-300">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Total Sales</h2>
        <p className="text-gray-600">This Month</p>
      </div>
      <div className="grid grid-cols-3 mt-6">
        <h1 className="text-3xl font-semibold">1250$</h1>
        <p className="self-end ml-6">35%</p>
        <section className="h-full w-12 bg-gray-700 mx-auto self-end"></section>
      </div>
    </div>
  );
};

const DashBoard = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 gap-6 slg:grid-cols-4">
        <TotalSales />
        <TotalSales />
        <TotalSales />
        <TotalSales />
      </div>
    </div>
  );
};

export default DashBoard;
