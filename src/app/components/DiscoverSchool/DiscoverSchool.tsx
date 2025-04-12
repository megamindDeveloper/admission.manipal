"use client";

import React, { useRef } from "react";
import Image from "next/image";
import studentImage from "../../../../public/images/DISCOVERIMAGE.jpg";
import { motion } from "framer-motion";

const DiscoverSchool = () => {
  // References to detect when sections are in view
  const imageRef = useRef(null);
  const textRef = useRef(null);

  return (
    <div className="bg-white md:my-32">
      <div className=" xl:mx-auto mx-8 lg:mx-36 h-auto">
        <div className="relative bg-white rounded-3xl overflow-hidden">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-20 lg:gap-16">
            {/* Image section */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
              whileInView={{ opacity: 1, x: 0 }} // Slide in to position
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger only once
              className="relative z-0"
            >
              <div className="absolute right-[0%] lg:right-[-10%] xl:right-[0%] md:top-[-5rem] top-[-3rem] md:w-36 md:h-36 h-20 w-20 bg-[#AF84CC]  rounded-tr-full rounded-tl-full rounded-br-full z-10"></div>
              <div className="absolute md:block hidden xl:bottom-[-10%] lg:bottom-[-13%] bottom-[-10%] left-[0%]">
                <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M85.4823 170.873C97.2746 129.646 129.5 97.421 170.727 85.6288C129.5 73.8365 97.2746 41.6115 85.4824 0.384514C73.693 41.6115 41.4651 73.8365 0.23809 85.6288C41.465 97.421 73.6901 129.649 85.4823 170.873Z"
                    fill="#FB9D2B"
                  />
                </svg>
              </div>
              <div className="absolute md:hidden block xl:bottom-[-10%] lg:bottom-[-13%] bottom-[-10%] left-[0%]">
                <svg width="109" height="106" viewBox="0 0 109 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M54.3037 0.0644531C46.7948 25.5978 26.2752 45.556 0.0234375 52.8594C26.2752 60.1627 46.7948 80.1209 54.3037 105.654C61.8107 80.1209 82.3322 60.1627 108.584 52.8594C82.3322 45.556 61.8125 25.5961 54.3037 0.0644531Z"
                    fill="#FB9D2B"
                  />
                </svg>
              </div>
              <Image src={studentImage} alt="Students in classroom" className="object-cover w-[100%] h-[100%] rounded-2xl z-0" />
            </motion.div>

            {/* Content section */}
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
              whileInView={{ opacity: 1, x: 0 }} // Slide in to position
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger only once
              className="relative  md:px-4 lg:px-8"
            >
              <div className="relative z-10 space-y-6">
                <h1 className="lg:text-[2rem] text-[1.5rem] mt-10 md:mt-0 xl:text-[2.5rem] md:text-[2.5rem] font-semibold text-black leading-tight">
                  Discover a New Way to Learn at <span className="text-[#FF5F1F]">a School That Inspires</span>
                </h1>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Manipal School, Mangalore, is a trusted institution known for its excellence in academics and holistic development, making it the
                    preferred choice for parents seeking quality education in the heart of the city. Affiliated with CBSE (830495), we follow
                    Pearson’s Nurture curriculum in Kindergarten before transitioning to CBSE for Grades 1–12.
                    
                    </p> <p> Our student-centric approach ensures
                    top-tier health, safety & protection standards, while technology-enabled learning equips students for a tech-driven world. Beyond
                    academics, we encourage active participation in sports & extra-curricular, shaping well-rounded individuals. Signature programs
                    like Manipal Mind-Spark, our annual innovation-driven exhibition, celebrate student creativity. Our Mentor-Mentee Program provides
                    personalized guidance, empowering students to achieve their full potential.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSchool;
