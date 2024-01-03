import Image from "next/image";
import image from "/public/image.jpg";
console.log(image);

const ImportImageBox = () => {
  return (
    <div className=" p-2 relative h-40 rounded-sm ">
      <input
        type="checkbox"
        name=""
        id=""
        className="absolute z-10 top-5 left-5 w-5 h-5 "
      />
      <Image
        src={image}
        alt="Rally"
        fill
        className="relative rounded-md object-cover"
      />
    </div>
  );
};

const ImportImage = () => {
  return (
    <div className="p-4 grid content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 slg:grid-cols-4 gap-8 min-h-96">
      <ImportImageBox />
      <ImportImageBox />
      <ImportImageBox />
      <ImportImageBox />
      <ImportImageBox />
      <ImportImageBox />
      <ImportImageBox />
      <ImportImageBox />
      <ImportImageBox />
      <ImportImageBox />
    </div>
  );
};

export default ImportImage;
