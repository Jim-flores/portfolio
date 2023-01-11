import { motion } from "framer-motion";
import React from "react";
import { DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiBootstrap,
  SiTailwindcss,
  SiTypescript,
  SiVuetify,
} from "react-icons/si";
import { FaGithub, FaVuejs } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";

type Props = {
  i: any;
  name: any;
  total: any;
  image: any;
  link: any;
  git: any;
  description: any;
  tools: any;
};

const ProjectCard = ({
  i,
  name,
  total,
  image,
  link,
  git,
  description,
  tools,
}: Props) => {
  const ii = i;

  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen text-gray-300">
      <h1 className=" top-24 uppercase font-bold  text-lg ">{name}</h1>
      <div className="flex flex-col text-center bg-[#000000]/60  border border-[#F7AB0A] rounded-lg">
        <div className="flex">
          <div className="w-[500px] h-[400px] flex">
            <motion.img
              src={image}
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="h-full rounded-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex bg-black/75 w-[500px] h-[400px] items-center justify-center absolute rounded-lg space-x-10"
            >
              <a href={link}>
                <CgScreen className="h-8 w-8" />
                <p className="text-sm font-bold">Visit</p>
              </a>
              <a href={git}>
                <FaGithub className="h-8 w-8" />
                <p className="text-sm font-bold">Code</p>
              </a>
            </motion.div>
          </div>
          <div className="w-[300px] h-full text-left p-2">
            <div className="h-[30%]">
              <h1 className="font-bold mt-4">Description: </h1>
              <p className="text-sm mt-2">{description}</p>
            </div>
            <div className="h-[70%]">
              <h1 className="font-bold mt-4">Tools: </h1>
              <div className="p-1">
                {tools.map((tool: any, i: any) => (
                  <div key={i} className="m-2 flex items-center space-x-3">
                    {tool.icon}
                    <div>{tool.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4>
          {1 + ii} of {total}
        </h4>
      </div>
    </div>
  );
};

export default ProjectCard;
