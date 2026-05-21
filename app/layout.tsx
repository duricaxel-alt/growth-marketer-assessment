import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MyEdSpace — Live online math classes for US students",
  description:
    "Live math classes twice a week in your timezone. Taught by a UCLA math grad with a perfect SAT score. Try it for $7.",
  icons: {
    icon: "/assets/img/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
