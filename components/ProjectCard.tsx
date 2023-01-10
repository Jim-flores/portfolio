import { motion } from "framer-motion";
import React from "react";

type Props = {
  i: any;
  projects: any;
};

const ProjectCard = ({ i, projects }: Props) => {
  const ii = i;
  const projectss = projects;
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        src="https://universidadalnus.com/wp-content/uploads/2020/01/Universidad-alnus-Importancia-del-Project-Management-SUBTITULO-1-300x300.png"
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      />
      <div>
        <h4>
          Case study {1 + ii} of {projectss.length}
        </h4>
      </div>
    </div>
  );
};

export default ProjectCard;
