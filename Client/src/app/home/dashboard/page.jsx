import TotalSales from "@/components/dashboard/TotalSales";
import React from "react";

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
