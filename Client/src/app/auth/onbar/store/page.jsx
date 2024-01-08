"use client";

import LabelBoxWithDescription from "@/components/labelBoxwithDescription";
import LabelBoxwithOutDescription from "@/components/labelBoxwithOutDescription";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const data1 = [
  {
    title: "Supplier",
    description:
      " A supplier's role is to provide products from a manufacturer to a reseller for resell",
  },
  {
    title: "Retailer",
    description:
      " A retialer's role is to identify on the most economical source from the producer and pass on to the customers",
  },
];
const data2 = [
  {
    title: "Shopify",
  },
  {
    title: "BigCommerce",
  },
  {
    title: "WooCommerce",
  },
  {
    title: "CSV file",
  },
  {
    title: "Wix",
  },
  {
    title: "Others",
  },
];

function SupplyRetail() {
  const router = useRouter();

  const [error, setError] = useState("real");

  const [selectedType, SetSelectedType] = useState("");
  const [selectedStore, SetSelectedStore] = useState("");

  const handleSubmit = async () => {
    const userId = JSON.parse(localStorage.getItem("user"));
    console.log(userId, selectedStore, selectedType);
    try {
      const response = await fetch(
        "http://localhost:3001/api/user/createStore",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: userId._id,
            bussinessPartnerType: selectedType,
            linkStores: selectedStore,
          }),
        }
      );
      const data = await response.json();
      console.log("response", response);
      console.log("data", data);
      if (response.ok) {
        router.push("/auth/onbar/categories");
      } else {
        throw Error(data.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  function hanldeClickforStore(title) {
    console.log(title);
    // SetSelectedStore((prev) => {
    //   console.log(prev);
    //   console.log(prev?.includes(title));
    //   if (prev?.includes(title)) {
    //     return prev.filter((item) => item !== title);
    //   } else {
    //     const arr = prev;
    //     arr.push(title);
    //     console.log(arr);
    //     return arr;
    //   }
    // });

    SetSelectedStore(title);
  }

  function handleClickforType(title) {
    SetSelectedType(title);
  }

  console.log(selectedStore, selectedType);
  return (
    <div className="w-[100%] min-h-screen flex items-center justify-center bg-black ">
      <div className="flex flex-col items-center px-5 py-5 bg-primary rounded-lg gap-6">
        <div className="flex gap-3 px-5">
          {data1.map((item, index) => (
            <LabelBoxWithDescription
              key={index}
              title={item.title}
              description={item.description}
              fn={handleClickforType}
            />
          ))}
        </div>
        <div className="w-full gap-0.5 ">
          <strong className="text-2xl">Link Your Store</strong>
          <p className="opacity-65">
            Choose platform you use and fill your Ink
          </p>
          <div className="flex justify-start gap-4 flex-wrap mt-2">
            {data2.map((item, index) => (
              <LabelBoxwithOutDescription
                key={index}
                title={item.title}
                fn={hanldeClickforStore}
              />
            ))}
          </div>
        </div>
        <h2 className="text-red-500">{error}</h2>
        <button
          onClick={handleSubmit}
          className=" py-2 min-w-52 rounded-lg bg-font-secondary text-primary"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default SupplyRetail;
