import "../styles/globals.css";
import "../../public/fonts/fonts.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="luxury">
      {/* themes: dark, winter */}
      <body className="bg-black">{children}</body>
    </html>
  );
}
