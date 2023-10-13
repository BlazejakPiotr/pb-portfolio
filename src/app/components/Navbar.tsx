"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import { SocialIcon } from "react-social-icons";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { BiMenu, BiSolidUserCircle } from "react-icons/bi";
import { MdClose } from "react-icons/md";
type Props = {};

type NavLinkType = {
  href: string;
  title: string;
};

export const navLinks: NavLinkType[] = [
  { href: "/", title: "Home" },
  { href: "/#about", title: "About" },
  { href: "/#projects", title: "Projects" },
  { href: "/#contact", title: "Contact" },
  // { href: "/blog", title: "Blog" },
];

const Navbar = (props: Props) => {
  let pathname = usePathname() || "/";
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="px-6  fixed top-0 left-0 right-0 w-full bg-light-navy z-50 ">
          <div className="max-w-7xl h-[72px]  mx-auto flex items-center justify-between ">
            <div className=" inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-blue hover:bg-navy hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5 " />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <MdClose className="block h-8 w-8 " aria-hidden="true" />
                ) : (
                  <BiMenu className="block h-8 w-8" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex items-center space-x-4">
              <SocialIcon
                className="bg-light-navy text-purple rounded-full hover:scale-125 hover:text-light-blue duration-200"
                url="https://discord.com"
                style={{ width: 42, height: 42 }}
                bgColor="transparent"
                fgColor="currentColor"
              />
              <SocialIcon
                className="bg-light-navy text-purple rounded-full hover:scale-125 hover:text-light-blue duration-200"
                url="https://github.com"
                style={{ width: 42, height: 42 }}
                bgColor="transparent"
                fgColor="currentColor"
              />
              <SocialIcon
                className="bg-light-navy text-purple rounded-full hover:scale-125 hover:text-light-blue duration-200"
                url="https://linkedin.com"
                style={{ width: 42, height: 42 }}
                bgColor="transparent"
                fgColor="currentColor"
              />
            </div>
            <div className=" max-md:hidden flex items-center space-x-2 md:space-x-10  h-full justify-center">
              {navLinks.map((el, i) => (
                <Link
                  href={el.href}
                  key={i}
                  prefetch
                  className={`h-full flex items-center hover:text-blue tracking-wide md:tracking-widest text-base font-medium ${
                    pathname === el.href
                      ? "border-orange text-light-blue inline-flex items-center px-1 pt-1 border-b-4 font-bold h-full"
                      : "border-transparent text-purple"
                  }`}
                >
                  {el.title}
                </Link>
              ))}
            </div>
            {/* <div> */}
            {/* <button
                className="border-blue border-2 rounded-lg py-2 px-6 text-blue font-bold hover:bg-orange hover:text-light-blue hover:border-orange hover:scale-110 duration-150"
                onClick={() => console.log("click")}
              >
                Sign In
              </button> */}
            {/* <Menu as="div">
                <Menu.Button className="relative items-center justify-center rounded-md text-4xl p-2 text-blue hover:bg-navy hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />

                  <BiSolidUserCircle />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={"block px-4 py-2 text-sm text-gray-700"}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={"block px-4 py-2 text-sm text-gray-700"}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={"block px-4 py-2 text-sm text-gray-700"}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu> */}
            {/* </div> */}
          </div>

          <Disclosure.Panel className="sm:hidden absolute left-0 right-6 z-10 bg-light-navy">
            <div className=" space-y-1 px-2 pb-3 pt-2">
              {navLinks.map((item, i) => (
                <Disclosure.Button
                  key={item.title + i}
                  as="a"
                  href={"#"}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    pathname === item.href
                      ? "bg-gray-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }
                    
                  `}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
