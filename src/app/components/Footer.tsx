import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="w-full relative  bg-blue">
      <div className="mx-auto max-w-xl h-full text-center flex flex-col justify-between py-8 gap-4">
        <div className="flex gap-8 justify-center">
          <SocialIcon
            className="bg-light-navy text-light-blue rounded-full hover:scale-125 hover:bg-orange duration-200"
            url="https://discord.com"
            style={{ width: 42, height: 42 }}
            bgColor="transparent"
            fgColor="currentColor"
          />
          <SocialIcon
            className="bg-light-navy text-light-blue rounded-full hover:scale-125 hover:bg-orange duration-200"
            url="https://github.com"
            style={{ width: 42, height: 42 }}
            bgColor="transparent"
            fgColor="currentColor"
          />
          <SocialIcon
            className="bg-light-navy text-light-blue rounded-full hover:scale-125 hover:bg-orange duration-200"
            url="https://linkedin.com"
            style={{ width: 42, height: 42 }}
            bgColor="transparent"
            fgColor="currentColor"
          />
        </div>
        <div className="flex gap-2 justify-center text-sm text-navy ">
          <Link className="hover:text-orange hover:font-bold" href={"/"}>
            Home
          </Link>
          •
          <Link className="hover:text-orange hover:font-bold" href={"/"}>
            About
          </Link>
          •
          <Link className="hover:text-orange hover:font-bold" href={"/"}>
            Portfolio
          </Link>
          •
          <Link className="hover:text-orange hover:font-bold" href={"/"}>
            Contact
          </Link>
        </div>
        <p className=" text-xs text-gray-700">
          © 2023 Copyright: Piotr Błażejak
        </p>
      </div>
    </footer>
  );
}

export default Footer;
