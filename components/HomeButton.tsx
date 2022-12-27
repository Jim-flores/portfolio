import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
type Props = {};
const MotionLink = motion(Link);
const HomeButton = (props: Props) => {
  return (
    <MotionLink
      whileHover={{ scale: 1.2 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      href="#hero"
      className="fixed bottom-10 items-center  bg-none rounded-full flex text-center text-[#F7AB0A]/60  hover:text-[#F7AB0A]w-16 xl:right-40 xl:visible md:visible md:right-10 sm:invisible"
    >
      <FaArrowUp className="w-10 h-10" />
    </MotionLink>
  );
};

export default HomeButton;
