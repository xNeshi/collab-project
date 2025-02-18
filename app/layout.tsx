import type { Metadata } from "next";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { workSans } from "../public/fonts/fonts";

export const metadata: Metadata = {
  title: "Collab Project",
  description: "Find your next project to work on",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
