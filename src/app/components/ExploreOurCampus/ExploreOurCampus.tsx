import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";

const ExploreOurCampus = () => {
  const getVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="flex relative  max-w-7xl mx-auto flex-col items-center justify-center pb-10 bg-white lg:pb-40 xl:pb-40 2xl:h-screen">
      <div className="absolute  left-[-5%] bottom-[5rem] w-36 h-36 bg-[#AF84CC]  rounded-bl-full rounded-tl-full rounded-br-full z-10"></div>
      <div className="absolute xl:top-[2.5rem] xl:right-[-15%] lg:top-[2rem] lg:right-[-10%] xl:w-96 xl:h-48 lg:w-64 lg:h-32 bg-[#2B9FF7] rotate-45 rounded-t-full opacity-100 z-50"></div>
      <div className="absolute bottom-[7%] opacity-100 z-50 right-[22%]">
        <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M85.4823 170.873C97.2746 129.646 129.5 97.421 170.727 85.6288C129.5 73.8365 97.2746 41.6115 85.4824 0.384514C73.693 41.6115 41.4651 73.8365 0.23809 85.6288C41.465 97.421 73.6901 129.649 85.4823 170.873Z"
            fill="#FB9D2B"
          />
        </svg>
      </div>
      <h1 className="text-black lg:text-[2rem] xl:text-[2.5rem]  font-bold pb-14 relative">
        Explore Our<span className="text-[#31CB6E]"> Campus</span>
      </h1>
      <div className="w-full xl:px-0 px-8 rounded-2xl overflow-hidden relative ">
        {/* Decorative div positioned absolutely with a high z-index */}
        {/* YouTube video */}

        <YouTubeEmbed videoid={getVideoId("https://youtu.be/Qw44JxtcC8g?si=Gk7NDdIXx98XAfcs") as string} />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="bg-none px-4 py-2 rounded-full text-sm text-white font-medium border-white border-2 transition-colors">
            Take a vitural tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurCampus;
