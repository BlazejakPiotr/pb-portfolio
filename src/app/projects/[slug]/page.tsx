"use client";
import { useEffect } from "react";
import { MdPreview } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { FiFigma } from "react-icons/fi";
export default function Project() {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <section className="max-w-7xl mx-auto p-5 min-h-screen flex flex-col ">
      <div className="flex flex-col-reverse flex-wrap md:flex-row gap-10">
        <div className="w-full lg:w-2/5 bg-orange min-h-[350px]">1</div>
        <div className="flex-1">
          <h1 className="text-3xl w-full text-light-navy font-bold h-min ">
            Project title
          </h1>
          <p className="text-xs">(December 2021)</p>

          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            dolorum soluta cum sed distinctio necessitatibus magnam accusantium
            illum delectus natus amet, est commodi, pariatur possimus! Natus
            ipsum tempora autem unde minima deleniti quos necessitatibus
            voluptatum vitae! Libero repellendus porro quos aliquam eveniet
            illum nam quibusdam rem ut saepe incidunt voluptatum neque eum,
            quaerat eius animi nulla?
          </p>

          <ul className="flex gap-5">
            <li className=" w-full  h-[52px]   flex-1">
              <Link
                href={"/"}
                className=" bg-light-navy rounded-lg py-2 text-light-blue flex justify-center items-center font-bold  h-full"
              >
                <SocialIcon
                  className=" text-light-blue rounded-full"
                  url="https://github.com"
                  style={{ width: 34, height: 34 }}
                  bgColor="transparent"
                  fgColor="currentColor"
                />{" "}
                Github
              </Link>
            </li>
            <li className=" w-full h-[52px]  flex-1">
              <Link
                href={"/"}
                className=" bg-light-navy rounded-lg py-2 text-light-blue flex justify-center items-center font-bold  h-full gap-2"
              >
                <span className="text-2xl">
                  <MdPreview />
                </span>
                Preview
              </Link>
            </li>
            <li className=" w-full h-[52px]  flex-1">
              <Link
                href={"/"}
                className=" bg-light-navy rounded-lg py-2 text-light-blue flex justify-center items-center font-bold  h-full gap-2"
              >
                <span className="text-2xl">
                  <FiFigma />
                </span>
                Design
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
