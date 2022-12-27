import React from "react";
import { motion } from "framer-motion";
import { DiJavascript, DiNodejs } from "react-icons/di";
import { IoLogoVue } from "react-icons/io5";

function ExperienceCard({
  name,
  position,
  time,
  description,
  image,
  sumary,
  logos,
}) {
  var logoss = logos;
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     x-[500px] md:x-[600px] xl:w-[500px] md:w-[500px] sm:w-[310px] sm:h-[520px] snap-center bg-[#292929] p-10 xl:hover:opacity-100 xl:opacity-40 md:hover:opacity-100 md:opacity-40 sm:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full object-cover object-center"
        src={image}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="uppercase xl:text-3xl md:text-3xl sm:text-xl font-light ">
          {name}
        </h4>
        <p className="font-bold xl:text-xl md:text-xl sm:text-lg mt-1">
          {position}
        </p>

        <p className="uppercase py-5 text-gray-300">{time}</p>
        <ul className="list-disc space-y-4 ml-5 xl:text-lg md:text-lg sm:text-base text-left">
          <li className="list-none">{description}</li>
          <li>{sumary}</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
