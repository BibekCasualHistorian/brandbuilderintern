"use client";

import Inputs from "@/components/Input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Info = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const form = new FormData();
    const formData = new FormData(event.target);

    // // Iterate over form data entries
    // for (const [name, value] of formData.entries()) {
    //   console.log(`${name}: ${value}`);
    // }

    const formDataToObject = (formData) => {
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      return object;
    };

    // Example usage:
    let formDataObject = formDataToObject(formData);

    const userId = JSON.parse(localStorage.getItem("user"));
    formDataObject = { ...formDataObject, _id: userId._id };
    try {
      const response = await fetch("http://localhost:3001/api/user/userInfo", {
        method: "POST",
        body: JSON.stringify(formDataObject),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("response", response);
      console.log("data", data);
      if (response.ok) {
        router.push("/auth/onbar/store");
      } else {
        throw Error(data.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="text-center w-full px-10 py-8" onSubmit={handleSubmit}>
      <h2 className="text-4xl mb-5 font-bold">Fill your personal info</h2>

      <Inputs
        labelOne="Name"
        typeOne="text"
        inputOneName="name"
        labelTwo="Last Name"
        typeTwo="text"
        inputTwoName="lastName"
      />
      <Inputs
        labelOne="Email Address"
        typeOne="email"
        inputOneName="email"
        labelTwo="Phone Number"
        typeTwo="number"
        inputTwoName="phoneNumber"
      />
      <Inputs
        labelOne="User Name"
        typeOne="text"
        inputOneName="userName"
        labelTwo="Business Name"
        typeTwo="text"
        inputTwoName="businessName"
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
        inputTwoName="postalCode"
      />
      <Inputs
        labelOne="New Password"
        typeOne="text"
        inputOneName="newPassword"
        labelTwo="Confirm Password"
        typeTwo="text"
        inputTwoName="confirmPassword"
      />

      <button
        type="submit"
        className="bg-gray-600 text-white p-2 mt-5 min-w-96 font-bold"
      >
        Apply
      </button>
    </form>
  );
};

export default Info;
