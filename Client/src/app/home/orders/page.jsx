import OrdersInputs from "@/components/orders/OrdersInputs";
import Table from "@/components/orders/Table";
import React from "react";

const Orders = () => {
  return (
    <div className="mt-6">
      <div className="w-full flex flex-col gap-4 bg-primary h-screen">
        <OrdersInputs />
        <Table />
      </div>
    </div>
  );
};

export default Orders;
