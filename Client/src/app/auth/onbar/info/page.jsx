import Inputs from "@/components/Input";
import Input from "@/components/Input";
import React from "react";

const Info = () => {
  return (
    <div className="text-center w-full px-10 py-8">
      <h2 className="text-4xl mb-5 font-bold">Fill your personal info</h2>

      <Inputs
        labelOne="Name"
        typeOne="text"
        inputOneName="name"
        labelTwo="Last Name"
        typeTwo="text"
        inputTwoName="last-name"
      />
      <Inputs
        labelOne="Email Address"
        typeOne="email"
        inputOneName="email"
        labelTwo="Phone Number"
        typeTwo="number"
        inputTwoName="phone-number"
      />
      <Inputs
        labelOne="User Name"
        typeOne="text"
        inputOneName="user-name"
        labelTwo="Business Name"
        typeTwo="text"
        inputTwoName="business-name"
      />

      <div className="mr-auto text-left  w-1/2 px-7">
        <label htmlFor="country">Country/Region</label> <br />
        <input
          autoComplete="no"
          type="text"
          name="country"
          id="country"
          className="bg-gray-300 p-1.5 px-2 text-gray-600 mt-1 w-full hover:outline-none"
        />
      </div>

      <Inputs
        labelOne="Address"
        typeOne="text"
        inputOneName="address"
        labelTwo="Postal Code"
        typeTwo="text"
        inputTwoName="postal-code"
      />
      <Inputs
        labelOne="New Password"
        typeOne="text"
        inputOneName="new-password"
        labelTwo="Confirm Password"
        typeTwo="text"
        inputTwoName="confirm-password"
      />

      <button className="bg-gray-600 text-white p-2 mt-5 min-w-96 font-bold">
        Apply
      </button>
    </div>
  );
};

export default Info;
