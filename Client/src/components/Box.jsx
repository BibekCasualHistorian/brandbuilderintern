"use client";
import React, { useState } from "react";

function Box(props) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="bg-secondary p-3 flex flex-col gap-4">
      <div className="flex gap-4  rounded-sm items-center justify-between">
        <div className="flex gap-4 items-center">
          <p className="flex p-2 bg-primary aspect-square rounded-sm items-center text-[0.8rem]">
            Icon
          </p>
          <p className="font-bold">{props.title}</p>
          <hr className="border-[1px] opacity-60 h-[2rem] border-font-secondary" />
          <p className="text-[0.7rem] text-font-secondary px-2">
            {props.details}
          </p>
        </div>
        <button
          onClick={handleClick}
          className=" w-10 aspect-square p-2 bg-font-secondary rounded-full flex items-center justify-center text-primary rotate-90"
        >
          <p className="bg-primary w-6 flex items-center justify-center text-font-secondary font-bold rounded-full text-center">
            {">"}
          </p>
        </button>
      </div>
      {isOpen && (
        <>
          <hr className="w-[100%] border-[1px] border-font-secondary" />
          <div className="flex gap-2">
            <iframe
              className="rounded-lg"
              width="600"
              height="355"
              src="https://www.youtube.com/embed/Ttu55nEtC6o?si=C95kyUkgR0XBikuh"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div className="flex flex-col gap-1">
              <div className="flex gap-4 justify-between rounded-sm p-2 items-center border-b-[2px] border-font-secondary">
                <p className="font-bold text-[0.9rem]">
                  How to connect store to K-Goods
                </p>
                <button className="">
                  <p className="w-8 aspect-square bg-font-secondary rounded-full grid place-items-center text-primary">
                    {">"}
                  </p>
                  <p className="text-font-secondary text-[0.8rem]">5 min</p>
                </button>
              </div>
              <div className="flex gap-4 justify-between rounded-sm p-2 items-center border-b-[2px] border-font-secondary">
                <p className="font-bold text-[0.9rem]">
                  How to connect store to K-Goods
                </p>
                <button className="">
                  <p className="w-8 aspect-square bg-font-secondary rounded-full grid place-items-center text-primary">
                    {">"}
                  </p>
                  <p className="text-font-secondary text-[0.8rem]">5 min</p>
                </button>
              </div>
              <div className="flex gap-4 justify-between rounded-sm p-2 items-center border-b-[2px] border-font-secondary">
                <p className="font-bold text-[0.9rem]">
                  How to connect store to K-Goods
                </p>
                <button className="">
                  <p className="w-8 aspect-square bg-font-secondary rounded-full grid place-items-center text-primary">
                    {">"}
                  </p>
                  <p className="text-font-secondary text-[0.8rem]">5 min</p>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Box;
