import React, { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);

  // Detect if user is on "home" section
  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen || forceVisible) {
        setVisible(true);
        return;
      }

      const currentY = window.scrollY;

      // Hide on scroll down
      if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false);
      } else {
        // Show on scroll up
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen, forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 
        transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="w-12 h-12" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Sahaj Juneja
          </div>
        </div>

        {/* Menu Button */}
        <div className="block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu size={30} className="text-white hover:text-gray-300 mt-3" />
          </button>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-400 to-green-700 text-white px-5 py-2 rounded-full font-medium shadow-lg 
            transform hover:scale-110 transition-all"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
