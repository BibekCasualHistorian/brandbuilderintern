import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="mt-5">
        <div className="bg-gray-200 p-4 flex gap-7">
          <Link href={"/home/settings"} className="font-bold">
            Plans
          </Link>
          <Link href={"/home/settings/my-account"} className="font-bold">
            My Account
          </Link>
          <Link href={"/home/settings/shipping"} className="font-bold">
            Shipping
          </Link>
          <Link href={"/home/settings/my-store"} className="font-bold">
            My Store
          </Link>
          <Link href={"/home/settings/pricing-rules"} className="font-bold">
            Pricing Rules
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
