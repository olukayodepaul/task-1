import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";

const ubuntu = localFont({
  src: [
    {
      path: "../font/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "beeceptor",
    template: "%s | beeceptor",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className}`}>{children}</body>
    </html>
  );
}
