"use client";

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface EducationLevel {
  id: string;
  title: string;
  color: string;
  hoverColor: string;
}

function LearningLife() {
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

  const educationLevels: EducationLevel[] = [
    {
      id: 'nursery',
      title: 'Nursery',
      color: 'bg-[#2196F3]',
      hoverColor: 'hover:bg-[#1E88E5]'
    },
    {
      id: 'prep-school',
      title: 'Prep-School (Prep I - II)',
      color: 'bg-[#4CAF50]',
      hoverColor: 'hover:bg-[#43A047]'
    },
    {
      id: 'grades-1-10',
      title: 'Grades I - X',
      color: 'bg-[#FFC107]',
      hoverColor: 'hover:bg-[#FFB300]'
    },
    {
      id: 'senior-secondary',
      title: 'Senior Secondary (Grades XI - XII)',
      color: 'bg-[#FF5722]',
      hoverColor: 'hover:bg-[#F4511E]'
    }
  ];

  return (
    <div className="bg-gradient-to-br flex items-center relative justify-center ">
      <div className="absolute top-[2.5rem] right-[5%] xl:w-96 xl:h-48 lg:w-64 lg:h-32 bg-[#AF84CC] rotate-37 rounded-b-full opacity-100 z-50"></div>
      <div className="w-full max-w-7xl  xl:mx-auto lg:mx-8  mt-56">
        <h1 className="xl:text-[2.5rem] lg:text-[2rem] text-black font-bold mb-8">
          Learning for Life: From{' '}
          <span className="text-blue-500">Nursery</span> to{' '}
          <span className="text-orange-500">Senior Secondary</span>
        </h1>

        {/* Grid for 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationLevels.map((level) => (
            <div
              key={level.id}
              className="overflow-hidden transition-all duration-500 ease-in-out rounded-xl w-full h-full"
            >
              <button
                className={`w-full h-full text-left p-6 text-white transition-all duration-300 transform 
                  ${level.color} ${level.hoverColor} 
                  ${expandedLevel === level.id ? 'scale-[1.02]' : 'hover:scale-[1.01]'}
                  shadow-lg hover:shadow-xl`}
                onClick={() => setExpandedLevel(expandedLevel === level.id ? null : level.id)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold">{level.title}</span>
                  {/* ChevronRight icon will only appear on small/medium screens */}
                  <ChevronRight
                    className={`transition-transform duration-500 ease-in-out
                      ${expandedLevel === level.id ? 'rotate-90' : ''} lg:hidden`}
                    size={24}
                  />
                </div>
                
                <div className={`mt-4 pt-4 border-t border-white/20 text-white/90
                  `}
                >
                  <p>Comprehensive education program tailored for {level.title} students.</p>
                  <ul className="mt-2 list-disc list-inside">
                    <li>Personalized learning approach</li>
                    <li>Interactive classroom activities</li>
                    <li>Regular progress assessments</li>
                    <li>Holistic development focus</li>
                  </ul>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-400 rounded-full opacity-20 -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300 rounded-full opacity-20 -z-10 blur-3xl"></div>
      </div>
    </div>
  );
}

export default LearningLife;
