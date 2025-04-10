"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LearningIcon from "../../../../public/icons/learningIcon";
import GrowthIcon from "../../../../public/icons/growthIcon";
import Innovations from "../../../../public/icons/innovations";
import advantageImage1 from "../../../../public/images/advantage1.jpg";
import advantageImage2 from "../../../../public/images/advantage2.jpg";
import advantageImage3 from "../../../../public/images/advantage3.jpg";
import advantageImage4 from "../../../../public/images/advantage4.jpg";

const ManipalAdvantage = () => {
  // Reference for scroll detection
  const sectionRef = useRef(null);

  return (
    <div className="max-w-7xl xl:mx-auto mx-8 bg-white mb-32 lg:pt-44 md:pt-24 pt-16" ref={sectionRef}>
      {/* Heading - Slides Down and Fades In */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="xl:text-[2.5rem] md:text-[2.5rem] lg:text-[2rem] text-[1.5rem] text-black font-bold mb-8"
      >
        Step into the <span className="text-purple-600">Manipal Advantage</span>
      </motion.h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 relative lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative col-span-1 rounded-2xl overflow-hidden"
        >
          <Image
            src={advantageImage1}
            className="object-cover w-full h-[200px] rounded-2xl" // Adjust image height as needed
            alt="Students in classroom"
          />
          <div className="">
            <h2 className="font-bold pt-8 text-[1.5rem] leading-7 text-black mb-2">Well-Equipped Future Ready Digital Classrooms</h2>
            <p className="text-gray-600">Awarded the School Excellence Award for future-ready digital classrooms.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative col-span-1 pt-12 rounded-2xl overflow-hidden"
        >
          <Image
            src={advantageImage2}
            className="object-cover w-full h-[200px] rounded-2xl" // Adjust image height as needed
            alt="Students in classroom"
          />
          <div className="">
            <h2 className="font-bold pt-10 text-[1.5rem] leading-7 text-black mb-2">Where Curiosity Grows</h2>
            <p className="text-gray-600">with an expansive In-School & Digital Library.</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative col-span-1 pt-12 rounded-2xl overflow-hidden"
        >
          <Image
            src={advantageImage3}
            className="object-cover w-full h-[200px] rounded-2xl" // Adjust image height as needed
            alt="Students in classroom"
          />
          <div className="">
            <h2 className="font-bold pt-10 text-[1.5rem] leading-7 text-black mb-2">Smart Learning &  Innovation Hub</h2>
           
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative col-span-1 pt-12 rounded-2xl overflow-hidden"
        >
          <Image
            src={advantageImage4}
            className="object-cover w-full h-[200px] rounded-2xl" // Adjust image height as needed
            alt="Students in classroom"
          />
          <div className="">
            <h2 className="font-bold pt-10 text-[1.5rem] leading-7 text-black mb-2">Where Talents are Nutured</h2>
            <p className="text-gray-600">We believe that creative expressions are the window to the soul.</p>
          </div>
        </motion.div>
      </div>
      <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hidden ">
        {/* Digital Classrooms Card - Fades In and Slides Up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative col-span-2 rounded-2xl overflow-hidden h-[380px]"
        >
          <Image src={advantageImage1} className="absolute inset-0 object-cover h-[100%] w-[100%]" alt="Students in classroom" />
          <div className="absolute inset-0 p-8 flex flex-col justify-start">
            <h2 className="font-bold text-[2rem] leading-9 text-white mb-2 max-w-2/4">Well-Equipped Future Ready Digital Classrooms</h2>
            <p className="text-gray-200 max-w-1/3">Awarded the School Excellence Award for future-ready digital classrooms.</p>
          </div>
        </motion.div>

        {/* Learning Card - Scales and Fades In */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#FB9D2B] relative rounded-2xl p-8 flex items-center justify-center h-[380px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <LearningIcon />
          </div>
          <div className="relative z-10">
            <h2 className="text-[3.5rem] font-bold text-white">Learning</h2>
          </div>
        </motion.div>

        {/* Library Card - Fades In and Slides Up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden h-[380px]"
        >
          <Image src={advantageImage2} className="absolute inset-0 w-full h-full object-cover" alt="Library" />
          <div className="absolute inset-0 bg-gradient-to-t p-6 flex flex-col justify-start">
            <h2 className="text-[2rem] leading-none font-bold text-white mb-2 max-w-3/4">Where Curiosity Grows</h2>
            <p className="text-gray-200 max-w-[10vw]">with an expansive In-School & Digital Library</p>
          </div>
        </motion.div>

        {/* Growth Card - Scales and Fades In */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#31CB6E] relative rounded-2xl p-8 flex items-center justify-center h-[380px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <GrowthIcon />
          </div>
          <div className="relative z-10">
            <h2 className="text-[3.5rem] font-bold text-white">Growth</h2>
          </div>
        </motion.div>

        {/* Innovation Hub Card - Fades In and Slides Up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden h-[380px]"
        >
          <Image src={advantageImage3} className="absolute inset-0 w-full h-full object-cover" alt="Innovation Hub" />
          <div className="absolute inset-0 bg-gradient-to-t p-6 flex flex-col justify-start">
            <h2 className="text-2xl font-bold text-white text-[2rem]">Smart Learning & Innovation Hub</h2>
          </div>
        </motion.div>

        {/* Innovation Card - Scales and Fades In */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#2B9FF7] relative rounded-2xl p-8 flex items-center justify-center h-[380px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Innovations />
          </div>
          <div className="relative z-10">
            <h2 className="text-[3.5rem] font-bold text-white">Innovation</h2>
          </div>
        </motion.div>

        {/* Talents Card - Fades In and Slides Up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="relative col-span-1 rounded-2xl overflow-hidden h-[380px]"
        >
          <Image src={advantageImage4} className="absolute inset-0 w-full h-full object-cover" alt="Student performing" />
          <div className="absolute inset-0 bg-gradient-to-t p-8 flex flex-col justify-start">
            <h2 className="text-3xl font-bold text-white mb-2 text-[2rem]">Where Talents are Nurtured</h2>
            <p className="text-gray-200 max-w-2/4">We believe that creative expressions are the window to the soul.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ManipalAdvantage;
