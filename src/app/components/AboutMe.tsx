/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface AboutData {
    title: string;
    description: string;
}

export default function AboutMe() {
  const [aboutData, setAboutData] = useState<AboutData>({
    title: "About Me",
    description: "Electrical Engineer | Fullstack Developer | Frontend Specialist\n\nAs an electrical engineer with a deep-seated passion for coding and technology, I have effectively merged my engineering expertise with advanced software development skills. My strong foundation in electrical engineering has seamlessly transitioned into the realm of programming, where I specialize in Python and React development and Fullstack technologies. Over the past few years, I have honed my abilities in these areas, leveraging my technical background to build robust and efficient solutions."
  });

  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0, 1, 1, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0, 1, 1, 0]);

  useEffect(() => {
    fetch("/api/portfolio")
        .then(res => res.json())
        .then(data => setAboutData(data.about))
        .catch(err => console.error("Error fetching about data:", err));
  }, []);

  return (
    <>
      <div 
        ref={aboutRef}
        id="about" 
        className="flex flex-col lg:flex-row lg:p-32 my-10 lg:my-20 text-white"
      >
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 p-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-10"
          >
            {aboutData.title.split(' ').map((word, index) => (
                index === aboutData.title.split(' ').length - 1 ? (
                    <span key={index}><strong className="text-[#00ADB5]">{word}</strong></span>
                ) : (
                    <span key={index}>{word} </span>
                )
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg lg:text-2xl w-full lg:w-5/6 m-auto lg:font-semibold whitespace-pre-line"
          >
            {aboutData.description}
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative w-full lg:w-1/2 bg-[url('../../public/pic2.png')] bg-cover bg-center min-h-[550px]"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image className="m-auto" src="/man.png" alt="" width={500} height={100}/>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
