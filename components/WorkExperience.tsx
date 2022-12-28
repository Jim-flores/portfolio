import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};
const jobs = [
  {
    id: 0,
    name: "Coopac crediconfia",
    position: "Front-End Dev.",
    time: "jun. 2021 - ago. 2021",
    description: "Business Sector: Financial company",

    image: "/img/coopac.jpg",
    sumary:
      "I designed the interface of the company's web application using vue.js, bootstrap, and figma.",
  },
  {
    id: 1,
    name: "DREP PUNO",
    position: "Software Analyst",
    time: "nov. 2021 - feb. 2022",
    description: "Business Sector: Education",

    image: "/img/drep.jpg",
    sumary:
      "I made documentation and reporting of functional issues for state records software.",
  },
];
function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row sm:flex-row max-w-full px-10 justify-evenly mx-auto text-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className=" h-[650px] xl:mt-32 md:mt-32 sm:mt-28 flex items-center space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mb-5 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {jobs.map((job) => (
          <ExperienceCard
            key={job.id}
            name={job.name}
            position={job.position}
            time={job.time}
            description={job.description}
            sumary={job.sumary}
            image={job.image}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
