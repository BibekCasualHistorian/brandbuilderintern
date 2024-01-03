import React from "react";

const VariantHeader = () => {
  return (
    <div
      className="border-y-2 border-gray-300 py-2 grid text-center"
      style={{ gridTemplateColumns: "40px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" }}
    >
      <h2 className="none"></h2>
      <h2 className="">Product</h2>
      <h2>SKU</h2>
      <h2 className="">Color</h2>
      <h2>Size</h2>
      <h2>Size</h2>
      <h2>Size</h2>
      <h2>Size</h2>
      <h2>Size</h2>
    </div>
  );
};

export default VariantHeader;
