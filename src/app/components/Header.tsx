import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <section className="h-[calc(100vh-56px)] w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className=" bg-light-navy border-light-blue border-2 rounded-full flex items-center justify-center shadow-md shadow-gray-400 hover:scale-105 hover:border-blue hover:bg-orange duration-500 p-2">
          <Image
            src="/me_pic.webp"
            alt="picture of me"
            className="rounded-full"
            height={150}
            width={150}
          />
        </div>
        <p className="text-blue font-bold text-2xl">
          Welcome, my name is <span className="text-orange">Piotr</span>
        </p>
      </div>
    </section>
  );
};

export default Header;
