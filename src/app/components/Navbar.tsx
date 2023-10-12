import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="max-w-7xl mx-auto p-5 flex items-center justify-between">
      <div></div>
      <div className="flex items-center space-x-4 md:space-x-8">
        <Link
          href="/"
          className="text-purple hover:text-orange tracking-wide md:tracking-widest text-base font-normal"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-purple hover:text-orange tracking-wide md:tracking-widest text-base font-normal"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="text-purple hover:text-orange tracking-wide md:tracking-widest text-base font-normal"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-purple hover:text-orange tracking-wide md:tracking-widest text-base font-normal"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
