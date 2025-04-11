"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: React.ReactNode;
    name: string;
    title: string;
    profile: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const bgColors = [
    "#b3eacc", // 1st item
    "#2d9bf1", // 2nd item
    "#fdf4c5", // 3rd item
    "#e2d2ed", // 4th item
    "#ffecf6", // 5th item
  ];
  const textColors = [
    "#21130d", // 1st item
    "#ffffff", // 2nd item
    "#21130d", // 3rd item
    "#21130d", // 4th item
    "#21130d", // 5th item
  ];
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl overflow-hidden", className)}
      style={
        {
          // Inline styles to ensure CSS variables are applied
          "--animation-duration": speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
          "--animation-direction": direction === "left" ? "forwards" : "reverse",
        } as React.CSSProperties
      }
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative md:w-[310px] sm:w-[300px] w-[300px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 px-8 py-6 dark:border-zinc-700 bg-opacity-20 flex flex-col justify-between"
            key={item.name}
            style={{
              backgroundColor: bgColors[idx % bgColors.length],
              color: textColors[idx % textColors.length],
            }}
          >
            <blockquote>
              <span className="relative z-20 font-normal text-[20px] dark:text-gray-100">{item.quote}</span>
            </blockquote>

            <div className="mt-[50px] flex items-start gap-4">
              <Image alt={item.name} src={item.profile} width={50} height={50} className="w-16 h-16 object-cover rounded-full shadow-md flex-shrink-0" />

              <div className="flex flex-col gap-1">
                <span className="text-xl font-extrabold leading-tight">{item.name}</span>
                {/* <span className="text-lg font-normal leading-tight">{item.title}</span> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
