import { motion } from "framer-motion";
import React from "react";
import { DiMysql } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiTypescript } from "react-icons/si";
const data = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "MySql",
  "PostgreSql",
  "React",
  "Node",
  "BootStrap",
];
function Skill() {
  return (
    <div className="grid-cols-3 grid xl:gap-20 md:gap-20 sm:gap-8">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="icon-skill"
      >
        <FaHtml5 className="icon text-[#e96228]" />
        <h2 className="">{data[0]}</h2>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="icon-skill"
      >
        <FaCss3 className="icon text-[#006cb4]" />
        <h2 className="">{data[1]}</h2>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="icon-skill"
      >
        <SiJavascript className="icon text-[#f7d901]" />
        <h2 className="">{data[2]}</h2>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="icon-skill"
      >
        <SiTypescript className="icon text-[#0076c7]" />
        <h2 className="">{data[3]}</h2>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="icon-skill"
      >
        <DiMysql className="icon text-[#005e86]" />
        <h2 className="">{data[4]}</h2>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="icon-skill"
      >
        <SiPostgresql className="icon text-[#31648c]" />
        <h2 className="">{data[5]}</h2>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="icon-skill"
      >
        <FaReact className="icon text-[#00d5f7]" />
        <h2 className="">{data[6]}</h2>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="icon-skill"
      >
        <FaNodeJs className="icon text-[#86be00]" />
        <h2 className="">{data[7]}</h2>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="icon-skill"
      >
        <FaBootstrap className="icon text-[#7710f1]" />
        <h2 className="">{data[8]}</h2>
      </motion.div>
    </div>
  );
}

export default Skill;
