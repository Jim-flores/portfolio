import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <SocialIcon
            url="https://youtube.com"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <SocialIcon
            url="https://www.linkedin.com/in/jim-flores-teves-328a1323a/"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <SocialIcon
            url="https://github.com/Jim-flores/"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          x: +500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="/#contact"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
