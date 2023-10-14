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
    className="relative  rounded-lg group cursor-pointer shadow-lg   duration-300 flex justify-start items-start gap-5 p-3 hover:bg-light-navy"
  >
    <Image
      src={image}
      alt=""
      className="w-1/4 max-w-[120px] rounded-lg object-cover"
      height={200}
      width={200}
    />
    <div className="text-blue text-sm">
      <h2 className="text-light-blue font-bold text-lg">Lorem, ipsum dolor.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        consequatur laborum accusamus ratione accusantium itaque hic optio,
        voluptates sapiente, illo assumenda aliquam earum, necessitatibus non a
        voluptatibus eveniet ea dignissimos ullam quod nam esse aspernatur?
      </p>
    </div>
  </Link>
);

const Projects = (props: Props) => {
  return (
    <section id="projects" className="flex flex-col gap-5">
      <h1 className="text-2xl  text-light-blue font-semibold text-start h-fit border-b-2  border-orange w-fit ">
        Projects
      </h1>
      <div className="w-full space-y-5">
        <ProjectItem
          image="/test.png"
          id={"1"}
          desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus quam odit voluptate quisquam fugiat harum iusto provident, dolore eaque!"
        />
        <ProjectItem
          image="/test.png"
          id={"1"}
          desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus quam odit voluptate quisquam fugiat harum iusto provident, dolore eaque!"
        />
        <ProjectItem
          image="/test.png"
          id={"1"}
          desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus quam odit voluptate quisquam fugiat harum iusto provident, dolore eaque!"
        />
      </div>
    </section>
  );
};

export default Projects;
