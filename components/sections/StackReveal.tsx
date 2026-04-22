"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function StackReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.15"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });

  // Starts slightly scaled down and grows to full size as it enters
  const scale = useTransform(smoothProgress, [0, 1], [0.96, 1]);
  // Top corners go from rounded to square as it fully covers the sticky section
  const borderRadius = useTransform(smoothProgress, [0, 1], [20, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        transformOrigin: "bottom center",
      }}
    >
      {children}
    </motion.div>
  );
}
