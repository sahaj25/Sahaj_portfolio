import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

const Footer = () => {
  return (
    <footer className="relative w-full py-20 bg-black overflow-hidden text-white flex flex-col items-center justify-center">

      {/* Particles */}
      <ParticlesBackground />

      {/* HORIZONTAL GLOW (MATCHES PROVIDED IMAGE) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Main Bright Glow */}
        <div
          className="
            absolute -bottom-40 left-1/2 -translate-x-1/2
            w-[130vw] md:w-[95vw] lg:w-[75vw]
            h-[40vw] md:h-[30vw] lg:h-[25vw]
            bg-gradient-to-r from-[#0f222b] via-[#00bf8f] to-[#1cd8d2]
            opacity-[0.20]
            blur-[120px]
            animate-slowPulse
            rounded-full
          "
        ></div>

        {/* Secondary Softer Glow */}
        <div
          className="
            absolute bottom-0 left-1/2 -translate-x-1/2
            w-[160vw] md:w-[130vw] lg:w-[105vw]
            h-[50vw] md:h-[38vw] lg:h-[30vw]
            bg-gradient-to-r from-[#0f222b] via-[#0b3444] to-[#102d3a]
            opacity-[0.15]
            blur-[160px]
            animate-slowerPulse
            rounded-full
          "
        ></div>

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* NAME */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-wide"
        >
          Sahaj Juneja
        </motion.h2>

        {/* GRADIENT UNDERLINE */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-[3px] mt-4 rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
        ></motion.div>

        {/* QUOTE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 text-gray-300 italic text-sm md:text-base"
        >
          “Success is when preparation meets opportunity.”
        </motion.p>

        {/* COPYRIGHT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-xs text-gray-500"
        >
          © {new Date().getFullYear()} Sahaj Juneja. All rights reserved.
        </motion.p>

      </div>
    </footer>
  );
};

export default Footer;
