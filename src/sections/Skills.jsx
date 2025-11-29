import React, { useEffect, useRef, useState } from "react";
import { FaHtml5 } from "react-icons/fa";
import { motion, useMotionValue } from "framer-motion";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNode />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiMysql />, name: "MYSQL" },
    { icon: <AiOutlineDotNet />, name: ".NET" },
  ];

  const repeated = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0); // Framer Motion value for x position

  // Intersection Observer to detect if section is in viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio >= 0.1);
      },
      { threshold: [0.1] }
    );

    io.observe(section);
    return () => io.disconnect();
    // const track = trackRef.current;
  });

  // Handle scroll and touch events to set direction
  useEffect(() => {
    if (!active) return;
    const wheel = (e) => setDir(e.deltaY > 0 ? -1 : 1);

    const touchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };
    const touchMove = (e) => {
      const deltaY = e.touches[0].clientY - touchY.current;
      setDir(deltaY > 0 ? -1 : 1);
    };

    window.addEventListener("wheel", wheel, { passive: true });
    trackRef.current.addEventListener("touchstart", touchStart, {
      passive: true,
    });
    trackRef.current.addEventListener("touchmove", touchMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", wheel);
      trackRef.current.removeEventListener("touchstart", touchStart);
      trackRef.current.removeEventListener("touchmove", touchMove);
    };
  }, [active]);

  useEffect(() => {
    let id;
    let last = performance.now();

    const speed = 40; // pixels per second
    const tick = (now) => {
      const dt = (now -last) / 1000;
      last = now;
      let next = x.get() + speed * dir * dt;
      const loop = trackRef.current?.scrollWidth / 2 || 0;

      if (loop) {
        if (next < -loop) next += loop;
        if (next > 0) next -= loop;
      }
      x.set(next); // Update the motion value
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(id);
  }, [dir, x]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full border-t-2 border-[#00bf8f] h-1/2 pb-8 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delat: 0.1 }}
        className="text-4xl mt-8 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00bf8f] via-[#1cd8d2] to-[#00bf8f] z-10"
      >
        My Skills
      </motion.h2>

      <motion.p
        className="mt-3 mb-8 text-white/90 font-medium text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Modern Applications | Modern Technologies
      </motion.p>

      <div className="relative w-full overflow-hidden ">
        <motion.div
          className="flex p-5 gap-10 text-6xl text-[#1cd8d2]"
          style={{x, whiteSpace: "nowrap", willChange: "transform"}}
          ref={trackRef}
        >
          {repeated.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[120px]"
              aria-label={skill.name}
              title={skill.name}
            >
              <span className="hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <p className="text-sm">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
