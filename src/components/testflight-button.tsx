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
      className={`flex items-center gap-3 bg-gray-900/30 backdrop-blur-md border border-gray-600/50 text-foreground px-4 py-3 rounded-xl shadow-lg hover:bg-gray-900/45 hover:border-gray-600/70 transition-all duration-300 cursor-pointer ${className}`}
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
        <div className="font-semibold text-sm text-muted-foreground">Test the Beta on</div>
        <div className="font-bold text-lg text-foreground">TestFlight</div>
      </div>
    </motion.button>
  );
}
