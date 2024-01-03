// import React from "react";
// import Link from "next/link";

// const ImportNavigation = () => {
//   return (
//     <div className="mt-5 flex items-center gap-7 border-dotted border-2 border-black p-1 bg-gray-200">
//       <div className="p-4  px-6 border-dotted border-r-2">
//         <section className="w-7 h-7 bg-gray-500"></section>
//       </div>
//       <div className="flex gap-7 px-3 items-center ">
//         <Link
//           href={"/home/imports"}
//           className="text-lg relative font-semibold flex flex-col justify-between"
//         >
//           <h2>Product</h2>
//           <section
//             className=" absolute w-full h-1.5 bg-gray-500 rounded"
//             style={{ bottom: "-0.8em" }}
//           ></section>
//         </Link>
//         <Link
//           href={"/home/imports/variants-price"}
//           className="text-lg font-semibold"
//         >
//           Variants/Price
//         </Link>
//         <Link
//           href={"/home/imports/description"}
//           className="text-lg font-semibold"
//         >
//           Description
//         </Link>
//         <Link
//           href={"/home/imports/image"}
//           className="text-lg font-semibold inline-block h-5/6"
//         >
//           Image
//         </Link>
//       </div>
//       <div className="ml-auto">
//         <button className="p-3 px-6 bg-red-200 mx-2">More Action</button>
//         <button className="p-3 px-6 bg-red-200 mx-2">Import Product</button>
//       </div>
//     </div>
//   );
// };

// export default ImportNavigation;

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ImportNavigation = () => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  // Define an array of links with their properties
  const links = [
    { href: "/home/imports", text: "Product" },
    { href: "/home/imports/variants-price", text: "Variants/Price" },
    { href: "/home/imports/description", text: "Description" },
    { href: "/home/imports/image", text: "Image" },
  ];

  return (
    <div className="mt-5 flex items-center gap-7 border-dotted border-b-2 border-gray-600 p-0 bg-gray-200">
      <div className="p-4 px-6 border-dotted border-r-2">
        <section className="w-7 h-7 bg-gray-500"></section>
      </div>
      <div className="flex gap-7 px-3 items-center ">
        {/* Map over the links array to render dynamic links */}
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-lg relative font-semibold flex flex-col justify-between "
          >
            <h2>{link.text}</h2>
            <section
              className={`absolute h-1.5 bg-gray-400 rounded ${
                pathName == link.href ? "" : " hidden"
              }`}
              style={{ bottom: "-0.8em", left: "-5%", width: "110%" }}
            ></section>
          </Link>
        ))}
      </div>
      <div className="ml-auto">
        <button className="p-3 px-6 bg-red-200 mx-2">More Action</button>
        <button className="p-3 px-6 bg-red-200 mx-2">Import Product</button>
      </div>
    </div>
  );
};

export default ImportNavigation;
