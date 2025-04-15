"use client";

import React, { useState, useRef } from "react";

import { motion } from "framer-motion";

interface EducationLevel {
  id: string;
  title: string;
  color: string;
  hoverColor: string;
  description: string;
}

function LearningLife() {
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

  const educationLevels: EducationLevel[] = [
    {
      id: "nursery",
      title: "Foundation Level: (Nursery to Grade II)",
      color: "bg-[#2B9FF7]",
      hoverColor: "hover:bg-[#2B9FF7]",
      description:
        "Our Foundation Programme offers a safe, nurturing space where young minds thrive.Through play, art, and interactive games, children build key cognitive and social skills.Storytelling, number games, and hands-on activities spark curiosity and early learning.We partner closely with parents to support every child’s growth and development.",
    },
    {
      id: "prep-school",
      title: "Preparatory Level: (Grades III - V)",
      color: "bg-[#31CB6E]",
      hoverColor: "hover:bg-[#31CB6E]",
      description:
        "In Primary School, we nurture curiosity through hands-on, experiential learning.Students are encouraged to explore, question, and apply knowledge confidently.Our approach builds strong academic foundations in a dynamic, supportive setting.We also focus on respect, teamwork, and social skills to foster a sense of community.",
    },
    {
      id: "grades-1-10",
      title: "Middle School Level: (Grades VI – VIII)",
      color: "bg-[#FBD034]",
      hoverColor: "hover:bg-[#FBD034]",
      description:
        "Our Middle School programme builds confident, capable learners through collaboration and digital engagement.We encourage meaningful student-faculty interactions to deepen understanding and critical thinking.With guidance and support, students stay focused on their goals and aspirations.We aim to shape independent, well-rounded young adults ready for future challenges.",
    },
    {
      id: "senior-secondary",
      title: "Secondary School Level:(Grades IX - XII)",
      color: "bg-[#FB7824]",
      hoverColor: "hover:bg-[#FB7824]",
      description:
       "Our Secondary School programme empowers students with critical thinking and problem-solving skills.We balance academic rigor with personal growth to build confidence and resilience.Guided mentorship and real-world learning keep students focused on their goals.We prepare them for a smooth transition into higher education and future careers.",
    },
  ];

  // Reference for scroll detection
  const sectionRef = useRef(null);

  return (
    <div className="bg-white  flex items-center relative justify-center" ref={sectionRef}>
      {/* Decorative Rotated Rectangle - Scales and Fades In */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-[2.5rem] right-[5%] xl:w-96 xl:h-48 lg:w-64 lg:h-32 bg-[#AF84CC]  rotate-37 rounded-b-full opacity-100 z-50"
      ></motion.div> */}

      <div className="mx-8 lg:mx-36  ">
        {/* Heading - Slides Down and Fades In */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="xl:text-[2.5rem] md:text-[2.5rem] lg:text-[2rem] text-[1.5rem] leading-7 md:leading-none text-black font-bold mb-8"
        >
          Learning for Life: From <span className="text-blue-500">Nursery</span> to <span className="text-orange-500">Senior Secondary</span>
        </motion.h1>

        {/* Grid for 4 Cards - Staggered Fade and Slide Up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationLevels.map((level, index) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay
              viewport={{ once: true }}
              className="overflow-hidden transition-all duration-500 ease-in-out rounded-xl w-full h-full"
            >
              <button
                className={`w-full h-full text-left p-6 text-white transition-all duration-300 transform 
                  ${level.color} ${level.hoverColor} 
                  ${expandedLevel === level.id ? "scale-[1.02]" : "hover:scale-[1.01]"}
                  shadow-lg hover:shadow-xl flex flex-col`}
                onClick={() => setExpandedLevel(expandedLevel === level.id ? null : level.id)}
              >
                <div className="flex items-start justify-between mb-4 min-h-[3rem]">
                  <span className="text-2xl font-semibold leading-tight">{level.title}</span>
                </div>
                <div className="mt-2 pt-4 border-t border-white/20 text-white/90 flex-grow">
                  <p className="text-sm leading-relaxed">{level.description}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Decorative Blurred Circles - Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute top-0 right-0 w-48 h-48 bg-purple-400 rounded-full -z-10 blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300 rounded-full -z-10 blur-3xl"
        ></motion.div>
      </div>
    </div>
  );
}

export default LearningLife;
