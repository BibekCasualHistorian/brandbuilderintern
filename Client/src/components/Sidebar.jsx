import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen py-4 px-2">
      <h1 className="text-center font-bold text-2xl">K-Goods</h1>

      <div className="mt-6 pr-2">
        <div className="flex flex-col gap-4 w-fit mx-auto ">
          <Link href={"/home/dashboard"} className="flex gap-2">
            <section className="w-6 h-6 bg-gray-400"></section> Dashboard
          </Link>
          <Link href={"/home/search"} className="flex gap-2">
            <section className="w-6 h-6 bg-gray-400"></section> Search Product
          </Link>
          <Link href={"/home/imports"} className="flex gap-2">
            <section className="w-6 h-6 bg-gray-400"></section> Imports
          </Link>
          <Link href={"/home/orders"} className="flex gap-2">
            <section className="w-6 h-6 bg-gray-400"></section> Orders
          </Link>
          <Link href={"/home/products"} className="flex gap-2">
            <section className="w-6 h-6 bg-gray-400"></section> Products
          </Link>
        </div>
      </div>

      <div className="mt-auto pr-5">
        <div className="flex flex-col gap-4 w-fit mx-auto">
          <Link href={"/home/settings"} className="flex gap-2">
            <section className="w-6 h-6 bg-gray-400"></section> Settings
          </Link>
          <Link href={""} className="flex gap-2">
            <section className="w-6 h-6 bg-gray-400"></section> Language
          </Link>
          <Link href={""} className="flex gap-2">
            <section className="w-6 h-6 bg-gray-400"></section> Supports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
