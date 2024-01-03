import ImportNavigation from "@/components/imports/ImportNavigation";
import ImportSearch from "@/components/imports/ImportSearch";

export default function RootLayout({ children }) {
  return (
    <div className="">
      <div className="mt-5">
        <ImportSearch />
        <ImportNavigation />
      </div>
      <div className="bg-gray-200 p-3">{children}</div>
    </div>
  );
}
