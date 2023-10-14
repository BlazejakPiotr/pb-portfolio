import React from "react";
import TypeWriter from "./TypeWriter";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex flex-row w-full justify-start items-start  gap-5 max-md:items-center  max-md:justify-center max-md:text-center">
      <div className=" flex  items-start justify-start hover:scale-105 duration-200 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="120px"
          viewBox="0 0 1421.07 1622"
          className="fill-light-blue  hover:fill-purple duration-300 w-[75px] h-[75px]  xl:w-[90px] xl:h-[90px]  2xl:w-[100px] 2xl:h-[100px] "
        >
          <g id="Shape" fill-rule="nonzero" stroke="#8484AF" strokeWidth="21">
            <path d="M588.07,468V655h137c138,0,220-61,220-187,0-254-281-250-281-250H286.79L31.07,11h635c247,0,437.44,137.42,483,304,32,117,27.34,299-61,362-1.17.83,7,3,13.26,4.72,70.32,19.3,308.74,131.66,308.74,462.28,0,467-403,467-403,467h-976l247.5-226h592.5s278,10,278-254c0-141-88-283-307-283h-254v387h-249l-.5-767Z"></path>
          </g>
        </svg>
      </div>
      <div className="">
        <p className="text-light-blue text-3xl xl:text-5xl 2xl:text-6xl font-bold pr-10">
          Piotr Błażejak
        </p>

        <TypeWriter />
      </div>
    </div>
  );
};

export default Header;
