import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

console.log("header", Header);

export default function RootLayout({ children }) {
  return (
    <div className="grid grid-cols-6">
      <div className="cols-span-1 bg-red-200 max-h-screen">
        <Sidebar />
      </div>
      <div className="bg-white col-span-5 p-4 px-6">
        <Header />
        {children}
      </div>
    </div>
  );
}
