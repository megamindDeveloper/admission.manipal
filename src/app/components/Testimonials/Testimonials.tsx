"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <>
      <div className="text-center lg:pt-0 pt-24">
        <h2 className="lg:text-[2rem] text-[1.5rem] xl:text-[2.5rem] md:text-[2.5rem] font-bold tracking-tight text-gray-900 flex items-center justify-center gap-2">
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
        As a member of the inaugural graduating cohort of Manipal School, the wonderful memories and invaluable lessons I learned, both intellectually
        and personally, have intricately woven the very fabric of who I am today. The relentless dedication and unwavering commitment of the school
        and its educators to unearth the latent potential within each of us have propelled us towards living the extraordinary lives we once only
        dared to dream. I remain eternally indebted and profoundly thankful.
      </>
    ),
    name: "Dr. Kedar Mahendra Kodkany, Batch of 2014-15",
    title: "MD Emergency Medicine Resident, Yenepoya Medical College Hospital",
    profile: "/images/testimonialsImages/KedarKodkany.jpg"
  },
  {
    quote: (
      <>
        As a member of the first batch of Manipal School, I am a testament to the institution’s philosophy. The strong foundation I built there has
        stayed with me throughout my life and continues to shape me as a doctor today. The emphasis on all-round development truly sets Manipal apart,
        instilling skills and values that go beyond academics and prepare you for every challenge.
      </>
    ),
    name: "Dr Anvia Vilina Dsouza, Batch of 2014-15",
    title: "Junior Doctor in Medicine, Wenlock hospital",
    profile:"/images/testimonialsImages/AnviaDsouza.jpg"
  },
  {
    quote:
      " I'm proud to be an alumnus of Manipal School, where I gained knowledge, confidence, a strong foundation for success, and some amazing friends! I'm also grateful for the supportive and inspiring teachers who helped shape my journey - thank you for being incredible role models",
    name: "Mohammed Juman Hussain, Batch of 2014-15",
    title: "HR Analyst II, DXC Technology India",
    profile:"/images/testimonialsImages/MohdJumanHussain.jpg"
  },
  {
    quote: (
      <>
        Manipal School provided me with a truly holistic learning experience, shaping not just my academic growth but also my creative and technical
        pursuits. The school's environment fostered curiosity, critical thinking, and hands-on learning, which played a crucial role in my journey as
        an engineer.
      </>
    ),
    name: "Ishaan Pilar, Batch of 2014-15",
    title: "Co-founder Bloc42 Learning",
     profile:"/images/testimonialsImages/Ishaanpilar.jpg"
  },
  {
    quote:
      " Manipal school gave me the opportunity to dream and achieve my goals and excel in academics as well as support me throughout my sporting career. It also gave me the best foundation for my future and challenged me to always strive to be the best.",
    name: "Keya Ashutosh Boloor, Batch of 2021-22",
    title: "Pursuing Architecture at Manipal School of Architecture and Planning, Manipal",
    profile:"/images/testimonialsImages/KeyaBoloor.jpg"
  },
];
