import React from "react";
import Header from "./components/Header";
import TypeWriter from "./components/TypeWriter";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";

export default function template({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto flex max-lg:flex-col overflow-x-hidden mt-20 justify-between">
      <div className="w-screen lg:w-1/2 lg:h-screen flex justify-center p-3">
        <aside
          id="default-sidebar"
          className="relative lg:fixed lg:top-20 lg:bottom-20 z-40 w-82 lg:h-[calc(100vh-10rem)] transition-transform flex flex-col justify-between"
          aria-label="Sidebar"
        >
          <Header />
          <Image
            src="/me_pic.webp"
            alt="picture of me"
            width={250}
            height={250}
            className=" rounded-full mx-auto"
          />
          {/* <nav className="max-md:hidden lg:w-full">
            <ul className="text-purple  font-semibold flex flex-row justify-evenly">
              <Link href={"/#about"}>
                <li className="grid grid-cols-2 justify-start w-fit ">
                  <div className="w-[40px] flex justify-center items-center">
                    <div className="bg-purple h-[2px] w-full "></div>
                  </div>
                  <div className="flex-1">About</div>
                </li>
              </Link>
              <Link href={"/#about"}>
                <li className="grid grid-cols-2 justify-start w-fit ">
                  <div className="w-[40px] flex justify-center items-center">
                    <div className="bg-purple h-[2px] w-full "></div>
                  </div>
                  <div className="flex-1">About</div>
                </li>
              </Link>
              <li>Contact</li>
            </ul>
          </nav> */}
          <div className="w-full flex max-md:justify-center gap-2">
            <SocialIcon
              className=" text-purple rounded-full hover:scale-125 hover:text-blue duration-200"
              url="https://discord.com"
              style={{ width: 50, height: 50 }}
              bgColor="transparent"
              fgColor="currentColor"
            />
            <SocialIcon
              className=" text-purple rounded-full hover:scale-125 hover:text-blue duration-200"
              url="https://github.com"
              style={{ width: 50, height: 50 }}
              bgColor="transparent"
              fgColor="currentColor"
            />
            <SocialIcon
              className=" text-purple rounded-full hover:scale-125 hover:text-blue duration-200"
              url="https://linkedin.com"
              style={{ width: 50, height: 50 }}
              bgColor="transparent"
              fgColor="currentColor"
            />
          </div>
        </aside>
      </div>
      <div className="w-screen lg:w-1/2  lg:max-w-2xl  overflow-x-hidden p-3">
        {children}
      </div>

      {/* <nav className="w-2/5 fixed top-0 left-0 bottom-0 w- text-white bg-red-500 overflow-y-hidden container mx-auto flex flex-col justify-center items-center">
        test
      </nav> */}
    </main>
  );
}
