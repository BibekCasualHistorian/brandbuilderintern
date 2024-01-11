"use client";

import React, { useState } from "react";
import Switch from "react-switch";

const DescriptionOne = () => {
  return (
    <div className="px-9 pb-9 p-3 text-gray-700 flex flex-col gap-3 text-sm">
      <p>
        When placing your orders, K-Goods selects the cheapest shipping method
        by default. There is no need to choose every time for each order a new
        shipping method.It automatically masures shipping cost for each prodact
        separately.
      </p>
      <p>
        <span className="font-bold">Order Note</span> - Important note for your
        suppliers should be added here
      </p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="7"
        className="w-full rounded-sm border-2 border-black p-3 resize-none"
        placeholder="I'm dropshipping. Please DO NOT put any invoices, QR codes, promotions or your brand name logo in the shipments. Please ship as soon as possible for repeat business. Thank you!"
      ></textarea>
      <div>
        <p className="mb-2">
          1. Hide customer’s phone number when placing your K-Good orders
        </p>
        <p>
          2. Add line item properties to order notes - Add line item properties
          or uploadery to the order notes field so they can be easily read by
          supplier
        </p>
      </div>
      <div>
        <h2>
          <span className="font-bold">Set default phone number</span> - the
          system will use the default phone number you set to fill it in.
        </h2>
        <div className="mt-2 flex fap-3 gap-3">
          <span className="border-gray-500 border-l-2 mr-4"></span>
          <div className="flex flex-wrap gap-4 ">
            <section className="p-1 px-8 bg-white flex items-center rounded-sm border border-black">
              <span className="border-r-2 border-gray-500 px-6">+90</span>
              <p className="pl-3">Turkey</p>
            </section>
            <input
              type="number"
              name=""
              id=""
              placeholder="number"
              className="px-2 p-1 text-center outline-none hover:outline-none rounded-sm border border-black"
            />
          </div>
          <section className="font-bold text-2xl hover:bg-white px-2 cursor-pointer">
            +
          </section>
        </div>
      </div>
    </div>
  );
};

const DescriptionTwo = () => {
  const [user, setUser] = useState("");
  return (
    <div>
      <p>
        Add Global shipping method based on product. Set up your default
        shipping method for specific K-Goods product.
      </p>
      <table>
        <thead>
          <th>Product Title or ID Number</th>
          <th>Country</th>
          <th>Shipping County</th>
          <th>Cost</th>
          <th className="">Delete</th>
        </thead>
        <tbody>
          <td>Lorem ipsum dolor sit</td>
        </tbody>
      </table>
      <DescriptionTwo />
    </div>
  );
};

const data = [
  {
    title: "Smart Shipping Method",
    description: "Selects the cheapest shipping method by default",
    clicked: false,
    component: <DescriptionOne />,
  },
  {
    title: "Specific Product Shipping Method",
    description: "Set up shipping mothode on sepicific product",
    clicked: false,
    component: <DescriptionTwo />,
  },
  {
    title: "Advanced Shipping Method",
    description: "Set up shipping methode by Price and Date range ",
  },
];

const EachShippingMethod = ({ each }) => {
  return (
    <div className="bg-secondary">
      <div className="flex gap-4 pr-4 p-1.5 rounded-sm items-center justify-between">
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
      <DescriptionTwo />
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
