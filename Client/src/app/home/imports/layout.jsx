import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div className="">
      <div className="mt-5">
        <div className="flex gap-3 items-center">
          <div className="flex gap-4 bg-red-200 p-2.5 items-center px-5">
            <section className="w-7 h-7 bg-gray-600"></section>
            <h2 className="">All</h2>
          </div>
          <div className="bg-red-200 flex basis-3/5 p-2.5">
            <section className="w-7 h-7 bg-gray-600"></section>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Keyword"
              className="w-4/6 ml-4 border-none hover:outline-none outline-none bg-red-200"
            />
          </div>
          <button className="bg-black text-white p-3 px-8">Search</button>
          <div className="flex gap-4 bg-red-200 p-2.5 items-center px-5 ml-auto">
            <section className="w-7 h-7 bg-gray-600"></section>
            <h3 className="">Filter</h3>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-7 border-dotted border-2 border-black p-2 bg-gray-200">
          <div className="p-4  px-6 border-dotted border-r-2">
            <section className="w-7 h-7 bg-gray-500"></section>
          </div>
          <div className="flex gap-7 px-5 h-full">
            <Link
              href={"/home/imports"}
              className="text-lg font-semibold flex flex-col justify-between h-full border-red-400 border-2 "
            >
              <h2>Product</h2>
              <section className="w-full h-1.5 bg-gray-700 rounded"></section>
            </Link>
            <Link
              href={"/home/imports/variants-price"}
              className="text-lg font-semibold"
            >
              Variants/Price
            </Link>
            <Link
              href={"/home/imports/description"}
              className="text-lg font-semibold"
            >
              Description
            </Link>
            <Link
              href={"/home/imports/image"}
              className="text-lg font-semibold inline-block h-5/6"
            >
              Image
            </Link>
          </div>
          <div className="ml-auto">
            <button className="p-3 px-6 bg-red-200 mx-2">More Action</button>
            <button className="p-3 px-6 bg-red-200 mx-2">Import Product</button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-3">{children}</div>
    </div>
  );
}
