"use client";
import React, { useEffect, useRef, useState } from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { type ImageProps } from "next/image";

type CardProps = {
  category?: string;
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
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
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

export default function AppleStyledCard({ category, title, imageSrc, imageAlt, content, gradientColor = "rgba(0,0,0,0.8)" }: CardProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // In the useEffect for handling clicks outside
// In the useEffect for handling clicks outside
useEffect(() => {
  const listener = (event: MouseEvent | TouchEvent) => { // Changed from 'any'
    if (!containerRef.current || containerRef.current.contains(event.target as Node)) {
      return;
    }
    handleClose();
  };

  if (open) {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
  }

  return () => {
    document.removeEventListener("mousedown", listener);
    document.removeEventListener("touchstart", listener);
  };
}, [open]);
  // Handle clicks outside the modal
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current || containerRef.current.contains(event.target as Node)) {
        return;
      }
      handleClose();
    };

    if (open) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
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
          <div className="fixed inset-0  z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className=" backdrop-blur-lg  w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.4,
                },
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
                transition: { duration: 0.3 },
              }}
              ref={containerRef}
              className="max-w-5xl xl:mx-auto mx-6 bg-white shadow-2xl  dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative overflow-hidden"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.2 },
                }}
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.3 },
                }}
              >
              
                <motion.p className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white">{title}</motion.p>
              </motion.div>

              <motion.div
                className="py-10"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.2, duration: 0.4 },
                }}
              >
                {React.Children.map(content, (child, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.3 + i * 0.1,
                        duration: 0.5,
                        type: "spring",
                        damping: 20,
                      },
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
        className="rounded-3xl  dark:bg-neutral-900 h-full w-full overflow-hidden bg-gradient-to-t from-black/100 flex flex-col items-start justify-start relative z-10"
      >
        <motion.div
          className="absolute top-[70%] h-[30%] inset-x-0 z-100 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to top, ${gradientColor}, transparent)`,
          }}
          initial={{ opacity: 0.7 }}
        />
        <motion.div className="absolute  bottom-4 z-100 text-center w-full">
          <motion.p className="text-white text-xl md:text-2xl font-bold px-6 mt-2">{title}</motion.p>
        </motion.div>
        <BlurImage src={imageSrc} alt={imageAlt || title || "Card image"} fill className="absolute object-cover z-10 inset-0 transition-transform duration-700 ease-in-out" />
      </motion.button>
    </>
  );
}
