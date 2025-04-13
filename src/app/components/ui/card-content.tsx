"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface CardContentProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  className?: string;
}

export default function CardContent({
  title = "",
  description = "Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem.",
  imageSrc = "https://assets.aceternity.com/macbook.png",
  imageAlt = "Product image",
  backgroundColor = "bg-[#F5F5F7]",
  textColor = "text-neutral-600",
  headingColor = "text-neutral-700",
  className,
}: CardContentProps) {
  return (
    <motion.div
      data-lenis-prevent
      className={cn(backgroundColor, " rounded-3xl mb-10", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 15,
        },
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      {/* Image */}
      {imageSrc && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.4,
              duration: 0.5,
              type: "spring",
              damping: 20,
            },
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={500}
            width={900}
            className="md:w-[100vw] md:h-[100vh] h-full w-full mx-auto object-cover  mb-6"
          />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.1, duration: 0.3 },
        }}
      >
        <motion.p className="text-2xl md:text-4xl px-8  font-semibold text-neutral-700 mt-4 dark:text-white">{title}</motion.p>
      </motion.div>
      {/* Main Title + Description */}
      <motion.p className={cn(textColor, "text-base pt-2 md:text-xl font-sans max-w-3xl px-8")}>{description}</motion.p>

      {/* SubTitle */}
    </motion.div>
  );
}
