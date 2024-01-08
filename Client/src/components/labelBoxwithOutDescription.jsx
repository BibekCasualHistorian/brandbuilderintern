"use client";

import React from "react";

function LabelBoxwithOutDescription(props) {
  function handleClick() {
    props.fn(props.title);
  }
  return (
    <label
      onClick={handleClick}
      htmlFor={props.title}
      className="bg-secondary cursor-pointer px-4 py-4 flex flex-col w-[200px] gap-2 rounded-lg relative"
    >
      <input
        type="checkbox"
        id={props.title}
        className="absolute top-2 right-2 accent-green-700"
      />
      <div className="flex flex-col gap-1 items-center">
        <p className="flex w-12 aspect-square  bg-font-secondary"></p>
        <p>{props.title}</p>
      </div>
    </label>
  );
}

export default LabelBoxwithOutDescription;
