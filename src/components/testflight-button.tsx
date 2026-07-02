"use client";

import { motion } from "framer-motion";
import { easeInOutCubic } from "@/lib/animation";
import { cn } from "@/lib/utils";

interface TestFlightButtonProps {
  className?: string;
  /** Larger hero treatment vs. the compact nav/footer size. */
  size?: "default" | "lg";
}

export function TestFlightButton({
  className = "",
  size = "default",
}: TestFlightButtonProps) {
  return (
    <motion.a
      href="https://testflight.apple.com/join/PDQ96Zf7"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: easeInOutCubic }}
      className={cn(
        "inline-flex items-center gap-3 rounded-xl bg-primary font-semibold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 transition-colors cursor-pointer",
        size === "lg" ? "px-7 py-4 text-lg" : "px-5 py-3 text-base",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/testflight-2020-09-25.webp"
        alt=""
        width={32}
        height={32}
        className={cn("rounded-md", size === "lg" ? "w-8 h-8" : "w-6 h-6")}
      />
      <span>Download on TestFlight</span>
    </motion.a>
  );
}
