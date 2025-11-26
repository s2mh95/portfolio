"use client"
import CircularProgressBar from "./CircularProgressBar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Skill {
    name: string;
    progress: number;
}

export default function Skills() {
    const [skills, setSkills] = useState<Skill[]>([
        { name: "PHP", progress: 80 },
        { name: "Python", progress: 90 },
        { name: "PyQt5", progress: 100 },
        { name: "Django", progress: 60 },
        { name: "Bootstrap", progress: 65 },
        { name: "React", progress: 70 },
        { name: "NextJs", progress: 55 },
        { name: "JavaScript", progress: 70 },
        { name: "Html & CSS", progress: 100 },
        { name: "Tailwind CSS", progress: 100 },
    ]);

    const skillsRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: skillsRef,
        offset: ["start end", "end start"]
    });

    const titleY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0, 1, 1, 0]);
    const skillsOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0, 1, 1, 0]);
    const skillsScale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.5, 0.5, 1, 1, 0.5]);

    useEffect(() => {
        fetch("/api/portfolio")
            .then(res => res.json())
            .then(data => setSkills(data.skills))
            .catch(err => console.error("Error fetching skills data:", err));
    }, []);

    return (
        <div 
            ref={skillsRef}
            id="skills" 
            className="flex flex-col items-center text-center py-10 my-20 text-white "
        >
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-bold text-5xl"
            >
                Skills
            </motion.h1>
            <motion.ul 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-2xl font-semibold items-center"
            >
                {skills.map((skill, index) => (
                    <motion.li 
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
                        className="lg:p-10"
                    >
                        <CircularProgressBar progress={skill.progress} />
                        <div className="p-5">{skill.name}</div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}
