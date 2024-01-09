import React from "react";

const ShippingOrderTracking = () => {
  return (
    <div className=" bg-primary w-full flex flex-col gap-2">
      <div className="flex gap-1 items-center">
        <p className="font-bold text-[1.2em]">Order Tracking</p>
        <p className="text-[0.8rem] text-btn">
          {" "}
          = Set fullfilment notification email by different store
        </p>
      </div>
      <div className="flex sm:flex-row flex-col gap-4 w-full justify-between">
        <div className="flex flex-col gap-2 sm:w-[32%]">
          <p className="text-font-secondary font-bold">Shiping Company</p>
          <input
            type="text"
            placeholder="DHL Express"
            className="bg-secondary font-bold px-4 py-2 rounded-sm text-font-secondary"
          />
        </div>
        <div className="flex flex-col gap-2  sm:w-[32%]">
          <p className="text-font-secondary font-bold">Custom URL Link</p>
          <input
            type="text"
            placeholder="DHL17TRACK"
            className="bg-secondary font-bold px-4 py-2 rounded-sm text-font-secondary"
          />
        </div>
        <div className="flex flex-col gap-2  sm:w-[32%]">
          <p className="text-font-secondary font-bold">Created Link</p>
          <input
            type="text"
            placeholder="https://t.17track.net/ennums=/"
            className="bg-secondary font-bold px-4 py-2 rounded-sm text-font-secondary"
          />
        </div>
      </div>
      <button className="bg-btn py-2 mt-2 rounded-sm w-fit text-[0.9rem] text-white min-w-40">
        Copy Link
      </button>
    </div>
  );
};

export default ShippingOrderTracking;
