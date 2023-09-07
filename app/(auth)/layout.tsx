import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] }); // This is the font we're using
export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads-Clone Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
