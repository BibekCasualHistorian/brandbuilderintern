import InteractiveOnbar from "@/components/InteractiveOnbar";
import { Inter } from "next/font/google";

export default function AuthLayout({ children }) {
  return (
    <div className="grid grid-cols-4">
      <div className="min-h-screen bg-gray-300">
        <InteractiveOnbar />
      </div>
      <div className="px-8 col-span-3">{children}</div>
    </div>
  );
}
