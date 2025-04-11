"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <>
      <div className="text-center lg:pt-0 pt-24">
        <h2 className="xl:text-[4.5rem] md:text-[2.5rem] lg:text-[3rem] text-[1.5rem] font-bold tracking-tight text-gray-900 flex items-center justify-center gap-2">
          Bright Minds, <span className="text-[#FF8DC7] flex items-center">Big Dreams</span>
        </h2>
      </div>
      <div className="md:h-[40rem] my-12 md:my-0 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote: (
      <>
As part of Manipal School’s first batch, the support and guidance I received shaped who I am today. Grateful for a journey that turned dreams into reality.
      </>
    ),
    name: "Dr. Kedar Mahendra Kodkany, Batch of 2014-15",
    title: "MD Emergency Medicine Resident, Yenepoya Medical College Hospital",
    profile: "/images/testimonialsImages/KedarKodkany.jpg",
  },
  {
    quote: (
      <>
        As part of Manipal School’s first batch, the foundation I built there still guides me as a doctor today. Its focus on all-round development shaped my skills, values, and readiness for life’s challenges.

      </>
    ),
    name: "Dr Anvia Vilina Dsouza, Batch of 2014-15",
    title: "Junior Doctor in Medicine, Wenlock hospital",
    profile: "/images/testimonialsImages/AnviaDsouza.jpg",
  },
  {
    quote: (
      <>
      Proud to be a Manipal School alumnus — where I gained knowledge, confidence, lifelong friends, and the foundation for success. Grateful to the inspiring teachers who shaped my journey.


      </>
    ),
    name: "Mohammed Juman Hussain, Batch of 2014-15",
    title: "HR Analyst II, DXC Technology India",
    profile: "/images/testimonialsImages/MohdJumanHussain.jpg",
  },
  {
    quote: (
      <>
     Manipal School offered a holistic learning experience that nurtured my academic, creative, and technical growth. It sparked curiosity and critical thinking, shaping my path as an engineer.

    </>
    ),
    name: "Ishaan Pilar, Batch of 2014-15",
    title: "Co-founder Bloc42 Learning",
    profile: "/images/testimonialsImages/Ishaanpilar.jpg",
  },
  {
    quote:
      " Manipal School empowered me to chase my dreams, excel in academics, and thrive in sports. It laid a strong foundation and inspired me to always strive for the best.",
    name: "Keya Ashutosh Boloor, Batch of 2021-22",
    title: "Pursuing Architecture at Manipal School of Architecture and Planning, Manipal",
    profile: "/images/testimonialsImages/KeyaBoloor.jpg",
  },
];
