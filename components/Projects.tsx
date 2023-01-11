import React from "react";
import ProjectCard from "./ProjectCard";
import { DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiBootstrap,
  SiTailwindcss,
  SiTypescript,
  SiVuetify,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

type Props = {};
const projec = [
  {
    id: 0,
    project_name: "Rick and Morty API",
    image: "/img/rick.jpg",
    link: "https://rick-and-morty-api-322.netlify.app/",
    git: "https://github.com/Jim-flores/rick_and_morty_api",
    description:
      "Page that consumes the rick and morty api and shows the data with the help of a search engine.",
    tools: [
      { icon: <DiReact />, name: "React" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
    ],
  },
  {
    id: 1,
    project_name: "Financial Management System",
    image: "/img/financial.jpg",
    link: "https://financial-system.netlify.app/",
    git: "https://github.com/Jim-flores/coop-vue-app",
    description: "Interface design of a financial system",
    tools: [
      { icon: <FaVuejs />, name: "Vuejs" },
      { icon: <SiVuetify />, name: "Vuetify" },
      { icon: <SiBootstrap />, name: "BootStrap" },
    ],
  },
];
function Projects({}: Props) {
  const total = projec.length;
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projec.map((projec, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <ProjectCard
              key={projec.id}
              name={projec.project_name}
              image={projec.image}
              link={projec.link}
              git={projec.git}
              description={projec.description}
              tools={projec.tools}
              total={total}
              i={i}
            />
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bottom-[30%] bg-[#F7AB0A]/10 h-auto left-0 -skew-y-12 "></div>
    </div>
  );
}

export default Projects;
