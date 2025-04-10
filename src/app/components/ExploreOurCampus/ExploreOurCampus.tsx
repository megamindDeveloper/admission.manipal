"use client";

import React, { useRef } from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import { motion } from "framer-motion";

const ExploreOurCampus = () => {
  const getVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Reference for scroll detection
  const sectionRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="flex  my-32 relative max-w-7xl mx-auto flex-col items-center justify-center pb-10 bg-white lg:pb-40 xl:pb-40 2xl:h-screen"
    >
      {/* Purple Circle - Scales and Fades In */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute lg:left-[-5%] lg:bottom-[5rem] lg:w-36 lg:h-36 left-[0%] bottom-0 md:w-20 md:h-20 h-16 w-16 bg-[#AF84CC] rounded-bl-full rounded-tl-full rounded-br-full z-10"
      ></motion.div>

      {/* Blue Rotated Rectangle - Fades In */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute xl:top-[2.5rem] xl:right-[-15%] lg:top-[2rem] lg:right-[-10%] xl:w-96 xl:h-48 lg:w-64 lg:h-32 bg-[#2B9FF7] rotate-45 rounded-t-full opacity-100 z-50"
      ></motion.div>

      {/* Yellow SVG - Scales and Fades In */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        width="171"
        height="171"
        viewBox="0 0 171 171"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[7%] hidden lg:flex opacity-100 z-50 right-[22%]"
      >
        <path
          d="M85.4823 170.873C97.2746 129.646 129.5 97.421 170.727 85.6288C129.5 73.8365 97.2746 41.6115 85.4824 0.384514C73.693 41.6115 41.4651 73.8365 0.23809 85.6288C41.465 97.421 73.6901 129.649 85.4823 170.873Z"
          fill="#FB9D2B"
        />
      </motion.svg>
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        width="105"
        height="105"
        viewBox="0 0 105 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[12%] lg:hidden flex opacity-100 z-50 md:right-[22%] right-0"
      >
        <path
          d="M54.3037 0.0644531C46.7948 25.5978 26.2752 45.556 0.0234375 52.8594C26.2752 60.1627 46.7948 80.1209 54.3037 105.654C61.8107 80.1209 82.3322 60.1627 108.584 52.8594C82.3322 45.556 61.8125 25.5961 54.3037 0.0644531Z"
          fill="#FB9D2B"
        />
      </motion.svg>

      {/* Heading - Slides In from Top */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-black lg:text-[2rem] text-[1.5rem] xl:text-[2.5rem] md:text-[2.5rem] font-bold pb-14 relative"
      >
        Explore Our<span className="text-[#31CB6E]"> Campus</span>
      </motion.h1>

      {/* Video and Button Container - Slides In from Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full xl:px-0 px-8 rounded-2xl overflow-hidden relative"
      >
        <YouTubeEmbed videoid={getVideoId("https://youtu.be/RybrVD4uNUM?si=5RjWcVzIxWAe20zD") as string} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute bottom-4 right-4 flex gap-2"
        >
          <button className="bg-none px-4 py-2 rounded-full text-sm text-white font-medium border-white border-2 transition-colors">
            Take a virtual tour
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExploreOurCampus;
