import React from "react";
import Box from "../../components/Box";
const data = [
  {
    title: "Connect to K-Goods",
    details:
      "Here you can learn how to connect your store to K-Good Ecommerce platform",
  },
  {
    title: "Search Product",
    details:
      "Lean how to find best suitable product with high demand and low price",
  },
  {
    title: "Import Product",
    details:
      "Here you can learn how to edit your product color, size, const and also edit shipping cost",
  },
  {
    title: "Orders",
    details:
      "Create order or manage orders, it allows you to track each orders status and also make changes",
  },
  {
    title: "Pricing Rules",
    details:
      "Learn how to manage your products prices without having to change everytime",
  },
  {
    title: "Shipping Methods",
    details:
      "Learn how to manage your products shipping cost and also shippping company",
  },
];

const page = () => {
  return (
    <div className="w-full mt-2">
      <div className="bg-primary w-full">
        {/* <div> */}
        <div className="mb-3 bg-primary rounded-sm w-full">
          <strong className="text-3xl mt-2">Welcome to K Goods</strong>
          <p className="text-[0.9rem] mt-1 text-font-secondary">
            It is a pleasure for us to see you here. Here you can learn how to
            use our platform. Take a look
          </p>
        </div>
        <div className="flex flex-col h-fit gap-4 w-full">
          {data.map((info, index) => (
            <Box title={info.title} details={info.details} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
