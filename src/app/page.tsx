"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Skills from "./components/skills";
import AboutMe from "./components/AboutMe";
import Banner from "./components/banner";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Dashboard from "./components/dashboard";
import Navbar from "./components/Navbar";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [passwordMode, setPasswordMode] = useState(false);
  const [password, setPassword] = useState("");
  const SECRET = "19957324Mm@";

  useEffect(() => {
    let pressedO = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      // CTRL + O
      if (e.ctrlKey && e.key.toLowerCase() === "o") {
        pressedO = true;
        setTimeout(() => (pressedO = false), 600);
      }

      // CTRL + O + D ➝ enter dashboard (password)
      if (e.ctrlKey && e.key.toLowerCase() === "d") {
        if (pressedO) setPasswordMode(true);
      }

      // CTRL + P ➝ exit dashboard
      if (e.ctrlKey && e.key.toLowerCase() === "p") {
        setShowDashboard(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmitPassword = () => {
    if (password === SECRET) {
      setPassword("")
      setPasswordMode(false);
      setShowDashboard(true);
    } else {
      alert("Wrong password");
    }
  };

  return (
    <>
      {/* PASSWORD POPUP */}
      {passwordMode && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg">
          <div className="bg-transparent p-6 rounded-xl w-80 shadow-lg text-white border-white border-4">
            <h2 className="text-xl mb-3 font-semibold">Enter Password</h2>
            <input
              type="password"
              className="border w-full px-3 py-2 rounded mb-4 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSubmitPassword}
              className="bg-[#00ADB5] text-white w-full py-2 rounded"
            >
              Enter
            </button>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {showDashboard ? (
          // DASHBOARD MODE (fade only)
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Dashboard />
          </motion.div>
        ) : (
          // PORTFOLIO MODE (fade only)
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <Banner />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}