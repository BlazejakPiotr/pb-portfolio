import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="max-w-7xl mx-auto p-5 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <SocialIcon
          className="hover:scale-125 duration-200"
          url="https://discord.com"
          style={{ width: 32, height: 32 }}
          bgColor="#8484AF"
        />
        <SocialIcon
          className="hover:scale-125 duration-200"
          url="https://github.com"
          style={{ width: 32, height: 32 }}
          bgColor="#8484AF"
        />
        <SocialIcon
          className="hover:scale-125 duration-200"
          url="https://linkedin.com"
          style={{ width: 32, height: 32 }}
          bgColor="#8484AF"
        />
        <SocialIcon
          className="hover:scale-125 duration-200"
          url="https://twitter.com"
          style={{ width: 32, height: 32 }}
          bgColor="#8484AF"
        />
      </div>
      <div className="flex items-center space-x-4 md:space-x-8">
        <Link
          href="/"
          className="text-purple hover:text-orange tracking-wide md:tracking-widest text-base font-medium"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-purple hover:text-orange tracking-wide md:tracking-widest text-base font-medium"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="text-purple hover:text-orange tracking-wide md:tracking-widest text-base font-medium"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-purple hover:text-orange tracking-wide md:tracking-widest text-base font-medium"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
