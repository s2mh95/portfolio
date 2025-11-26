"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [NavPic, setNavPic] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavPic(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center"});
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <motion.div 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between font-bold text-2xl text-[#00ADB5] bg-black"
    >
      <div className="lg:w-1/2">
        <AnimatePresence mode="wait">
          {NavPic ? (
            <motion.h1 
              key="withPic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#00ADB5] mx-4 my-2 lg:mx-10 lg:my-5 text-3xl lg:text-4xl flex items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection("banner")}
              >
                <Image
                    className="rounded-full border-2 border-[#00ADB5] h-10 w-10 mr-3 lg:mr-5"
                    src="/me.png"
                    alt="mypic"
                    width={30}
                    height={10}
                />
              </motion.button>
              s2mh
            </motion.h1>
          ) : (
            <motion.h1 
              key="withoutPic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#00ADB5] mx-4 my-2 lg:mx-10 lg:my-5 text-3xl lg:text-4xl"
            >
              s2mh
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
      <div className={`lg:hidden ${!showMenu ? "block" : "hidden"}`}>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2" 
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00ADB5]" fill="none" viewBox="0 0 20 20" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </motion.button>
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="lg:w-1/2 flex justify-end lg:flex"
          >
            <ul className="flex flex-col lg:flex lg:flex-row lg:justify-between items-end lg:w-1/2 mx-4 my-2 lg:mx-5 lg:my-5">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:bg-gray-600 p-1 rounded-2xl w-1/3 text-center duration-500 ease-in-out lg:hidden" 
                onClick={toggleMenu}
              >
                X
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="hover:bg-gray-600 p-1 rounded-2xl text-center duration-500 ease-in-out" 
                onClick={() => scrollToSection("about")}
              >
                About Me
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="hover:bg-gray-600 p-1 rounded-2xl text-center duration-500 ease-in-out" 
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="hover:bg-gray-600 p-1 rounded-2xl text-center duration-500 ease-in-out" 
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="hover:bg-gray-600 p-1 rounded-2xl text-center duration-500 ease-in-out" 
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      {!showMenu && (
        <div className="hidden lg:flex lg:w-1/2 lg:justify-end">
          <ul className="flex flex-row justify-between items-end w-1/2 mx-5 my-5">
            <motion.button 
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-gray-600 p-1 rounded-2xl text-center duration-500 ease-in-out" 
              onClick={() => scrollToSection("about")}
            >
              About Me
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-gray-600 p-1 rounded-2xl text-center duration-500 ease-in-out" 
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-gray-600 p-1 rounded-2xl text-center duration-500 ease-in-out" 
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="hover:bg-gray-600 p-1 rounded-2xl text-center duration-500 ease-in-out" 
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </motion.button>
          </ul>
        </div>
      )}
    </motion.div>
  );
}
