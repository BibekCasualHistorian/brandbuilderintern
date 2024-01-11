"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function MyComponent() {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      placeholder="Write your thoughts here"
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
}

const Description = () => {
  return (
    <div>
      <div className="text-right">
        <button className="bg-red-300 px-5 py-3">Import Description</button>
      </div>
      <div className="mt-3 min-h-52">
        <MyComponent />
      </div>
    </div>
  );
};

export default Description;
