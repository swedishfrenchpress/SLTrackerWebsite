"use client";

import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { TestFlightButton } from "@/components/testflight-button";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll({
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollY, [0, 300], [50, 0]);
  const y2 = useTransform(scrollY, [0, 300], [0, 0]);
  const y3 = useTransform(scrollY, [0, 300], [50, 0]);

  return (
    <Section id="hero" className="min-h-screen w-full overflow-hidden relative">
      {/* Background gradient for more impact */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      
      <main className="relative z-10 mx-auto pt-8 sm:pt-12 md:pt-16 text-center px-4">

        {/* App Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: easeInOutCubic }}
          className="flex justify-center mb-8"
        >
          <img
            src="/appicon.png"
            alt="SL Tracker App Icon"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-[8px] shadow-lg"
          />
        </motion.div>

        {/* Main headline */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeInOutCubic }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 tracking-tight leading-none text-foreground"
          >
            {siteConfig.description}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeInOutCubic }}
            className="max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-12 font-medium text-muted-foreground/90 leading-relaxed"
          >
                          SL Tracker shows the next departures. Nothing more, nothing less.
          </motion.p>
          
          {/* TestFlight button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeInOutCubic }}
            className="flex justify-center mb-12 sm:mb-16 md:mb-20"
          >
            <TestFlightButton className="scale-125 sm:scale-150 md:scale-175" />
          </motion.div>
        </div>

        {/* Large iPhone showcase */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 h-auto min-h-[400px] sm:min-h-[600px] lg:min-h-[800px] select-none">
            {/* Left iPhone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
              className="relative"
            >
              <motion.img
                src="/Device-1.png"
                alt="SL Tracker iPhone"
                style={{ y: y1 }}
                className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto flex-shrink-0 drop-shadow-2xl"
              />
            </motion.div>

            {/* Center iPhone (largest) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeInOut" }}
              className="relative z-10"
            >
              <motion.img
                src="/Device-2.png"
                alt="SL Tracker iPhone"
                style={{ y: y2 }}
                className="w-56 sm:w-72 md:w-96 lg:w-[28rem] h-auto flex-shrink-0 drop-shadow-2xl"
              />
            </motion.div>

            {/* Right iPhone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
              className="relative"
            >
              <motion.img
                src="/Device-3.png"
                alt="SL Tracker iPhone"
                style={{ y: y3 }}
                className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto flex-shrink-0 drop-shadow-2xl"
              />
            </motion.div>
          </div>

          
        </div>
      </main>
    </Section>
  );
}
