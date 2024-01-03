import React from "react";
import Image from "next/image";
import image from "/public/image.jpg";

console.log("image", image);

function TableData() {
  return (
    <div className="flex flex-col text-[0.8rem]">
      <div className="grid grid-cols-table-grid border-b-[1px] border-tertiary py-2 items-center px-2 gap-4">
        <p>1</p>
        <div className="flex gap-2 items-center">
          <Image
            src={image}
            width={80}
            height={80}
            alt="Photo"
            className="rounded-sm"
          />
          <p className="text-balance">
            Led Strip Lights Grovee Neon Triple one eight
          </p>
        </div>
        <p className="flex items-center justify-center w-full h-full">
          05.11.21
        </p>
        <p className="flex items-center justify-center w-full h-full">
          008100471641
        </p>
        <p className="underline flex items-center justify-center w-full h-full">
          Mini Objects
        </p>
        <p className="flex items-center justify-center w-full h-full">4</p>
        <p className="flex items-center justify-center w-full h-full">
          Jhon Marks
        </p>
        <p className="flex items-center justify-center w-full h-full">
          USA, New York Star st 15 A/1 Zip 23457-1B
        </p>
        <p className="flex items-center justify-center w-full h-full">35 USD</p>
        <p className="py-2 bg-btn rounded-sm flex items-center justify-center">
          Processing
        </p>
        <p className="px-4 rotate-90 text-white py-2 bg-btn rounded-sm flex items-center justify-center">
          {">"}
        </p>
      </div>
    </div>
  );
}

export default TableData;
