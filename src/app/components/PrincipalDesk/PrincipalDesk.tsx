import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";

const PrincipalDesk = () => {
  const getVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  return (
    <div className="max-w-7xl xl:mx-auto lg:mx-8 py-16 relative">
      {/* Decorative Elements */}
      {/* <div className="absolute top-0 left-0 w-24 h-24 text-[#FB9D2B]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="currentColor" />
        </svg>
      </div> */}

      {/* Content */}
      <div className="relative">
        <div className="px-auto mx-auto">
      <div className="absolute top-[2.5rem] right-[-5%]  w-36 h-36 bg-[#2B9FF7]  rounded-tr-full rounded-tl-full rounded-br-full z-10"></div>
      <div className="absolute  left-[-15%] bottom-[-5rem] xl:w-80 xl:h-40 lg:w-64 lg:h-32 bg-[#31CB6E] rotate-45 rounded-b-full opacity-100 z-50"></div>
      <div className="absolute top-[4%] opacity-100 z-50 left-[-3%]">
        <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M85.4823 170.873C97.2746 129.646 129.5 97.421 170.727 85.6288C129.5 73.8365 97.2746 41.6115 85.4824 0.384514C73.693 41.6115 41.4651 73.8365 0.23809 85.6288C41.465 97.421 73.6901 129.649 85.4823 170.873Z"
            fill="#FB9D2B"
          />
        </svg>
      </div>
          <h1 className="xl:text-[2.5rem] lg:text-[2rem] text-black font-bold mb-12 text-center">
          From the <span className="text-[#31CB6E]">Principal&apos;s Desk</span>
          </h1>
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-black aspect-video w-full max-w-full mx-auto">
          <YouTubeEmbed videoid={getVideoId("https://www.youtube.com/watch?v=Lv8BD8xefJs") as string} />
          {/* Custom Overlay */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button className="bg-none px-4 py-2 rounded-full text-sm text-white font-medium border-white border-2 transition-colors">
              Watch the Full Video
            </button>
            <button className="bg-white/90 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors group">
              <svg width="40" height="40" viewBox="0 0 40 40" className="w-10 h-10">
                {/* Outer circle */}
                <circle
                  cx="20"
                  cy="20"
                  r="19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-80 group-hover:opacity-100 transition-opacity"
                />
                {/* Pause icon */}
                <g transform="translate(14, 13)">
                  <rect x="0" y="0" width="4" height="14" rx="1" fill="currentColor" />
                  <rect x="8" y="0" width="4" height="14" rx="1" fill="currentColor" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDesk;
