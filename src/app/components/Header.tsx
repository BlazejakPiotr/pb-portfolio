import Image from "next/image";
import React from "react";
import TypeWriter from "./TypeWriter";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <section className="relative z-0 h-[calc(100vh-72px)] w-full flex justify-center items-center space-x-10">
      <div className="flex flex-col justify-center items-center flex-grow gap-10">
        <div className="rounded-full flex items-center justify-center shadow-md shadow-gray-400 hover:scale-105 duration-500 ">
          <Image
            src="/me_pic.webp"
            alt="picture of me"
            className="rounded-full"
            height={250}
            width={250}
          />
        </div>
        <div className=" max-w-3xl">
          <p className="text-light-blue text-2xl lg:text-4xl text-center font-bold">
            My name is <span className="text-orange">Piotr</span> and I am
          </p>

          <TypeWriter />
          {/* <p className="whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            eius doloribus cum cumque illum facere ducimus asperiores nam eaque
            architecto!
          </p> */}
        </div>
        <div className="absolute -z-10  w-[50%] md:w-[20%] h-[50%] filter blur-3xl opacity-70 gradie bg-gradient-to-t from-purple to-light-navy rounded-full"></div>
      </div>
    </section>
  );
};

export default Header;
