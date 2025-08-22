"use client";

import { motion } from "framer-motion";
import { easeInOutCubic } from "@/lib/animation";

interface TestFlightButtonProps {
  className?: string;
}

export function TestFlightButton({ className = "" }: TestFlightButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: easeInOutCubic }}
      className={`flex items-center gap-3 bg-white text-black px-4 py-2 rounded-md shadow-lg hover:shadow-xl transition-all duration-200 ${className}`}
      onClick={() => {
        window.open("https://testflight.apple.com/join/PDQ96Zf7", "_blank", "noopener,noreferrer");
      }}
    >
      {/* TestFlight Icon */}
      <div className="flex-shrink-0">
        <img
          src="/testflight-2020-09-25.webp"
          alt="TestFlight"
          className="w-8 h-8 rounded-md"
        />
      </div>
      
      {/* Text Content */}
      <div className="text-left">
        <div className="font-semibold text-sm">Test the Beta on</div>
        <div className="font-bold text-lg">TestFlight</div>
      </div>
    </motion.button>
  );
}
