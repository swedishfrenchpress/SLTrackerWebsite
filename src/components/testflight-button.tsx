"use client";

import { motion } from "framer-motion";
import { easeInOutCubic } from "@/lib/animation";

interface TestFlightButtonProps {
  className?: string;
}

export function TestFlightButton({ className = "" }: TestFlightButtonProps) {
  return (
    <motion.a
      href="https://testflight.apple.com/join/PDQ96Zf7"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: easeInOutCubic }}
      className={`flex items-center gap-3 bg-secondary/30 backdrop-blur-md border border-border/50 text-foreground px-4 py-3 rounded-xl shadow-lg hover:bg-secondary/45 hover:border-border/70 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 transition-all duration-300 cursor-pointer ${className}`}
    >
      {/* TestFlight Icon */}
      <div className="flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/testflight-2020-09-25.webp"
          alt="TestFlight"
          className="w-8 h-8 rounded-md"
        />
      </div>

      {/* Text Content */}
      <div className="text-left">
        <div className="font-semibold text-sm text-muted-foreground">Test the Beta on</div>
        <div className="font-bold text-lg text-foreground">TestFlight</div>
      </div>
    </motion.a>
  );
}
