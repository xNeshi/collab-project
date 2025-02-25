import type { Metadata } from "next";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { workSans } from "../public/fonts/fonts";
import { Toaster } from "@/components/ui/sonner";

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
      <body className={`${workSans.variable} antialiased`}>
        <main>{children}</main>
        <Toaster
          richColors
          theme="light"
          expand={true}
          position="top-right"
        />
      </body>
    </html>
  );
}
