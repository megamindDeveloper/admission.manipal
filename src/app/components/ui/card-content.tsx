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
      className={cn(backgroundColor, "p-8 md:p-14 rounded-3xl mb-4", className)}
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
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            height={500}
            width={900}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mb-6"
          />
        </motion.div>
      )}
      <motion.p className={cn(textColor, "dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto")}>
        {title && (
          <motion.span
            className={cn("font-bold", headingColor, "dark:text-neutral-200")}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.3 },
            }}
          >
            {title}
          </motion.span>
        )}{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.3 },
          }}
        >
          {description}
        </motion.span>
      </motion.p>
    </motion.div>
  );
}
