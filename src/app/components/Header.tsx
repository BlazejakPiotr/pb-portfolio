import Image from "next/image";
import React from "react";
import TypeWriter from "./TypeWriter";

type Props = {};

const Header = (props: Props) => {
  return (
    <section className="relative z-0 h-[calc(100vh-56px)] w-full flex  justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-4 flex-grow">
        <div className="  bg-gradient-to-tr   from-5% from-light-blue to-transparent  rounded-full flex items-center justify-center shadow-md shadow-gray-400 hover:scale-105   duration-500 p-1">
          <Image
            src="/me_pic.webp"
            alt="picture of me"
            className="rounded-full"
            height={150}
            width={150}
          />
        </div>
        <div>
          <p className="text-light-blue text-center  font-bold text-3xl leading-10">
            Hello, my name is <span className="text-orange">Piotr</span>
          </p>

          <TypeWriter />
        </div>
      </div>
      <div className="absolute -z-10  w-[50%] md:w-[20%] h-[30%] filter blur-3xl opacity-70 gradie bg-gradient-to-t from-purple to-light-navy rounded-full"></div>
    </section>
  );
};

export default Header;
