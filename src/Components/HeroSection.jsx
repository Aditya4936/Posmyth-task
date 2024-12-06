import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const text = "Aditya Patel"; 

  const splitText = text.split("");

  const letterVariants = {
    initial: { opacity: 0, x: 50 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: index * 0.1, 
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden">
      <div
        className={`absolute inset-0  p-8 flex justify-center items-center bg-gradient-to-br from-secondary to-primary`}
      >
        <motion.h1 className="text-white md:mt-0 mt-10 text-center font-mono text-2xl sm:text-3xl md:text-4xl mr-20 ">
          {splitText.map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={letterVariants}
              initial="initial"
              animate="animate"
              custom={index}
            >
              {char === " " ? "\u00A0" : char} 
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default HeroSection;
