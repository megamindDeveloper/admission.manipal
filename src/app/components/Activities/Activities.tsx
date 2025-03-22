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
  style?: React.CSSProperties; // Add style prop
}

const FacilityCard: React.FC<FacilityCardProps> = ({ title, imageUrl, className = "", gradientColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animation triggers only once

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly below
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} // Fade in and slide up when in view
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition over 0.5 seconds
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
  
  return (
    <div className="min-h-screen relative">
      <div className="absolute bottom-[4%] opacity-100 z-50 right-[-3%]">
        <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M85.4823 170.873C97.2746 129.646 129.5 97.421 170.727 85.6288C129.5 73.8365 97.2746 41.6115 85.4824 0.384514C73.693 41.6115 41.4651 73.8365 0.23809 85.6288C41.465 97.421 73.6901 129.649 85.4823 170.873Z"
            fill="#FB9D2B"
          />
        </svg>
      </div>
      <div className="max-w-7xl xl:mx-auto lg:mx-8">
        <div className="my-24">
          <h1 className="xl:text-[2.5rem] lg:text-[2rem] leading-10 font-bold text-gray-900 mb-4">
            Comprehensive Support
            <br />
            for Growing Minds
          </h1>
          <p className="text-gray-600 max-w-1/3 ">From high-tech labs to serene study spaces, We provide the perfect learning environment.</p>
        </div>
        <div className="grid grid-cols-12 gap-4 relative">
          <FacilityCard
            title="Expansive Library"
            imageUrl="/images/activityImages/activityImage1.png"
            className="col-span-3 row-span-2 mt-56 fade-in"
            style={{ animationDelay: "0s" }}
            gradientColor="#FECBE5"
          />
          <FacilityCard
            title="Access to World-Class Sports Facilities"
            imageUrl="/images/activityImages/activityImage2.png"
            className="col-span-3 row-span-1 top-32 fade-in"
            style={{ animationDelay: "0.2s" }}
            gradientColor="#2B9FF7"
          />
          <FacilityCard
            title="Insightful Guest Lectures"
            imageUrl="/images/activityImages/activityImage3.png"
            className="col-span-3 row-span-2 fade-in"
            style={{ animationDelay: "0.4s" }}
            gradientColor="#FBD034"
          />
          <FacilityCard
            title="Outreach Activities"
            imageUrl="/images/activityImages/activityImage4.png"
            className="col-span-3 row-span-1 top-20 fade-in"
            style={{ animationDelay: "0.6s" }}
            gradientColor="#AF84CC"
          />
          <FacilityCard
            title="Career Collaborations with MAHE Manipal"
            imageUrl="/images/activityImages/activityImage5.png"
            className="col-span-3 row-span-2 top-36 fade-in"
            style={{ animationDelay: "0.8s" }}
            gradientColor="#31CB6E"
          />
          <FacilityCard
            title="Higher Education Exposure"
            imageUrl="/images/activityImages/activityImage6.png"
            className="col-span-4 lg:max-w-[230px] row-span-2 xl:max-w-[310px] top-[-13rem] fade-in"
            style={{ animationDelay: "1.0s" }}
            gradientColor="#FB7824"
          />
        </div>
      </div>
    </div>
  );
}

export default Activities;
