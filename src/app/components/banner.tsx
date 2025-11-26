"use client"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface BannerData {
    firstName: string;
    lastName: string;
    title: string;
}

export default function Banner(){
    const [bannerData, setBannerData] = useState<BannerData>({
        firstName: "Seyed Meysam",
        lastName: "Mir Hosseini",
        title: "Junior Fullstack Developer"
    });

    const bannerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: bannerRef,
        offset: ["start start", "end start"]
    });

    // Transform values that work both ways (scroll down and up)
    const bannerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const bannerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    useEffect(() => {
        fetch("/api/portfolio")
            .then(res => res.json())
            .then(data => setBannerData(data.banner))
            .catch(err => console.error("Error fetching banner data:", err));
    }, []);

    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center"});
        }
      };

    const formatName = (name: string) => {
        return name.split(' ').map((word, index) => (
            <span key={index}>
                <strong className="text-[#00ADB5]">{word[0]}</strong>{word.slice(1)}
                {index < name.split(' ').length - 1 && ' '}
            </span>
        ));
    };
    return(
        <>
            <div 
                ref={bannerRef}
                id="banner" 
                className="flex flex-col items-center justify-center text-white min-h-[800px] bg-[url('../../public/pic2.png')] mt-20 relative overflow-hidden"
            >
                {/* Centered Content - Image and Name Together */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    style={{ 
                        y: bannerY, 
                        opacity: bannerOpacity,
                        scale: scale
                    }}
                    className="flex flex-col items-center justify-center px-4"
                >
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="relative mb-8"
                    >
                        <Image 
                            className="border-2 border-[#00ADB5] rounded-full object-cover w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]" 
                            src="/me.png" 
                            alt="mypic" 
                            width={400} 
                            height={400}
                            priority
                        />
                    </motion.div>
                    
                    {/* Name */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="text-4xl lg:text-6xl text-center pb-5"
                    >
                        {formatName(bannerData.firstName)} {formatName(bannerData.lastName)}
                    </motion.h1>
                    
                    {/* Title */}
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="text-2xl lg:text-4xl text-center mb-8 lg:mb-10"
                    >
                        {bannerData.title}
                    </motion.h3>
                    
                    {/* Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                        className="flex flex-col lg:flex-row items-center"
                    >
                        <motion.button 
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#00ADB5] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full transition duration-500 ease-in-out hover:bg-gray-500" 
                            onClick={()=>scrollToSection("contact")}
                        >
                            Hire Me
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}