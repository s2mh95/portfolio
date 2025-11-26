"use client"
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate, useInView } from "framer-motion";

const CircularProgressBar = ({ progress }:any) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  const progressValue = useMotionValue(0);
  const spring = useSpring(progressValue, {
    damping: 25,
    stiffness: 90,
  });

  const strokeDashoffset = useTransform(
    spring,
    (value) => circumference - (value / 100) * circumference
  );

  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Reset to 0 first, then animate to target
      progressValue.set(0);
      setDisplayProgress(0);
      
      // Small delay to ensure reset is visible
      const timeout = setTimeout(() => {
        const controls = animate(progressValue, progress, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate: (latest) => {
            setDisplayProgress(Math.round(latest));
          }
        });
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      // Reset when out of view
      progressValue.set(0);
      setDisplayProgress(0);
    }
  }, [isInView, progress, progressValue]);

  return (
    <svg ref={ref} className="w-40 h-40" viewBox="-10 -10 100 100">
      <circle
        className="  "
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="20"
        fill="none"
      />
      <motion.circle
        className=" stroke-current text-[#00ADB5]"
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="15"
        strokeDasharray={circumference}
        fill="none"
        strokeLinecap="round"
        style={{
          strokeDashoffset: strokeDashoffset,
        }}
      />
      <text
        x="51%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fill="white"
        className="text-sm font-semibold"
      >
        {displayProgress}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;

