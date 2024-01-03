"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SettingNavigation = () => {
  const pathName = usePathname();
  // Define an array of links with their properties
  const links = [
    { href: "/home/settings", text: "Plans" },
    { href: "/home/settings/my-account", text: "My Account" },
    { href: "/home/settings/shipping", text: "Shipping" },
    { href: "/home/settings/my-store", text: "My Store" },
    { href: "/home/settings/pricing-rules", text: "Pricing Rules" },
  ];

  return (
    <div className="mt-5">
      <div className="bg-gray-300 p-4 flex gap-7">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="relative">
            {link.text}
            <section
              className={`w-full bg-gray-700 h-1 absolute rounded-md ${
                pathName == link.href ? "" : "hidden"
              }`}
              style={{ bottom: "-0.5em" }}
            ></section>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingNavigation;
