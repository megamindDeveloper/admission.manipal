"use client";

import { LazyMotion, domAnimation } from "motion/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
