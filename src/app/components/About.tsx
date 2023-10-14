import Image from "next/image";
import React from "react";

type Props = {};

const TimelineMarker = ({ name, year }: { name: string; year: number }) => (
  <div className="flex justify-end h-16">
    <>
      <p className="flex-1 font-normal text-blue mr-2">{name}</p>

      <div className="h-6 w-16 bg-purple text-white text-center font-bold">
        {year}
      </div>
      <div className="arrow-right"></div>
    </>
  </div>
);

const About = (props: Props) => {
  return (
    <>
      <section id="about" className="flex flex-col gap-5">
        <h1 className="text-2xl  text-light-blue font-semibold text-start h-fit border-b-2  border-orange w-fit ">
          About
        </h1>

        <div className="flex flex-row flex-wrap gap-10">
          <p className="flex  text-blue text-justify justify-center items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repudiandae neque, quisquam totam voluptatibus reiciendis provident!
            Repellendus omnis a dolorum ut pariatur itaque quod amet dolor alias
            corrupti ipsa aliquid tempore tempora rem facilis id temporibus
            nesciunt, excepturi assumenda, ullam explicabo expedita quaerat
            consectetur dolore. Nobis officiis ducimus veritatis facilis.
          </p>
        </div>
        {/* <h1 className="text-4xl text-light-blue font-bold text-center h-fit mt-[72px]">
          Skills <span className="text-orange">&</span> tools
        </h1>

        <div className="grid grid-cols-4 lg:grid-cols-9 gap-4  justify-stretch">
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
          <div className="w-16 h-16 rounded-full border-2 border-blue bg-contain bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201)]"></div>
        </div> */}
        {/* <div className="h-full flex flex-1 lg:flex-shrink flex-col lg:items-end justify-center flex-wrap">
          <h2 className="  text-xl text-orange font-semibold leading-[50px] w-fit text-center">
            Work experience
          </h2>
          <div className="flex">
            <div className="h-full flex flex-col max-md:items-center lg:items-end lg:justify-end pt-12">
              <TimelineMarker name="Sysmo sp. z o.o." year={2023} />
              <TimelineMarker name="Deor sp. z o.o." year={2022} />

              <TimelineMarker name="Farma Małecki" year={2018} />
              <TimelineMarker name="DEMCAR Michał Delik" year={2014} />
            </div>
            {/* TIMELINE 

            <div className="h-full w-3 flex flex-col items-center justify-center">
              <div
                className="arrow-right -rotate-90"
                style={{ borderLeft: "24px solid #8484AF" }}
              ></div>
              <div className="h-[300px] w-1 bg-purple"></div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default About;
