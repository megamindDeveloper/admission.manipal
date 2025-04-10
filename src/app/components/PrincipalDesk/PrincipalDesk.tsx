"use client";

import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";
import { motion } from "framer-motion";

const PrincipalDesk = () => {
  const videoUrl = "https://www.youtube.com/watch?v=Lv8BD8xefJs";
  // const [isPlaying, setIsPlaying] = useState(false);

  const getVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // const handlePlayPause = () => {
  //   setIsPlaying(!isPlaying);
  //   // Get the iframe element and send postMessage to control the video
  //   const iframe = document.querySelector('iframe');
  //   if (iframe && iframe.contentWindow) {
  //     iframe.contentWindow.postMessage(
  //       JSON.stringify({
  //         event: 'command',
  //         func: isPlaying ? 'pauseVideo' : 'playVideo'
  //       }),
  //       '*'
  //     );
  //   }
  // };

  return (
    <div className="max-w-7xl xl:mx-auto mx-8 lg:py-16 md:pt-24 pt-12 relative">
      {/* Decorative Elements with Animations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute md:top-[9rem] top-23 right-[-5%] lg:top-[5.5rem] lg:right-[-5%] w-20 h-20 lg:w-36 lg:h-36 bg-[#2B9FF7] rounded-tr-full rounded-tl-full rounded-br-full z-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute left-[-15%] bottom-[0rem] xl:w-80 xl:h-40 lg:w-64 lg:h-32 bg-[#31CB6E] r rounded-b-full opacity-100 z-50"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="hidden lg:flex  absolute top-[8%] opacity-100 z-50 left-[-3%]"
      >
        <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M85.4823 170.873C97.2746 129.646 129.5 97.421 170.727 85.6288C129.5 73.8365 97.2746 41.6115 85.4824 0.384514C73.693 41.6115 41.4651 73.8365 0.23809 85.6288C41.465 97.421 73.6901 129.649 85.4823 170.873Z"
            fill="#FB9D2B"
          />
        </svg>
      </motion.div>
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
        className="absolute md:top-[25%] top-[80%] lg:hidden md:flex hidden opacity-100 z-50 left-[-2%]"
      >
        <path
          d="M54.3037 0.0644531C46.7948 25.5978 26.2752 45.556 0.0234375 52.8594C26.2752 60.1627 46.7948 80.1209 54.3037 105.654C61.8107 80.1209 82.3322 60.1627 108.584 52.8594C82.3322 45.556 61.8125 25.5961 54.3037 0.0644531Z"
          fill="#FB9D2B"
        />
      </motion.svg>
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        width="95"
        height="95"
        viewBox="0 0 165 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute md:top-[25%] top-[80%] lg:hidden flex opacity-100 z-50 left-[-2%]"
      >
        <path
          d="M54.3037 0.0644531C46.7948 25.5978 26.2752 45.556 0.0234375 52.8594C26.2752 60.1627 46.7948 80.1209 54.3037 105.654C61.8107 80.1209 82.3322 60.1627 108.584 52.8594C82.3322 45.556 61.8125 25.5961 54.3037 0.0644531Z"
          fill="#FB9D2B"
        />
      </motion.svg>
      {/* Content */}
      <div className="relative">
        <div className="px-auto mx-auto">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="xl:text-[2.5rem] lg:text-[2rem] text-[1.5rem] md:text-[2.5rem] text-black font-bold mb-12 text-center"
          >
            From the <span className="text-[#31CB6E]">Principal&apos;s Desk</span>
          </motion.h1>
        </div>
        {/* Animated Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden bg-black aspect-video w-full max-w-full mx-auto"
        >
          <YouTubeEmbed videoid={getVideoId("https://youtu.be/-tOpBkKAxIM?si=H6-bErsKJBnYl1CT") as string} />
          {/* Custom Overlay */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={() => window.open(videoUrl, "_blank")}
              className="bg-none px-4 py-2 rounded-full md:flex hidden text-sm text-white font-medium border-white border-2 transition-colors hover:bg-white/20"
            >
              Watch the Full Video
            </button>
            {/* <button 
              onClick={handlePlayPause}
              className="bg-white/90 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
            >
              {isPlaying ? (
                // Pause icon
                <svg width="40" height="40" viewBox="0 0 40 40" className="w-10 h-10">
                  <circle
                    cx="20"
                    cy="20"
                    r="19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <g transform="translate(14, 13)">
                    <rect x="0" y="0" width="4" height="14" rx="1" fill="currentColor" />
                    <rect x="8" y="0" width="4" height="14" rx="1" fill="currentColor" />
                  </g>
                </svg>
              ) : (
                // Play icon
                <svg width="40" height="40" viewBox="0 0 40 40" className="w-10 h-10">
                  <circle
                    cx="20"
                    cy="20"
                    r="19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <path
                    d="M16 13L28 20L16 27V13Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </button> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrincipalDesk;
