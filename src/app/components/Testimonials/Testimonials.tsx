"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <>
      <div className="text-center lg:pt-0 pt-24">
        <h2 className="lg:text-[2rem] xl:text-[2.5rem] md:text-[2.5rem] font-bold tracking-tight text-gray-900 flex items-center justify-center gap-2">
          Bright Minds, <span className="text-[#FF8DC7] flex items-center">Big Dreams</span>
        </h2>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote: (
      <>
        Manipal School <span className="font-extrabold">gave me the confidence to dream big</span> & the skills to achieve them. The support from
        teachers made all the difference.
      </>
    ),
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: (
      <>
        <span className="font-extrabold">Manipal School helped me grow in every way</span>. I left with knowledge, friendships & lifelong memories.
      </>
    ),
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote: (
      <>
        The learning experience at Manipal School was truly world-class. It{" "}
        <span className="font-extrabold">laid a strong foundation for my higher studies & career</span>.
      </>
    ),
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote: "The dedicated teachers at Manipal School always pushed us to be our best. Their mentorship played a huge role in my success.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
