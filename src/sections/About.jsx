import React from "react";
import about from "../assets/about.png";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Experience", value: "3+ Years" },
    { label: "Completed Projects", value: "10+" },
    { label: "Speciality", value: "MERN Stack" },
    { label: "Additional Skills", value: "UI Designing" },
  ];

  const glow = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "-bottom-10 -right-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden  "
    >
      <div className="absolute inset-0 pointer-events-none">
        {glow.map((c, i) => (
          <div
            key={i}
            className={`absolute ${c} bg-gradient-to-r from-[#3023ae] via-[#00bf8f] to-[#1cd8d2] animate-pulse rounded-full`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-center gap-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Image with subtle floating animation */}
          <motion.div
            animate={{
              x: [0, 3, -3, 2, -2, 0],
              y: [0, -3, 2, -2, 3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-90 h-full  "
          >
            <img
              src={about}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <div className="flex flex-col text-center md:text-left max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
              About Me
            </h2>

            <p className="mt-3 text-gray-300 text-md">
              MERN Stack Developer • UI/UX Designer
            </p>
            <p className="mt-5 text-gray-200 leading-relaxed text-lg sm:text-lg max-w-2xl md:max-w-3xl">
              I am a passionate MERN Stack Developer and UI/UX Designer with
              over 3 years of experience in crafting dynamic and responsive web
              applications. My expertise lies in building robust front-end and back-end
              systems using{" "}
              <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
                React.js
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
                Node.js
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
                MongoDB
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] bg-clip-text text-transparent">
                Express.js
              </span>
              , while also creating visually appealing and user-friendly
              interfaces using <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600">Figma</span>.
            </p>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3  text-center "
                >
                  <div className="text-sm text-grey-400"> {item.label}</div>
                  <div className="text-base font-semibold"> {item.value}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-block item-center justify-center rounded-xl bg-white text-black font-semibold px-7 py-3 hover:bg-grey-300 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-block item-center justify-center rounded-lg border border-white/20 text-white bg-white/10 px-7 py-3 hover:bg-white/20 transition "
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
