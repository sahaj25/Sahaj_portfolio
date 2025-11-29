import React, { useEffect, useMemo, useRef, useState } from "react";
import Grocer from "../assets/Grocers.png";
import Easicall from "../assets/Easicall-(2).png";
import Motalk from "../assets/Motalk.png";
import Saftel from "../assets/Saftel.png";
import MCC from "../assets/MCC.png";
import MoConnect from "../assets/MoConnect.png";
import Jeera from "../assets/JeeraDashboard.png";
import Safin from "../assets/SafinTech.png";
import Wateen from "../assets/Wateen.png";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handler);
    setIsMobile(mediaQuery.matches);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};
const Projects = () => {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "Motalk",
        link: "https://www.motalk.co.za/",
        bgColor: "#f85a1c",
        image: isMobile ? Motalk : Motalk,
      },
      {
        title: "Saftelco",
        link: "https://saftelco.com/",
        bgColor: "#D6111E",
        image: isMobile ? Saftel : Saftel,
      },
      {
        title: "Modern Contracting Company",
        link: "https://modern-contracting.com/", //mcc
        bgColor: "#CF9F6E",
        image: isMobile ? MCC : MCC,
      },
      {
        title: "SafinPlus Technology",
        link: "https://www.safinplustechnology.com/",
        bgColor: "#0E9354",
        image: isMobile ? Safin : Safin,
      },
      {
        title: "MoConnect",
        link: "https://www.moconnect.co.za/",
        bgColor: "#186FE3",
        image: isMobile ? MoConnect : MoConnect,
      },
      {
        title: "Wateen",
        link: "",
        bgColor: "#3a3162",
        image: isMobile ? Wateen : Wateen,
      },
      {
        title: "Easicall",
        link: "https://easicall.co.za/",
        bgColor: "#379E4B",
        image: isMobile ? Easicall : Easicall,
      },
      {
        title: "Grocer",
        link: "",
        bgColor: "#ff9d00",
        image: isMobile ? Grocer : Grocer,
      },
      {
        title: "Jeera Dashboard",
        link: "https://dashboard.jeera.com.sa/",
        bgColor: "#781E5C",
        image: isMobile ? Jeera : Jeera,
      },
    ],
    [isMobile]
  ); // re-run when isMobile changes

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"], // map the start and end of the target to the start and end of the viewport
  });

  const threshholds = projects.map((_, i) => i / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = threshholds.findIndex((t) => latest <= t);
    setActiveIndex(idx === -1 ? threshholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <div
      id="projects"
      ref={sceneRef}
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 0.5s ease",
      }}
      className="relative text-white"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h3
          className={`text-3xl font-bold z-10  text-center ${
            isMobile ? "mt-4" : "mt-8"
          }`}
        >
          My Work
        </h3>

        <div
          className={`relative w-full flex-1 flex items-center justify-center ${
            isMobile ? "-mt-4" : ""
          }`}
        >
          {projects.map((project, index) => {
            return (
              <div
                key={project.title}
                className={`absolute top-1/2 mt-5 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  activeIndex === index
                    ? "opacity-100 z-20 "
                    : "opacity-0 z-0 sm:z-10"
                }`}
                style={{ width: "75%", maxWidth: "1200px" }}
              >
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.h3
                      key={project.title}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className={`block text-center text-[clamp(2rem,6vw,3.5rem)] text-white/95 sm:absolute sm:-top-18 sm:left-[35%] lg:left-[2%] sm:mb-0 italic font-semibold ${
                        isMobile ? "-mt-24" : ""
                      }`}
                      style={{
                        zIndex: 5,
                        textAlign: isMobile ? "center" : "left",
                      }}
                    >
                      {project.title}
                    </motion.h3>
                  )}
                </AnimatePresence>
                <div
                  className={`relative w-full overflow-hidden bg-black/20 shadow-2xl 
  md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]
  ${isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"}
  h-[62vh] sm:h-[60vh] flex items-center justify-center`}
                  style={{ zIndex: 10, transition: "box-shadow 250ms ease" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain drop-shadow-xl md:drop-shadow-2xl"
                    style={{
                      position: "relative",
                      zIndex: 10,
                      transition: "filter 200ms ease",
                    }}
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      zIndex: 11,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.12) 0% , rgba(0,0,0,0) 40% )",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`absolute ${isMobile ? "bottom-20" : "bottom-2"}`}>
          <a
            href={activeProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
