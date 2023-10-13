import React from "react";
import TypeWriter from "./TypeWriter";

type Props = {};

const Header = (props: Props) => {
  return (
    <section
      className="relative z-0 h-screen w-full flex justify-center items-center space-x-10 "
      id="/#home"
    >
      <div className="flex flex-col justify-center items-center flex-grow gap-10">
        <div className=" flex items-center justify-center hover:scale-105 duration-200 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="250px"
            viewBox="0 0 1421.07 1622"
            className="fill-blue  hover:fill-light-blue duration-300"
          >
            <g id="Shape" fill-rule="nonzero" stroke="#8484AF" strokeWidth="21">
              <path d="M588.07,468V655h137c138,0,220-61,220-187,0-254-281-250-281-250H286.79L31.07,11h635c247,0,437.44,137.42,483,304,32,117,27.34,299-61,362-1.17.83,7,3,13.26,4.72,70.32,19.3,308.74,131.66,308.74,462.28,0,467-403,467-403,467h-976l247.5-226h592.5s278,10,278-254c0-141-88-283-307-283h-254v387h-249l-.5-767Z"></path>
            </g>
          </svg>
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
