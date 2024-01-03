import Link from "next/link";
import React from "react";

const Auth = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <form className="text-center justify-items-center max-w-md w-5/6 h-fit m-auto p-2 py-3 ">
        <h1 className="text-5xl font-semibold mb-7">K-Goods</h1>
        <h2 className="text-3xl my-6">Login to K-Goods</h2>

        <div className="text-left my-1.5">
          <label htmlFor="username" className="font-semibold">
            Username/Email:
          </label>{" "}
          <br />
          <input
            className="bg-gray-200 w-full p-1.5 my-1 hover:outline-none"
            type="text"
            name="username"
            id="username"
          />
        </div>

        <div className=" text-left mt-1.5">
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>{" "}
          <br />
          <input
            className="bg-gray-200 w-full p-1.5 my-1 hover:outline-none"
            type="text"
            name="password"
            id="password"
          />
        </div>

        <div className="flex flex-row justify-between my-3">
          <Link href={""}>Forgot Password</Link>
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <p>Remember me</p>
          </div>
        </div>

        <Link
          href={""}
          className="bg-gray-500 text-white w-full block p-2 rounded-"
        >
          Login
        </Link>

        <div className="mt-3 relative">
          <p className="absolute w-5/12 h-0.5 bg-gray-300 top-1/2 right-0"></p>
          <p className="absolute w-5/12 h-0.5 bg-gray-300 top-1/2"></p>
          <p className="">Or</p>
        </div>

        <div className="flex justify-between my-3.5 gap-4 w-full">
          <div className="bg-gray-300 p-2.5 rounded-sm flex justify-center items-center gap-2">
            <span className="w-5 h-5 bg-slate-400"></span>
            <p>Google</p>
          </div>
          <div className="bg-gray-300 p-2.5 rounded-sm flex justify-center items-center gap-2">
            <span className="w-5 h-5 bg-slate-400"></span>
            <p>Facebook</p>
          </div>
          <div className="bg-gray-300 p-2.5 rounded-sm flex justify-center items-center gap-2">
            <span className="w-5 h-5 bg-slate-400"></span>
            <p>Shopify</p>
          </div>
        </div>

        <div className="mt-6 text-gray-700">
          News at K-Goods?{" "}
          <Link href={""} className="text-black cursor-pointer">
            Register
          </Link>
        </div>
      </form>
      <div className="bg-slate-300 hidden lg:block"></div>
    </div>
  );
};

export default Auth;
