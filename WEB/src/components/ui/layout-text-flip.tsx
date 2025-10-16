"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Future", "Hope", "Education"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.span
        layoutId="subtext"
        className="text-center text-white font-semibold text-4xl sm:text-3xl md:text-5xl lg:text-6xl text-pretty font-serif px-4 mb-4"
      >
        {text}
      </motion.span>

      {/* Fixed width container - adjust min-w as needed */}
      <motion.div
        layout
        style={{
          backgroundColor: "var(--brand-yellow)",
          color: "var(--on-brand)",
        }}
        className="relative w-fit min-w-[220px] max-w-full mx-auto overflow-hidden my-2 rounded-md border text-pretty font-serif border-transparent bg-white px-4 py-2 text-2xl font-bold tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg md:text-4xl dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10 flex items-center justify-center"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)", opacity: 0 }}
            animate={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            className={cn(
              "inline-block whitespace-nowrap text-center w-full"
            )}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};