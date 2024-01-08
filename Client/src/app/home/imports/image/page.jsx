import image from "/public/image.jpg";
import ImportImageBox from "@/components/imports/images/ImportImageBox";
console.log(image);

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
