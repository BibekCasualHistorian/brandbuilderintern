"use client";

import React, { useState } from "react";
import Switch from "react-switch";

const data = [
  { title: "Global Pricing", description: "Selects your global pricing rule" },
  {
    title: "Advanced",
    description: "Set your product markup depending on cost ranges.",
  },
];

const PricingRules = () => {
  return (
    <div>
      <h2 className="text-[1.2rem] mb-2">
        Pricing rule will apply automatically when products are imported to
        K-Goods
      </h2>
      <div className="flex flex-col gap-3">
        {data.map((each) => {
          return <EachShippingMethod each={each} />;
        })}
      </div>
    </div>
  );
};

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

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
  };

  return <Switch onChange={handleChange} checked={isChecked} />;
};

export default PricingRules;
