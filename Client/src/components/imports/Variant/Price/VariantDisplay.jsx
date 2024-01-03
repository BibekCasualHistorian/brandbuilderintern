import React from "react";
import Image from "next/image";

const VariantBox = ({ text }) => {
  return (
    <div
      className="p-2 px-3 text-nowrap text-sm "
      style={{ border: "1px solid gray" }}
    >
      {" "}
      {text}
    </div>
  );
};

export const VariantDisplay = () => {
  return (
    <div
      className="grid ga-5 min-h-24 items-center gap-3 text-center my-3"
      style={{ gridTemplateColumns: "40px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" }}
    >
      <p>1.</p>
      <div className="relative h-24 bg-red-300 ">
        <Image src={"/owl.png"} alt="really" fill className="object-contain" />
      </div>
      <p>Lorem ipsum dolor sit amet.</p>

      <VariantBox text="Blue-cb345a" />
      <VariantBox text="Small" />
      <VariantBox text="Small" />
      <VariantBox text="Small" />
      <VariantBox text="Small" />
      <VariantBox text="Small" />
    </div>
    //   <div
    //     className="grid min-h-24 items-center gap-3 text-center  my-3"
    //     style={{ gridTemplateColumns: "40px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" }}
    //   >
    //     <p>1.</p>
    //     <div className="relative h-24 bg-red-300 ">
    //       {/* <Image src={"/owl.png"} alt="really" fill className="object-cover" /> */}
    //     </div>
    //     <p>Lorem ipsum dolor sit amet.</p>
    //     <div className="p-2 px-3"> Blue-cb345a</div>
    //     <div className="p-2 px-3"> Blue-cb345a</div>
    //     <div className="p-2 px-3"> Blue-cb345a</div>
    //     <div className="p-2 px-3"> Blue-cb345a</div>
    //     <div className="p-2 px-3"> Blue-cb345a</div>
    //     <div className="p-2 px-3"> Blue-cb345a</div>
    //   </div>
  );
};
