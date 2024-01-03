import Table from "@/components/imports/Table";
import React from "react";

const Orders = () => {
  return (
    <div className="mt-6">
      <div className="w-full flex flex-col gap-4 bg-primary h-screen">
        <div className="bg-btn rounded-sm p-4 flex flex-col gap-4 items-center w-full">
          <div className="flex gap-4 w-full flex-initial justify-between">
            <div className="flex gap-4 items-center bg-secondary px-2 w-[50%]">
              <p className="h-6 w-7 bg-btn"></p>
              <input
                type="text"
                className="px-4 py-2 bg-transparent outline-none border-none rounded-lg text-black"
                placeholder="Enter Keyword"
              />
              {/* should use value to enter the color and obtain the black color in the first render */}
            </div>
            <button className="px-8 py-3 bg-black rounded-sm text-primary">
              Search
            </button>
            <div className="flex gap-4 items-center w-[35%]">
              <p className="text-black text-nowrap">Upload Date</p>
              {/* should be a number */}
              <input
                type="text"
                name=""
                id=""
                value="01.05.21"
                className="px-6 py-2 text-font-primary max-w-[30%] outline-none border-none rounded-sm"
              />
              <p>-</p>
              <input
                type="text"
                name=""
                id=""
                value="01.05.21"
                className="px-6 py-2 text-font-primary max-w-[30%] outline-none border-none rounded-sm"
              />
            </div>
          </div>
          <div className="flex gap-[0.74rem] items-center flex-initial w-full flex-wrap">
            <div className="flex items-center gap-2 text-black bg-primary px-3 py-2 rounded-sm">
              <input
                type="checkbox"
                name="paid"
                id="paid"
                className="w-5 aspect-square"
              />
              <label htmlFor="paid">Paid</label>
            </div>
            <div className="flex items-center gap-2 text-black bg-primary  px-3 py-2 rounded-sm">
              <input
                type="checkbox"
                name="unpaid"
                id="unpaid"
                className="w-5 aspect-square"
              />
              <label htmlFor="unpaid">Unpaid</label>
            </div>
            <div className="flex items-center gap-2 text-black bg-primary  px-3 py-2 rounded-sm">
              <input
                type="checkbox"
                name="drocessing"
                id="processing"
                className="w-5 aspect-square"
              />
              <label htmlFor="processing">Processing</label>
            </div>
            <div className="flex items-center gap-2 text-black bg-primary  px-3 py-2 rounded-sm">
              <input
                type="checkbox"
                name="delivered"
                id="delivered"
                className="w-5 aspect-square"
              />
              <label htmlFor="delivered">Delivered</label>
            </div>
            <div className="flex items-center gap-2 text-black bg-primary  px-3 py-2 rounded-sm">
              <input
                type="checkbox"
                name="free-shipping"
                id="free-shipping"
                className="w-5 aspect-square"
              />
              <label htmlFor="free-shipping">Free Shipping</label>
            </div>
            <div className="flex items-center gap-2 text-black bg-primary  px-3 py-2 rounded-sm">
              <input
                type="checkbox"
                name="shipped"
                id="shipped"
                className="w-5 aspect-square"
              />
              <label htmlFor="shipped">Shipped</label>
            </div>
            <div className="flex items-center gap-2 text-black bg-primary  px-3 py-2 rounded-sm">
              <input
                type="checkbox"
                name="waiting"
                id="waiting"
                className="w-5 aspect-square"
              />
              <label htmlFor="waiting">Waiting</label>
            </div>
            <div className="flex items-center gap-2 text-black bg-primary  px-3 py-2 rounded-sm">
              <input
                type="checkbox"
                name="redrowed"
                id="redrowed"
                className="w-5 aspect-square"
              />
              <label htmlFor="redrowed">Redrowed</label>
            </div>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Orders;
