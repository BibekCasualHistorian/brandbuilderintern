import PlanBox from "@/components/settings/Plans/PlanBox";
import Link from "next/link";
import React from "react";

const Settings = () => {
  return (
    <div className="">
      <div className="text-center">
        <h2>Choose Your Best Plan Here</h2>
        <div className="flex gap-6 justify-center mt-4">
          <button className="bg-gray-400 p-2.5 px-7 font-semibold">
            Monthly
          </button>
          <button className="bg-gray-400 p-2.5 px-7 font-semibold">
            Yearly
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 slg:grid-cols-3 mt-8 gap-6">
        <PlanBox />
        <PlanBox />
        <PlanBox />
      </div>
    </div>
  );
};

export default Settings;
