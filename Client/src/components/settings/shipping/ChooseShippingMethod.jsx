"use client";

import React, { useState } from "react";
import Switch from "react-switch";

const data = [
  {
    title: "Smart Shipping Method",
    description: "Selects the cheapest shipping method by default",
  },
  {
    title: "Specific Product Shipping Method",
    description: "Set up shipping mothode on sepicific product",
  },
  {
    title: "Advanced Shipping Method",
    description: "Set up shipping methode by Price and Date range ",
  },
];

const EachShippingMethod = ({ each }) => {
  return (
    <div className="flex gap-4 pr-4 rounded-sm items-center justify-between bg-secondary">
      <div className="flex gap-4 items-center p-2">
        <p className="flex p-2 bg-primary aspect-square rounded-sm items-center text-[0.7rem]">
          Icon
        </p>
        <p className="font-bold">{each.title}</p>
        <hr className="border-[1px] opacity-60 h-[2rem] border-font-secondary" />
        <p className="text-[0.9rem] text-font-secondary px-2">
          {each.description}
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <p>Default Mode</p>
        <ToggleButton />
      </div>
    </div>
  );
};

const ChooseShippingMethod = () => {
  return (
    <div className="pb-6 border-b-2 border-gray-400 mb-3">
      <h1 className="font-bold text-[1.3rem] mb-2">
        Choose Your Best Shipping Methods
      </h1>
      <div className="flex flex-col gap-3">
        {data.map((each) => {
          return <EachShippingMethod each={each} />;
        })}
      </div>
    </div>
  );
};

export default ChooseShippingMethod;

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
  };

  return <Switch onChange={handleChange} checked={isChecked} />;
};
