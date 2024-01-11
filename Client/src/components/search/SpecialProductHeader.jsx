import React from "react";

const SpecialProductHeader = () => {
  const num = 245;
  return (
    <div className="flex justify-between py-5">
      <h1 className="font-bold text-xl">
        Special Product - <span>${num}</span>
      </h1>
      <div className="">
        <p>Sort By</p>
      </div>
    </div>
  );
};

export default SpecialProductHeader;
