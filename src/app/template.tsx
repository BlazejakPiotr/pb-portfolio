"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden bg-gradient-to-tl  ${
        pathname.startsWith("/projects/")
          ? "from-light-blue to-blue"
          : "from-light-navy to-navy"
      }`}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
