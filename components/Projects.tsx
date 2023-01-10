import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <ProjectCard key={i} projects={projects} i={i} />
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bottom-[30%] bg-[#F7AB0A]/10 h-auto left-0 -skew-y-12 "></div>
    </div>
  );
}

export default Projects;
