'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Lottie = dynamic(() => import('react-lottie'), { ssr: false })
import animationData from '../../../animation/aboutSectionAnimation.json'

function AboutSchool() {
  // Reference for the Lottie container to detect when it's in view
  const lottieRef = useRef(null)
  const isLottieInView = useInView(lottieRef, { once: true })

  const defaultOptions = {
    loop: true, // Keep looping as in the original
    autoplay: false, // Set to false to control playback manually
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="bg-white flex items-center  my-32">
      <div className="max-w-7xl xl:mx-auto mx-8 h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text Section */}
          <div className="space-y-4">
            <h1 className="lg:text-[2rem] md:text-[2.5rem] xl:text-[2.5rem] text-[1.5rem] leading-tight tracking-tight">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-[#FF5F1F] font-bold"
              >
                Manipal School  {" "} 
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="font-bold text-[#1A1A1A]"
              >
                is a premier institution dedicated to holistic education, blending academics, culture & technology to nurture well-rounded learners.
              </motion.span>
            </h1>
          </div>

          {/* Lottie Animation Section */}
          <div className="w-full md:block hidden">
            <motion.div
              ref={lottieRef}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Lottie
                options={defaultOptions}
                height={300}
                width={300}
                isStopped={!isLottieInView}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSchool