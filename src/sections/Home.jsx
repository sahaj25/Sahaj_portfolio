import React, { useEffect, useMemo, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import avatar from "../assets/avator.png";

const Home = () => {
  const roles = useMemo(
    () => [
      "Web Developer",
      "MERN Stack Developer",
      "Full Stack Developer",
      "UI/UX Designer",
      "Tech Enthusiast",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const current = roles[index];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && subIndex < current.length) {
          setSubIndex((prev) => prev + 1);
        } else if (!isDeleting && subIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else if (isDeleting && subIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? 50 : 70
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, current.length, index, roles]);

  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-between relative bg-black overflow-hidden"
    >
      <ParticlesBackground />

      {/* BLOBS */}
      <div className="absolute inset-0">
        <div
          className="
            absolute -top-32 -left-32
            w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-[500px] max-h-[500px] rounded-full
            bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            blur-2xl opacity-10 animate-pulse
          "
        ></div>

        <div
          className="
            absolute -bottom-32 -right-32
            w-[70vw] sm:w-[50vw] md:w-[40vw]
            h-[70vw] sm:h-[50vw] md:h-[40vw]
            max-w-[500px] max-h-[500px] rounded-full
            bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            blur-2xl opacity-10 animate-pulse
          "
        ></div>
      </div>

      {/* MAIN GRID */}
      <div
        className="
        relative z-10 h-full w-full max-w-7xl mx-auto px-4
        grid grid-cols-1 lg:grid-cols-2
        items-center justify-center
      "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col lg:ml-30  justify-center items-center lg:items-start h-full">
          {/* TYPING TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-3xl sm:text-3xl md:text-5xl lg:text-4xl font-semibold tracking-wide min-h-[1.6em] text-white"
          >
            <span>{current.slice(0, subIndex)}</span>
            <span className="cursor">|</span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl items-center lg:items-start sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent flex flex-col bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
          >
            <span className="text-3xl"> Hello, I'm </span>
            <span className="text-white font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
              Sahaj Juneja
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-center lg:text-start text-base md:text-lg text-gray-300 max-w-2xl"
          >
            Full-stack developer who builds real-world, scalable web products.
            Focused on performance, clean architecture, user experience, and
            solving problems that matter.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
            >
              View My Projects
            </a>

            <a
              href="/Resume.pdf"
              download
              className="px-8 py-3 rounded-full font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
            >
              My Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT AVATAR */}
        <div className="relative hidden lg:flex items-center justify-center h-full">
          <motion.img
            src={avatar}
            alt="Sahaj Juneja"
            className="object-contain select-none pointer-events-none"
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              width: "min(34vw, 500px)",
              height: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
