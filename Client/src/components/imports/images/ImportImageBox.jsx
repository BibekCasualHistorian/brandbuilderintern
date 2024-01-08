import React from "react";
import Image from "next/image";

const ImportImageBox = () => {
  return (
    <div className=" p-2 relative h-40 rounded-sm ">
      <input
        type="checkbox"
        name=""
        id=""
        className="absolute z-10 top-5 left-5 w-5 h-5 "
      />
      <Image
        src={image}
        alt="Rally"
        fill
        className="relative rounded-md object-cover"
      />
    </div>
  );
};

export default ImportImageBox;
