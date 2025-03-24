"use client";

import React, { useRef } from "react";
import AppleStyledCard from "../ui/apple-card";
import CardContent from "@/app/components/ui/card-content";
import { motion, useInView } from "framer-motion";

interface FacilityCardProps {
  title: string;
  imageUrl: string;
  className?: string;
  gradientColor?: string;
  delay: number;
  index: number; // Used to alternate direction
}

const FacilityCard: React.FC<FacilityCardProps> = ({ title, imageUrl, className = "", gradientColor, delay, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Alternate direction: even index from left, odd from right
  const direction = index % 2 === 0 ? -50 : 50; // -50 for left, 50 for right

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction }} // Start off-screen left or right
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : direction }} // Slide to center
      transition={{ duration: 0.5, ease: "easeOut", delay }} // Smooth transition with delay
      className={`relative rounded-2xl overflow-hidden group h-[360px] ${className}`}
    >
      <AppleStyledCard
        imageSrc={imageUrl}
        title={title}
        imageAlt={title}
        category="Nothing"
        key={title}
        gradientColor={gradientColor}
        content={
          <CardContent
            title="The first rule of Apple club is that you boast about Apple club."
            description="Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem."
            backgroundColor="bg-[#F5F5F7]"
            textColor="text-neutral-600"
            headingColor="text-neutral-700"
          />
        }
      />
    </motion.div>
  );
};

function Activities() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  return (
    <div className="min-h-screen relative" ref={sectionRef}>
      <div className="absolute bottom-[4%] opacity-100 z-50 right-[-3%]">
        <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M85.4823 170.873C97.2746 129.646 129.5 97.421 170.727 85.6288C129.5 73.8365 97.2746 41.6115 85.4824 0.384514C73.693 41.6115 41.4651 73.8365 0.23809 85.6288C41.465 97.421 73.6901 129.649 85.4823 170.873Z"
            fill="#FB9D2B"
          />
        </svg>
      </div>
      <div className="max-w-7xl xl:mx-auto mx-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isSectionInView ? 1 : 0, y: isSectionInView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          className="my-24"
        >
          <h1 className="xl:text-[2.5rem] md:text-[2.5rem] lg:text-[2rem] leading-10 font-bold text-gray-900 mb-4">
            Comprehensive Support
            <br />
            for Growing Minds
          </h1>
          <p className="text-gray-600 max-w-1/3">From high-tech labs to serene study spaces, We provide the perfect learning environment.</p>
        </motion.div>
        <div className="lg:grid grid-cols-12 gap-4 hidden relative">
          <FacilityCard
            title="Expansive Library"
            imageUrl="/images/activityImages/activityImage1.png"
            className="lg:col-span-3 md:col-span-5 row-span-2 mt-56"
            gradientColor="#FECBE5"
            delay={0.1}
            index={0} // From left
          />
          <FacilityCard
            title="Access to World-Class Sports Facilities"
            imageUrl="/images/activityImages/activityImage2.png"
            className="lg:col-span-3 md:col-span-5 row-span-1 top-32"
            gradientColor="#2B9FF7"
            delay={0.2}
            index={1} // From right
          />
          <FacilityCard
            title="Insightful Guest Lectures"
            imageUrl="/images/activityImages/activityImage3.png"
            className="lg:col-span-3 md:col-span-5 row-span-2"
            gradientColor="#FBD034"
            delay={0.3}
            index={2} // From left
          />
          <FacilityCard
            title="Outreach Activities"
            imageUrl="/images/activityImages/activityImage4.png"
            className="lg:col-span-3 md:col-span-5 row-span-1 top-20"
            gradientColor="#AF84CC"
            delay={0.4}
            index={3} // From right
          />
          <FacilityCard
            title="Career Collaborations with MAHE Manipal"
            imageUrl="/images/activityImages/activityImage5.png"
            className="lg:col-span-3 md:col-span-5 row-span-2 top-36"
            gradientColor="#31CB6E"
            delay={0.5}
            index={4} // From left
          />
          <FacilityCard
            title="Higher Education Exposure"
            imageUrl="/images/activityImages/activityImage6.png"
            className="lg:col-span-4 md:col-span-5 lg:max-w-[230px] row-span-2 xl:max-w-[310px] top-[-13rem]"
            gradientColor="#FB7824"
            delay={0.6}
            index={5} // From right
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 relative lg:hidden">
          <FacilityCard
            title="Expansive Library"
            imageUrl="/images/activityImages/activityImage1.png"
            className="col-span-1"
            gradientColor="#FECBE5"
            delay={0.1}
            index={0}
          />
          <FacilityCard
            title="Access to World-Class Sports Facilities"
            imageUrl="/images/activityImages/activityImage2.png"
            className="col-span-1"
            gradientColor="#2B9FF7"
            delay={0.2}
            index={1}
          />
          <FacilityCard
            title="Insightful Guest Lectures"
            imageUrl="/images/activityImages/activityImage3.png"
            className="col-span-1"
            gradientColor="#FBD034"
            delay={0.3}
            index={2}
          />
          <FacilityCard
            title="Outreach Activities"
            imageUrl="/images/activityImages/activityImage4.png"
            className="col-span-1"
            gradientColor="#AF84CC"
            delay={0.4}
            index={3}
          />
          <FacilityCard
            title="Career Collaborations with MAHE Manipal"
            imageUrl="/images/activityImages/activityImage5.png"
            className="col-span-1"
            gradientColor="#31CB6E"
            delay={0.5}
            index={4}
          />
          <FacilityCard
            title="Higher Education Exposure"
            imageUrl="/images/activityImages/activityImage6.png"
            className="col-span-1"
            gradientColor="#FB7824"
            delay={0.6}
            index={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Activities;
