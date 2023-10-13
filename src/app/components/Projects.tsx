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
    className="relative h-[250px] rounded-lg group cursor-pointer shadow-lg shadow-navy hover:scale-105 duration-300"
  >
    <Image
      src={image}
      alt=""
      className="h-full w-full rounded-lg"
      height={250}
      width={350}
    />
    <div className="bg-light-navy absolute top-0 left-0 h-full w-full flex justify-center items-center text-white p-5 text-xs text-center rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in duration-300">
      {desc}
    </div>
  </Link>
);

const Projects = (props: Props) => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto p-5 flex flex-wrap justify-center gap-10 h-full"
    >
      <div className="w-full flex justify-center">
        <h1 className="text-4xl flex text-blue font-bold mb-5 border-b-4 border-orange leading-[50px] w-fit text-center">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
