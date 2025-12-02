"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface Project {
    name: string;
    url: string;
    image: string;
}

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([
        { name: "eCommerce", url: "https://lucent-panda-03a078.netlify.app/", image: "/ecommerce.png" },
        { name: "Duolingo clone", url: "https://spectacular-heliotrope-31b851.netlify.app/", image: "/duolingo.png" },
        { name: "Transport Agent Management", url: "", image: "/FAICTP.png" },
        { name: "Blood Labratoary", url: "", image: "/limz.png" },
    ]);

    const projectsRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: projectsRef,
        offset: ["start end", "end start"]
    });

    const titleY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0, 1, 1, 0]);
    const sliderOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0, 1, 1, 0]);
    const sliderY = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [100, 50, 0, 0, -100]);

    useEffect(() => {
        fetch("/api/portfolio")
            .then(res => res.json())
            .then(data => setProjects(data.projects))
            .catch(err => console.error("Error fetching projects data:", err));
    }, []);
    const settings = {
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay:true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
                infinite: true,
              }
            }]
    }
    return (
        <div 
            ref={projectsRef}
            id='projects' 
            className="slider-container items-center text-center py-10 my-20 skills  mx-10 h-[600px] text-white"
        >
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='text-5xl font-bold'
            >
                Project
            </motion.h1>
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
        <Slider {...settings}>
            {projects.map((project, index) => {
                const projectContent = (
                    <motion.div 
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col font-bold text-4xl rounded-3xl m-10 pb-5 h-96 bg-gray-400 opacity-60 hover:opacity-80"
                    >
                        <Image className="m-auto" src={project.image} alt={project.name} width={300} height={100} />
                        {project.name}
                    </motion.div>
                );

                return project.url ? (
                    <Link key={index} href={project.url} className="flex justify-between items-center">
                        {projectContent}
                    </Link>
                ) : (
                    <div key={index} className="flex justify-between items-center m-auto">
                        {projectContent}
                    </div>
                );
            })}
        </Slider>
        </motion.div>
        </div>
  );
}
