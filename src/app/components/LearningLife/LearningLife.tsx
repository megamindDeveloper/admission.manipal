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
        "Our Foundation level Programme is designed to provide a secure, stimulating, and nurturing learning environment where young learners thrive. Through structured play activities, art, craft, and interactive games, children develop essential cognitive and social skills. Intellectual growth is fostered through storytelling, discussions, early writing, number games, hands-on observations, and engaging scientific experiences. We maintain a strong partnership with parents, ensuring their active involvement in their child's learning journey.",
    },
    {
      id: "prep-school",
      title: "Preparatory Level: Grades III",
      color: "bg-[#31CB6E]",
      hoverColor: "hover:bg-[#31CB6E]",
      description:
        "As students' transition to Primary School, we nurture their natural curiosity by providing hands-on learning experiences that build essential foundational skills. Our approach encourages them to question, explore, apply, and test their knowledge in a dynamic and supportive environment. Alongside academic growth, we emphasize the importance of respect, collaboration, and social etiquette, helping students develop confidence and a strong sense of community.",
    },
    {
      id: "grades-1-10",
      title: "Middle School Level: (Grades VI – VIII)",
      color: "bg-[#FBD034]",
      hoverColor: "hover:bg-[#FBD034]",
      description:
        "Our Middle School curriculum is designed to nurture confident, competent learners by cultivating collaborative learning communities, encouraging meaningful student-faculty discussions, and integrating digital engagement. This stage is a crucial turning point in a student's educational journey. We provide the necessary guidance and support to help them stay focused on their aspirations. Our goal is to empower students to grow into responsible, independent, and well-rounded young adults, prepared for future challenges",
    },
    {
      id: "senior-secondary",
      title: "Secondary (Grades IX - XII)",
      color: "bg-[#FB7824]",
      hoverColor: "hover:bg-[#FB7824]",
      description:
        "Our Secondary School curriculum is designed to empower students with critical thinking, problem-solving, and analytical skills essential for academic and personal growth. At this pivotal stage, we provide the right balance of academic rigor and personal development, ensuring students remain focused on their goals while building resilience and confidence. Through a well-structured curriculum, guided mentorship, and real-world applications of learning, we prepare students to transition seamlessly into higher education and future careers.",
    },
  ];

  // Reference for scroll detection
  const sectionRef = useRef(null);

  return (
    <div className="bg-white flex items-center relative justify-center" ref={sectionRef}>
      {/* Decorative Rotated Rectangle - Scales and Fades In */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute top-[2.5rem] right-[5%] xl:w-96 xl:h-48 lg:w-64 lg:h-32 bg-[#AF84CC]  rotate-37 rounded-b-full opacity-100 z-50"
      ></motion.div>

      <div className="w-full max-w-7xl xl:mx-auto mx-8 mt-16 lg:mt-56">
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
                  <span className="text-xl font-semibold leading-tight">{level.title}</span>
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
