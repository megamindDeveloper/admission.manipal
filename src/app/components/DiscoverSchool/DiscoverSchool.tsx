import React from 'react'
import studentImage from '../../../../public/images/freepik__the-style-is-candid-image-photography-with-natural__18228 1.png'
import Image from 'next/image'
const DiscoverSchool = () => {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white rounded-3xl overflow-hidden">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image section */}
            <div className="relative">
              <Image 
                src={studentImage}
                alt="Students in classroom"
                className=" object-cover rounded-2xl"
              />
              {/* Orange decorative shape */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 transform rotate-45">
                <div className="w-full h-full bg-[#FF5F1F] rounded-lg"></div>
              </div>
            </div>

            {/* Content section */}
            <div className="relative pt-8 lg:pt-16 pb-8 px-4 lg:px-8">
              {/* Purple decorative circle */}
              {/* <div className="absolute top-0 right-0 w-24 h-24">
                <div className="w-full h-full bg-[#8B5CF6] rounded-full opacity-90"></div>
              </div> */}

              {/* Text content */}
              <div className="relative z-10 space-y-6">
                <h1 className="text-4xl font-semibold text-black leading-tight">
                  Discover a New Way to Learn at{' '}
                  <span className="text-[#FF5F1F]">a School That Inspires</span>
                </h1>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Ranked No.1 in Mangalore, Manipal School is the first choice for discerning parents. Affiliated with CBSE (830495), we follow the MyPedia curriculum in Kindergarten before transitioning to CBSE for Grades 1-12. Our student-centric approach ensures top-tier health, safety & protection standards, while technology-enabled learning equips students for a tech-driven world.
                  </p>

                  <p>
                    Beyond academics, we encourage active participation in sports & extracurriculars, shaping well-rounded individuals. Signature programs like Manipal Sparkle, our annual talent show, & Manipal Mind-Spark, an innovation-driven exhibition, celebrate student creativity. Our Mentor-Mentee Program provides personalized guidance, empowering students to reach their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverSchool
