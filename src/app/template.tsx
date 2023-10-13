import React from "react";
import Navbar from "./components/Navbar";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-tl  from-navy to-light-navy">
      {/* navbar */}
      <Navbar />
      <main className="relative">
        <div className="absolute top-0  bottom-0 left-0 right-0 bg-[url(/bg.webp)] mix-blend-overlay"></div>
        {children}
      </main>
    </div>
  );
}
