import React from "react";

const Inputs = ({
  labelOne,
  typeOne,
  inputOneName,
  labelTwo,
  typeTwo,
  inputTwoName,
}) => {
  return (
    <div className="flex justify-evenly text-left my-3">
      <div
        className={labelOne == "Address" ? "basis-2/3 px-7" : "basis-1/2 px-7 "}
      >
        <label htmlFor={inputOneName}>{labelOne}</label> <br />
        <input
          autoComplete="no"
          type={typeOne}
          name={inputOneName}
          id={inputOneName}
          className="bg-gray-300 p-1.5 px-2 text-gray-600 mt-1 w-full outline-none hover:outline-none"
        />
      </div>
      <div
        className={labelOne == "Address" ? "basis-1/3 px-7" : "basis-1/2 px-7"}
      >
        <label htmlFor={inputTwoName}>{labelTwo}</label> <br />
        <input
          autoComplete="no"
          className="bg-gray-300 p-1.5 mt-1 w-full outline-none hover:outline-none"
          type={typeTwo}
          name={inputTwoName}
          id={inputTwoName}
        />
      </div>
    </div>
  );
};

export default Inputs;
