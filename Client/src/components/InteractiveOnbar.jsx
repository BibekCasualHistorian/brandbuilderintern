"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const InteractiveOnbar = () => {
  const pathName = usePathname();
  console.log("pathName", pathName);

  const matchInfo = pathName.endsWith("info")
    ? "w-7 h-7 bg-gray-500 border-white border-2"
    : "w-7 h-7 bg-white";
  const matchStore = pathName.endsWith("store")
    ? "w-7 h-7 bg-gray-500 border-white border-2"
    : "w-7 h-7 bg-white";

  return (
    <div className="min-h-screen bg-gray-300 w-full text-center flex flex-col justify-evenly pb-16">
      <h1 className="text-4xl font-semibold">K-Goods</h1>
      <div className="flex justify-start">
        <Link href={"info"} className="flex gap-5 mx-6 px-5">
          <section className={matchInfo}></section>
          <p className="text-xl">Personal Info</p>
        </Link>
      </div>
      <div className="flex">
        <Link href={"store"} className="flex px-5 mx-6 gap-5">
          <p className={matchStore}></p>
          <p className="text-xl">Add your Store</p>
        </Link>
      </div>
      <div className="flex ">
        <Link href={""} className="flex px-5">
          <p className="w-7 h-7 bg-white mx-6"></p>
          <p className="text-xl">Choose Categories</p>
        </Link>
      </div>
    </div>
  );
};

export default InteractiveOnbar;
