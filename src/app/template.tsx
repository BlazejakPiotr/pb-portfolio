import React from "react";
import Navbar from "./components/Navbar";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen w-full overflow-x-hidden bg-gradient-to-tl  from-navy to-light-navy">
      {/* navbar */}
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
