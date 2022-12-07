import React from "react";
import { motion } from "framer-motion";
import { DiJavascript, DiReact, DiNodejs } from "react-icons/di";
function ExperienceCard() {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     x-[500px] md:x-[600px] xl:w-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={"/img/dev.jpg"}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO OF PAPAFAM</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <DiJavascript className="h-10 w-10" />
          <DiReact className="h-10 w-10" />
          <DiNodejs className="h-10 w-10" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work...- ended</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumary points</li>
          <li>Sumary points</li>
          <li>Sumary points</li>
          <li>Sumary points</li>
          <li>Sumary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
