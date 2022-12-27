import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

type Props = {};

export default function About({}: Props) {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Curriculum_Vitae.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Curriculum_Vitae.pdf";
        alink.click();
      });
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src=""
        alt=""
        className="-mb-20 md:mb-0 sm:mt-20 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-[350px] xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10 sm:mt-6">
        <h4 className="text-4xl font-semibold">
          Here is a {""}
          <span className="underline decoration-[#F7AB07]">little</span>
          {""} background
        </h4>
        <div>
          <p className="mb-10 text-lg">
            I am a Full-Stack Developer from Puno, Perú. As a beginner I like to
            test my coding knowledge copying some functionalities of
            applications that we use daily. As you know there is no single way
            to solve problems, that&rsquo;s why I like to learn from other
            people, especially my coworkers.
          </p>
          <motion.button
            onClick={onButtonClick}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex p-1 items-center text-sm text"
            whileTap={{ scale: 0.9 }}
          >
            <FiDownload className="mr-1" /> Download CV
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
