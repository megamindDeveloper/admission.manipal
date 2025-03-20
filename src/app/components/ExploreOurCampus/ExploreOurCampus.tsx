import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";

const ExploreOurCampus = () => {
  const getVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  return (
    <div className="flex max-w-7xl  mx-auto flex-col items-center justify-centerpb-10 bg-white lg:pb-40  xl:pb-40 2xl:h-screen">
        <h1 className="text-black text-[2.5rem] font-bold pb-14">Explore Our<span className="text-[#31CB6E]"> Campus</span></h1>
      <div className="w-full h-[324px] md:h-[600px]  lg:h-[657px]  xl:h-[775px] 2xl:h-screen rounded-2xl overflow-hidden">
        <YouTubeEmbed videoid={getVideoId("https://youtu.be/Qw44JxtcC8g?si=Gk7NDdIXx98XAfcs") as string} />
      </div>
    </div>
  );
};

export default ExploreOurCampus;
