"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col min-h-screen py-4 px-2">
//       <h1 className="text-center font-bold text-2xl">K-Goods</h1>

//       <div className="mt-6 pr-2">
//         <div className="flex flex-col gap-4 w-fit mx-auto ">
//           <Link href={"/home/dashboard"} className="flex gap-2">
//             <section className="w-6 h-6 bg-gray-400"></section> Dashboard
//           </Link>
//           <Link href={"/home/search"} className="flex gap-2">
//             <section className="w-6 h-6 bg-gray-400"></section> Search Product
//           </Link>
//           <Link href={"/home/imports"} className="flex gap-2">
//             <section className="w-6 h-6 bg-gray-400"></section> Imports
//           </Link>
//           <Link href={"/home/orders"} className="flex gap-2">
//             <section className="w-6 h-6 bg-gray-400"></section> Orders
//           </Link>
//           <Link href={"/home/products"} className="flex gap-2">
//             <section className="w-6 h-6 bg-gray-400"></section> Products
//           </Link>
//         </div>
//       </div>

//       <div className="mt-auto pr-5">
//         <div className="flex flex-col gap-4 w-fit mx-auto">
//           <Link href={"/home/settings"} className="flex gap-2">
//             <section className="w-6 h-6 bg-gray-400"></section> Settings
//           </Link>
//           <Link href={""} className="flex gap-2">
//             <section className="w-6 h-6 bg-gray-400"></section> Language
//           </Link>
//           <Link href={""} className="flex gap-2">
//             <section className="w-6 h-6 bg-gray-400"></section> Supports
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

const Sidebar = () => {
  const pathName = usePathname();

  // Define an array of links with their properties
  const mainLinks = [
    { href: "/home/dashboard", text: "Dashboard" },
    { href: "/home/search", text: "Search Product" },
    { href: "/home/imports", text: "Imports" },
    { href: "/home/orders", text: "Orders" },
    { href: "/home/products", text: "Products" },
  ];

  const settingsLinks = [
    { href: "/home/settings", text: "Settings" },
    { href: "/home/language", text: "Language" },
    { href: "/home/supports", text: "Supports" },
  ];

  return (
    <div className="flex flex-col min-h-screen py-4 px-2">
      <Link
        href={"/home"}
        className={`text-center font-bold text-2xl ${
          pathName == "/home" ? "text-red-900" : ""
        }`}
      >
        K-Goods
      </Link>

      <div className="mt-6 pr-2">
        <div className="flex flex-col gap-4 w-fit mx-auto ">
          {mainLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`flex gap-2 `}>
              <section
                className={`w-6 h-6 bg-gray-400 border-white border-2 ${
                  pathName == link.href ? "bg-red-500" : ""
                }`}
              ></section>{" "}
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-auto pr-5 mb-3">
        <div className="flex flex-col gap-4 w-fit mx-auto">
          {settingsLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`flex gap-3`}>
              <section
                className={`w-6 h-6 bg-gray-400 border-white border-2 ${
                  pathName === link.href ? "bg-red-500" : ""
                }`}
              ></section>{" "}
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
