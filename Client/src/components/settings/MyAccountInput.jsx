import React from "react";

const MyAccountInput = () => {
  return (
    <div className="text-left">
      <label htmlFor="name" className="font-semibold">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="mt-0.5 w-full bg-white p-2 text-gray-700 border-gray-500 border-2 outline-none hover:outline-none"
        placeholder="Type your name"
      />
    </div>
  );
};

export default MyAccountInput;
