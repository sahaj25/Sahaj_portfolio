import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const OverlayMenu = ({ isOpen, onClose }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "top right" : "top center";

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: `circle(0% at ${origin})` }}
            animate={{ clipPath: `circle(150% at ${origin})` }}
            exit={{ clipPath: `circle(0% at ${origin})` }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 flex item-center justify-center z-50 bg-black bg-opacity-90"
            onClick={onClose}
          >
            <button
              onClick={onClose}
              className="absolute cursor-pointer hover:scale-110 top-6 right-6 text-white text-3xl"
            >
              <IoClose />
            </button>

            <ul className="space-y-6 text-center flex flex-col items-center justify-center">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index *0.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={onClose}
                    className="text-4xl text-white font-semibold hover:text-pink-400 transition-colors duration-300 "
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OverlayMenu;
