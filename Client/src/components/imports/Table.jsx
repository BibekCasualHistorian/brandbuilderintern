import React from "react";
import TableData from "./TableData";

function Table() {
  return (
    <div className="text-black w-full flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <input type="checkbox" name="" id="" className="w-5 aspect-square" />
          <p>15 orders Found</p>
        </div>
        <div className="flex gap-4 items-center">
          <button className="px-4 py-2 bg-secondary rounded-sm">
            Add Order +
          </button>
          <button className="px-4 py-2 bg-secondary rounded-sm">
            Export SCV
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="grid grid-cols-table-grid border-t-[1px] border-b-[1px] border-black w-full place-items-center gap-2 px-4">
          <p></p>
          <p>Product</p>
          <p>Date</p>
          <p>Item ID</p>
          <p>Supplier</p>
          <p>QTY</p>
          <p>Customer</p>
          <p>Address</p>
          <p>Price</p>
          <p>Status</p>
          <p>More</p>
        </div>
        <TableData />
        <TableData />
        <TableData />
      </div>
    </div>
  );
}

export default Table;
