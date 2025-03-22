'use client'  

import React from 'react'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('react-lottie'), { ssr: false })
import animationData from '../../../animation/aboutSectionAnimation.json'

function AboutSchool() {
  const defaultOptions = {
    loop: true, // Set to true to loop the animation
    autoplay: true, // Play animation automatically
    animationData: animationData, // Lottie animation JSON
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="bg-white flex items-center">
      <div className="max-w-7xl  xl:mx-auto lg:mx-8 h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-4">
            <h1 className="lg:text-[2rem] xl:text-[2.5rem] leading-tight tracking-tight">
              <span className="text-[#FF5F1F] font-bold">Manipal School  </span>
              <span className="font-bold text-[#1A1A1A]">
                is a premier institution dedicated to holistic education, blending academics, culture & technology to nurture well-rounded learners.
              </span>
            </h1>
          </div>

          <div className="w-full" >
            {/* Container div for padding around Lottie */}
            <div className="p-8">
              <Lottie options={defaultOptions} height={300} width={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSchool
