import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const ProjectItem = ({
  image,
  id,
  desc,
}: {
  image: string;
  id: string;
  desc: string;
}) => (
  <Link
    href={`/projects/${id}`}
    className="relative aspect-video h-full rounded-lg group cursor-pointer shadow-lg shadow-navy hover:scale-105 duration-300"
  >
    <Image
      src={image}
      alt=""
      className="h-full w-full rounded-lg object-cover"
      height={300}
      width={300}
    />
    <div className=" bg-light-navy absolute top-0 left-0 h-full w-full flex justify-center items-center text-white p-5 text-xs text-center rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in duration-300">
      {desc}
    </div>
  </Link>
);

const Projects = (props: Props) => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto p-5 flex flex-col flex-wrap justify-center items-center gap-10 min-h-screen"
    >
      <h1 className="text-4xl text-light-blue font-bold text-center h-fit mt-[72px]">
        My <span className="text-orange ">projects</span>
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 place-content-between gap-10">
        <ProjectItem
          image="/test.png"
          id={"1"}
          desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus quam odit voluptate quisquam fugiat harum iusto provident, dolore eaque!"
        />{" "}
        <ProjectItem
          image="/test.png"
          id={"1"}
          desc="quidem accusamus ipsa iure ipsum modi ipsam nesciunt maiores ex? Tenetur, dignissimos. Laudantium architecto numquam eum deserunt incidunt esse aliquam amet, fugiat officia."
        />{" "}
        <ProjectItem image="/test.png" id={"1"} desc="none" />
        <ProjectItem
          image="/test.png"
          id={"1"}
          desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus quam odit voluptate quisquam fugiat harum iusto provident, dolore eaque!"
        />{" "}
        <ProjectItem
          image="/test.png"
          id={"1"}
          desc="quidem accusamus ipsa iure ipsum modi ipsam nesciunt maiores ex? Tenetur, dignissimos. Laudantium architecto numquam eum deserunt incidunt esse aliquam amet, fugiat officia."
        />{" "}
        <ProjectItem image="/test.png" id={"1"} desc="none" />
      </div>
    </section>
  );
};

export default Projects;
