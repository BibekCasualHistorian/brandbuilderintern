import SettingNavigation from "@/components/settings/SettingNavigation";

export default function RootLayout({ children }) {
  return (
    <div>
      <SettingNavigation />
      {children}
    </div>
  );
}
