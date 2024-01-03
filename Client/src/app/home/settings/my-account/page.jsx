import MyAccountInput from "@/components/settings/My-Account/MyAccountInput";
import React from "react";

const MyAccount = () => {
  return (
    <div className="bg-gray-200 mt-4 p-8">
      <h2 className="text-xl font-semibold">Personal Info</h2>
      <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 slg:grid-cols-3 gap-4">
        <MyAccountInput />
        <MyAccountInput />
        <MyAccountInput />
        <MyAccountInput />
        <MyAccountInput />
        <MyAccountInput />
        <MyAccountInput />
        <MyAccountInput />
        <MyAccountInput />
        <MyAccountInput />
        <MyAccountInput />
        <div className="flex">
          <button className="bg-gray-700 text-white p-2.5 px-5 mt-auto">
            Save Changes
          </button>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-7">Password</h2>
      <div className=" mt-4 grid grid-cols-1 sm:grid-cols-2 slg:grid-cols-3 gap-4">
        <MyAccountInput />
        <MyAccountInput />
        <MyAccountInput />
        <div>
          <button className="bg-gray-600 p-2.5 px-5 text-white">
            Save Password
          </button>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-5">Payment </h2>
      <p className="text-gray-700 mt-3">Choose Payment Account</p>
      <div className="mt-4">
        <button className="px-12 py-3 bg-gray-300 mr-7">Visa</button>
        <button className="px-12 py-3 bg-gray-300 mr-7">Google Pay</button>
        <button className="px-12 py-3 bg-gray-300 mr-7">Other Methods</button>
        <span className="border-l-2 border-gray-700 mr-7 h-full"></span>
        <button className="px-12 py-3 bg-white mr-7">Paypal</button>
      </div>

      <button className="p-3 px-5 bg-gray-400 mt-6">Delete Account</button>
    </div>
  );
};

export default MyAccount;
