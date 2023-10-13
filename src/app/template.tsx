import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen w-full overflow-x-hidden bg-gradient-to-tl  from-light-navy to-navy">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
