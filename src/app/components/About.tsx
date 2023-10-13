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
      <section
        id="about"
        className="max-w-7xl mx-auto p-5 flex flex-wrap justify-center gap-10 h-full"
      >
        <div className="w-full flex justify-center">
          <h1 className="text-4xl text-blue font-bold mb-5 border-b-4 border-orange leading-[50px] w-fit text-center">
            About
          </h1>
        </div>
        <div className="w-full lg:w-1/5 rounded-full flex items-start justify-start hover:scale-105 duration-500 ">
          <Image
            src="/me_pic.webp"
            alt="picture of me"
            className="rounded-full"
            height={250}
            width={250}
          />
        </div>
        <div className="lg:w-2/5 flex flex-col">
          <h2 className="  text-xl text-orange font-semibold leading-[50px] w-fit text-start">
            Who am I?
          </h2>
          <p className=" text-light-blue text-justify justify-start items-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repudiandae neque, quisquam totam voluptatibus reiciendis provident!
            Repellendus omnis a dolorum ut pariatur itaque quod amet dolor alias
            corrupti ipsa aliquid tempore tempora rem facilis id temporibus
            nesciunt, excepturi assumenda, ullam explicabo expedita quaerat
            consectetur dolore. Nobis officiis ducimus veritatis facilis.
          </p>
          <h2 className="  text-xl text-orange font-semibold leading-[50px] w-fit text-start">
            Skills
          </h2>
        </div>

        <div className="h-full flex flex-shrink flex-col lg:items-end justify-center flex-wrap">
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
            {/* TIMELINE */}

            <div className="h-full w-3 flex flex-col items-center justify-center">
              <div
                className="arrow-right -rotate-90"
                style={{ borderLeft: "24px solid #8484AF" }}
              ></div>
              <div className="h-[300px] w-1 bg-purple"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
