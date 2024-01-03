import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between  h-fit">
      <div className="bg-gray-100 flex items-center gap-3 py-2 px-5">
        <h2 className="text-md">Store 1001</h2>
        <section className="w-7 h-7 bg-gray-400"></section>
      </div>
      <div className="flex gap-6 items-center">
        <section className="w-16 bg-gray-400 border-gray-100 border-8 h-full "></section>
        <Link href={""} className="bg-gray-200 p-3 px-9">
          My Profile
        </Link>
      </div>
    </div>
  );
};

export default Header;
