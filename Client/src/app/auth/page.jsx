"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  console.log("email", email);
  console.log("password", password);
  console.log("remember me", rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      });
      const data = await response.json();
      console.log("response", response);
      console.log("data", data);
      if (response.ok) {
        console.log("response.ok");
        redirect("/auth/onbar");
      } else {
        throw Error(data.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <form
        className="text-center justify-items-center max-w-md w-5/6 h-fit m-auto p-2 py-3 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-5xl font-semibold mb-7">K-Goods</h1>
        <h2 className="text-3xl my-6">Login to K-Goods</h2>

        <div className="text-left my-1.5">
          <label htmlFor="username" className="font-semibold">
            Username/Email:
          </label>
          <br />
          <input
            className="bg-gray-200 w-full p-1.5 my-1 hover:outline-none"
            type="text"
            name="username"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className=" text-left mt-1.5">
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <br />
          <input
            className="bg-gray-200 w-full p-1.5 my-1 hover:outline-none"
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-row justify-between my-3">
          <Link href={""}>Forgot Password</Link>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              value={rememberMe}
              onChange={(e) => {
                console.log("e", e.target.checked);
                setRememberMe(e.target.checked);
              }}
            />
            <p>Remember me</p>
          </div>
        </div>

        <p className="h-4 text-red-900 mb-4">{error}</p>

        <button
          type="submit"
          className="bg-gray-500 text-white w-full block p-2 rounded-"
        >
          Login
        </button>

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
