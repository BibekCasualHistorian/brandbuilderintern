"use client";
import React, { MouseEventHandler } from "react";

function LabelBoxWithDescription(props) {
  function hanldeClick() {
    props.fn(props.title);
    // console.log("handleClick");
  }
  return (
    <label
      onClick={hanldeClick}
      htmlFor={props.title}
      className="bg-secondary cursor-pointer p-4 flex flex-col gap-2 rounded-lg relative"
    >
      <input
        type="checkbox"
        id={props.title}
        className="absolute top-4 right-4"
      />
      <div className="flex gap-4 items-center">
        <p className="flex w-12 aspect-square rounded-full bg-font-secondary"></p>
        <p>{props.title}</p>
      </div>
      <div className="text-font-secondary text-[0.8rem] text-center text-balance">
        {props.description}
      </div>
    </label>
  );
}

export default LabelBoxWithDescription;
