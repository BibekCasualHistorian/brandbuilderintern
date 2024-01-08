"use client";

import LabelBoxwithOutDescription from "@/components/labelBoxwithOutDescription";
import React, { useCallback, useState } from "react";

const data = [
  {
    title: "Accessories",
  },
  {
    title: "Automative",
  },
  {
    title: "Bags",
  },
  {
    title: "Bath/Beauty",
  },
  {
    title: "Footwear",
  },
  {
    title: "Gifts",
  },
  {
    title: "Home/Garden",
  },
  {
    title: "Jewelry",
  },
  {
    title: "Kids",
  },
  {
    title: "Babies",
  },
  {
    title: "Wallets",
  },
  {
    title: "Watches",
  },
  {
    title: "Pets",
  },
  {
    title: "Man Wear",
  },
  {
    title: "Woman Wear",
  },
  {
    title: "Other",
  },
];

const categories = () => {
  const [products, setProducts] = useState([]);

  console.log("products at line 60", products);

  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await fetch(
        "http://localhost:3001/api/user/createproductcategory",
        {
          method: "POST",
          body: JSON.stringify({ _id: user._id, products }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log("response", response);
      console.log("data", data);
      if (response.ok) {
        router.push("/home");
      } else {
        throw Error(data.error);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // const handleProduct = (product) => {
  //   console.log("handleProduct Products", products);
  //   console.log("handleProduct product", product);
  //   if (products.includes(product)) {
  //     return;
  //   }
  //   setProducts((prevState) => {
  //     console.log("prevState", prevState);
  //     const newState = prevState;
  //     return [...newState, product];
  //   });
  // };

  // const handleProduct = useCallback((product) => {
  //   console.log("handleProduct Products", products);
  //   console.log("handleProduct product", product);
  //   setProducts((prevState) => {
  //     console.log("prevState", prevState);
  //     const newState = [...prevState, product];
  //     console.log("newState", newState);
  //     return newState;
  //   });
  // }, []);

  const handleProduct = useCallback((product) => {
    console.log("handleProduct Products", products);
    console.log("handleProduct product", product);
    setProducts((prevState) => {
      console.log(prevState);
      return [...prevState, product];
    });
  }, []);

  console.log("products at line 99", products);

  return (
    <div className="flex items-center justify-center mt-3">
      <div className="text-black flex flex-col gap-2 p-1 rounded-lg bg-primary">
        <p className="font-bold text-[1.1rem]">Choose Product Category</p>
        <p>
          What product do you want to sell? You should choose at less 3
          categories
        </p>
        <div className=" gap-4 text-center ">
          <div className="flex flex-wrap gap-4 items-center justify-center ">
            {data.map((item, index) => (
              <LabelBoxwithOutDescription
                key={index}
                title={item.title}
                fn={handleProduct}
              />
            ))}
          </div>

          <h1>{error}</h1>
          <button
            onClick={handleSubmit}
            className="w-fit px-20 py-2 mt-3 bg-font-secondary text-primary rounded-sm "
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default categories;
