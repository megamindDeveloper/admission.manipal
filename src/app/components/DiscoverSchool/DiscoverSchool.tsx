'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import studentImage from '../../../../public/images/freepik__the-style-is-candid-image-photography-with-natural__18228 1.png'
import { motion, useInView } from 'framer-motion'

const DiscoverSchool = () => {
  // References to detect when sections are in view
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const isImageInView = useInView(imageRef, { once: true })
  const isTextInView = useInView(textRef, { once: true })

  return (
    <div className="bg-white">
      <div className="max-w-7xl xl:mx-auto lg:mx-8 h-auto">
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
              <div className="absolute lg:right-[-10%] xl:right-[0%] top-[-5rem] w-36 h-36 bg-[#AF84CC] rounded-tr-full rounded-tl-full rounded-br-full z-10"></div>
              <div className="absolute xl:bottom-[-10%] lg:bottom-[-13%] left-[0%]">
                <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M85.4823 170.873C97.2746 129.646 129.5 97.421 170.727 85.6288C129.5 73.8365 97.2746 41.6115 85.4824 0.384514C73.693 41.6115 41.4651 73.8365 0.23809 85.6288C41.465 97.421 73.6901 129.649 85.4823 170.873Z"
                    fill="#FB9D2B"
                  />
                </svg>
              </div>
              <Image
                src={studentImage}
                alt="Students in classroom"
                className="object-cover rounded-2xl z-0"
              />
            </motion.div>

            {/* Content section */}
            <motion.div
              ref={textRef}
              initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
              whileInView={{ opacity: 1, x: 0 }} // Slide in to position
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger only once
              className="relative xl:pt-16 px-4 lg:px-8"
            >
              <div className="relative z-10 space-y-6">
                <h1 className="lg:text-[2rem] xl:text-[2.5rem] font-semibold text-black leading-tight">
                  Discover a New Way to Learn at <span className="text-[#FF5F1F]">a School That Inspires</span>
                </h1>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Ranked No.1 in Mangalore, Manipal School is the first choice for discerning parents. Affiliated with CBSE (830495), we follow the
                    MyPedia curriculum in Kindergarten before transitioning to CBSE for Grades 1-12. Our student-centric approach ensures top-tier
                    health, safety & protection standards, while technology-enabled learning equips students for a tech-driven world.
                  </p>

                  <p>
                    Beyond academics, we encourage active participation in sports & extracurriculars, shaping well-rounded individuals. Signature
                    programs like Manipal Sparkle, our annual talent show, & Manipal Mind-Spark, an innovation-driven exhibition, celebrate student
                    creativity. Our Mentor-Mentee Program provides personalized guidance, empowering students to reach their full potential.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverSchool