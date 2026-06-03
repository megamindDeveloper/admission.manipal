"use client";

import React, { useRef, useEffect, useState } from "react";
import CardContent from "@/app/components/ui/card-content";
import { motion, useInView, AnimatePresence } from "motion/react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Image, { type ImageProps } from "next/image";

interface FacilityCardProps {
  title: string;
  imageUrl: string;
  className?: string;
  gradientColor?: string;
  description: string;
  delay: number;
  index: number;
  imageUrl2: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ title, imageUrl, className = "", gradientColor, delay, index, description, imageUrl2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Alternate direction: even index from left, odd from right
  const direction = index % 2 === 0 ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction }}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : direction }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={`relative rounded-2xl overflow-hidden group h-[360px] w-full ${className}`}
    >
      <AppleStyledCard
        imageSrc={imageUrl}
        title={title}
        imageAlt={title}
        key={title}
        gradientColor={gradientColor}
        content={
          <CardContent
            title={title}
            imageSrc={imageUrl2}
            description={description}
            backgroundColor=""
            textColor="text-neutral-600"
            headingColor="text-neutral-700"
          />
        }
      />
    </motion.div>
  );
};

function Activities() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true });

  return (
    <div className="min-h-screen relative overflow-hidden" ref={sectionRef}>
      
      {/* Background Decorative Element */}
      <div className="absolute bottom-[4%] opacity-100 z-0 md:flex hidden right-[-3%] pointer-events-none">
        <svg width="171" height="171" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M85.4823 170.873C97.2746 129.646 129.5 97.421 170.727 85.6288C129.5 73.8365 97.2746 41.6115 85.4824 0.384514C73.693 41.6115 41.4651 73.8365 0.23809 85.6288C41.465 97.421 73.6901 129.649 85.4823 170.873Z"
            fill="#FB9D2B"
          />
        </svg>
      </div>

      <div className="lg:mx-36 mx-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isSectionInView ? 1 : 0, y: isSectionInView ? 0 : -50 }}
          transition={{ duration: 0.5 }}
          className="md:my-24 my-16"
        >
          <h1 className="xl:text-[2.5rem] md:text-[2.5rem] text-[1.5rem] lg:text-[2.5rem] md:leading-10 leading-7 font-bold text-gray-900 mb-4">
            Comprehensive Support
            <br />
            for Growing Minds
          </h1>
          <p className="text-gray-600 lg:max-w-1/3">From high-tech labs to serene study spaces, We provide the perfect learning environment.</p>
        </motion.div>

        {/* =========================================
            DESKTOP LAYOUT (4 Columns - Masonry Style)
            ========================================= */}
        <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-6 pb-32 items-start">
          
          {/* Column 1 */}
          <div className="flex flex-col mt-40 xl:mt-48">
            <FacilityCard
              title="Expansive Library"
              description="Manipal School boasts well-stocked libraries that serve as vibrant learning hubs, offering a diverse collection of periodicals, journals, magazines, newsletters, encyclopedias, fiction, and reference books. Our libraries go beyond traditional reading by integrating structured learning programs, including phonics for early learners and literary classics for older students. We are committed to providing a rich reading culture, inspiring students to explore, engage, and develop a lifelong love for books"
              imageUrl="/images/activityImages/activityImage1.jpg"
              imageUrl2="/images/activityImages/Image1.webp"
              gradientColor="#FECBE5"
              delay={0.1}
              index={0}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 mt-16 xl:mt-20">
            <FacilityCard
              title="Access to World-Class Sports Facilities"
              description="At Manipal School, we believe that a healthy body nurtures a healthy mind. Our state-of-the-art sports infrastructure(Marena) is designed to meet the diverse physical training needs of our students. With dedicated spaces for cricket, basketball, football, and badminton, we provide ample opportunities for students to engage in sports under the guidance of experienced coaches. To support overall well-being, we incorporate yoga into our curriculum, fostering mindfulness and inner balance. Additionally, Karate training is offered to instill discipline, confidence, and self-defense skills, promoting both physical and mental resilience."
              imageUrl="/images/activityImages/activityImage2.jpg"
              imageUrl2="/images/activityImages/Image2.webp"
              gradientColor="#2B9FF7"
              delay={0.2}
              index={1}
            />
            <FacilityCard
              title="Career Collaborations with MAHE Manipal"
              description="Manipal School collaborates with MAHE (Manipal Academy of Higher Education) to provide students with exclusive career exposure and academic guidance. Through expert-led workshops, career counseling sessions, and interactive seminars, students gain insights into various professional fields and emerging career trends. This collaboration offers a unique opportunity for mentorship, skill development, and hands-on learning experiences, empowering students to make informed choices about their higher education and future careers."
              imageUrl="/images/activityImages/activityImage5.jpg"
              imageUrl2="/images/activityImages/Image5.webp"
              gradientColor="#31CB6E"
              delay={0.5}
              index={4}
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 mt-0">
            <FacilityCard
              title="Insightful Guest Lectures"
              description="At Manipal School, we enrich our students' learning experience by hosting insightful guest lectures delivered by industry experts and academicians. These sessions provide valuable real-world perspectives, inspire critical thinking, and broaden students' horizons. Through interactive discussions and expert guidance, our students gain deeper insights into various fields, helping them make informed academic and career choices."
              imageUrl="/images/activityImages/activityImage3.jpg"
              imageUrl2="/images/activityImages/Image3.webp"
              gradientColor="#FBD034"
              delay={0.3}
              index={2}
            />
            <FacilityCard
              title="Higher Education Exposure"
              description="We are committed to equipping our students with the knowledge and guidance needed to make informed decisions about their future. Through university fairs, career counseling sessions, and interactions with esteemed academicians, we provide students with valuable insights into higher education opportunities. College visits, workshops, Job shadowing program and mentorship programs help them explore diverse career paths, empowering them to make confident choices for their academic and professional journeys."
              imageUrl="/images/activityImages/activityImage6.jpg"
              imageUrl2="/images/activityImages/Image6.webp"
              gradientColor="#FB7824"
              delay={0.6}
              index={5}
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-6 mt-12 xl:mt-16">
            <FacilityCard
              title="Outreach Activities"
              description="At Manipal School, we believe in nurturing socially responsible individuals by encouraging students to actively participate in outreach and community engagement programs. Through initiatives such as environmental drives, visits to orphanages and elderly homes, and awareness campaigns, students develop empathy, leadership, and a strong sense of civic responsibility. These experiences not only enrich their personal growth but also instill values of compassion and service, shaping them into responsible and compassionate individuals."
              imageUrl="/images/activityImages/activityImage4.jpg"
              imageUrl2="/images/activityImages/Image4.webp"
              gradientColor="#AF84CC"
              delay={0.4}
              index={3}
            />
          </div>
        </div>

        {/* =========================================
            MOBILE/TABLET LAYOUT (Standard Grid)
            ========================================= */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 relative lg:hidden pb-16">
          <FacilityCard
            title="Expansive Library"
            description="Manipal School boasts well-stocked libraries that serve as vibrant learning hubs, offering a diverse collection of periodicals, journals, magazines, newsletters, encyclopedias, fiction, and reference books. Our libraries go beyond traditional reading by integrating structured learning programs, including phonics for early learners and literary classics for older students. We are committed to providing a rich reading culture, inspiring students to explore, engage, and develop a lifelong love for books"
            imageUrl="/images/activityImages/activityImage1.jpg"
            imageUrl2="/images/activityImages/Image1.webp"
            gradientColor="#FECBE5"
            delay={0.1}
            index={0}
          />
          <FacilityCard
            title="Access to World-Class Sports Facilities"
            description="At Manipal School, we believe that a healthy body nurtures a healthy mind. Our state-of-the-art sports infrastructure(Marena) is designed to meet the diverse physical training needs of our students. With dedicated spaces for cricket, basketball, football, and badminton, we provide ample opportunities for students to engage in sports under the guidance of experienced coaches. To support overall well-being, we incorporate yoga into our curriculum, fostering mindfulness and inner balance."
            imageUrl="/images/activityImages/activityImage2.jpg"
            imageUrl2="/images/activityImages/Image2.webp"
            gradientColor="#2B9FF7"
            delay={0.2}
            index={1}
          />
          <FacilityCard
            title="Insightful Guest Lectures"
            description="At Manipal School, we enrich our students' learning experience by hosting insightful guest lectures delivered by industry experts and academicians. These sessions provide valuable real-world perspectives, inspire critical thinking, and broaden students' horizons. Through interactive discussions and expert guidance, our students gain deeper insights into various fields, helping them make informed academic and career choices."
            imageUrl="/images/activityImages/activityImage3.jpg"
            imageUrl2="/images/activityImages/Image3.webp"
            gradientColor="#FBD034"
            delay={0.3}
            index={2}
          />
          <FacilityCard
            title="Outreach Activities"
            description="At Manipal School, we believe in nurturing socially responsible individuals by encouraging students to actively participate in outreach and community engagement programs. Through initiatives such as environmental drives, visits to orphanages and elderly homes, and awareness campaigns, students develop empathy, leadership, and a strong sense of civic responsibility."
            imageUrl="/images/activityImages/activityImage4.jpg"
            imageUrl2="/images/activityImages/Image4.webp"
            gradientColor="#AF84CC"
            delay={0.4}
            index={3}
          />
          <FacilityCard
            title="Career Collaborations with MAHE Manipal"
            description="Manipal School collaborates with MAHE (Manipal Academy of Higher Education) to provide students with exclusive career exposure and academic guidance. Through expert-led workshops, career counseling sessions, and interactive seminars, students gain insights into various professional fields and emerging career trends. This collaboration offers a unique opportunity for mentorship, skill development, and hands-on learning experiences."
            imageUrl="/images/activityImages/activityImage5.jpg"
            imageUrl2="/images/activityImages/Image5.webp"
            gradientColor="#31CB6E"
            delay={0.5}
            index={4}
          />
          <FacilityCard
            title="Higher Education Exposure"
            description="We are committed to equipping our students with the knowledge and guidance needed to make informed decisions about their future. Through university fairs, career counseling sessions, and interactions with esteemed academicians, we provide students with valuable insights into higher education opportunities. College visits, workshops, Job shadowing program and mentorship programs help them explore diverse career paths."
            imageUrl="/images/activityImages/activityImage6.jpg"
            imageUrl2="/images/activityImages/Image6.webp"
            gradientColor="#FB7824"
            delay={0.6}
            index={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Activities;

// ==========================================
// AppleStyledCard & BlurImage Components
// ==========================================

type CardProps = {
  title?: string;
  imageSrc: string;
  imageAlt: string;
  content: React.ReactNode;
  gradientColor?: string;
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn("transition duration-300 ", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src || "/placeholder.svg"}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};

export function AppleStyledCard({ title, imageSrc, imageAlt, content, gradientColor = "rgba(0,0,0,0.8)" }: CardProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current || containerRef.current.contains(event.target as Node)) {
        return;
      }
      handleClose();
    };

    if (open) {
      document.body.style.overflow = 'hidden'; 
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] overflow-y-auto p-4 md:p-10 flex items-start justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="backdrop-blur-lg bg-black/40 w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", damping: 25, stiffness: 300, duration: 0.4 },
              }}
              exit={{ opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.3 } }}
              ref={containerRef}
              className="w-full max-w-5xl bg-white shadow-2xl dark:bg-neutral-900 h-auto min-h-[40vh] my-4 md:my-10 rounded-3xl font-sans relative overflow-hidden z-[110]"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.2 } }}
                className="absolute z-50 top-4 right-4 h-8 w-8 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                onClick={handleClose}
                aria-label="Close modal"
              >
                <IconX className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
              >
                {React.Children.map(content, (child, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3 + i * 0.1, duration: 0.5, type: "spring", damping: 20 },
                    }}
                  >
                    {child}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleOpen}
        aria-label={`Open ${title} card`}
        className="rounded-3xl dark:bg-neutral-900 h-full w-full overflow-hidden bg-gradient-to-t from-black/100 flex flex-col items-start justify-start relative z-10 text-left"
      >
        <motion.div
          className="absolute top-[70%] h-[30%] inset-x-0 z-10 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(to top, ${gradientColor}, transparent)` }}
          initial={{ opacity: 0.7 }}
        />
        <motion.div className="absolute bottom-4 z-20 text-center w-full">
          <motion.p className="text-white text-xl md:text-2xl font-bold px-6 mt-2 drop-shadow-md">{title}</motion.p>
        </motion.div>
        <BlurImage
          src={imageSrc}
          alt={imageAlt || title || "Card image"}
          fill
          className="absolute object-cover z-0 inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </motion.button>
    </>
  );
}