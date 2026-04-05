/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { easeOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageSrcAlt?: string;
  direction: "ltr" | "rtl";
  isActive: boolean;
}

function Feature({
  title,
  description,
  imageSrc,
  imageSrcAlt,
  direction,
  isActive,
}: FeatureProps) {
  const isLTR = direction === "ltr";
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeOutCubic,
      },
    },
  };

  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-between pb-16 transition-all duration-500 ease-out",
        isLTR ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <motion.div
        className={cn(
          "w-full lg:w-1/2 mb-12 lg:mb-0",
          isLTR ? "lg:pr-12" : "lg:pl-12"
        )}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={textVariants}
      >
        <div className="flex flex-col gap-6 max-w-lg text-center lg:text-left mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-none text-foreground"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground/90 leading-relaxed font-medium" 
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
      <div className="w-full lg:w-1/2">
        {imageSrcAlt ? (
          <div className="relative w-full max-w-[400px] mx-auto h-[350px] sm:h-[420px]">
            {/* Large widget - back, slightly left and up */}
            <motion.div
              className="absolute left-0 top-0 w-[65%] sm:w-[70%]"
              initial={{ opacity: 0, y: 40, rotate: -3 }}
              animate={
                isActive
                  ? { opacity: 1, y: 0, rotate: -3 }
                  : { opacity: 0, y: 40, rotate: -3 }
              }
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                src={imageSrc}
                alt={`${title} - large widget`}
                className="w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
            {/* Small widget - front, overlapping bottom-right */}
            <motion.div
              className="absolute right-0 bottom-0 w-[50%] sm:w-[52%] z-10"
              initial={{ opacity: 0, y: 60, rotate: 3 }}
              animate={
                isActive
                  ? { opacity: 1, y: 0, rotate: 3 }
                  : { opacity: 0, y: 60, rotate: 3 }
              }
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              <img
                src={imageSrcAlt}
                alt={`${title} - small widget`}
                className="w-full rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={title}
            className="w-full max-w-[350px] mx-auto drop-shadow-2xl"
          />
        )}
      </div>
    </motion.div>
  );
}

export function FeatureHighlight() {
  const features = siteConfig.featureHighlight;

  const [activeFeature, setActiveFeature] = useState(-1);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const { top, bottom } = container.getBoundingClientRect();
        const middleOfScreen = window.innerHeight / 2;
        const featureHeight = (bottom - top) / features.length;

        const activeIndex = Math.floor((middleOfScreen - top) / featureHeight);
        setActiveFeature(
          Math.max(-1, Math.min(features.length - 1, activeIndex))
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [features.length]);

  return (
    <Section
      id="feature-highlight"
      title="Features"
      subtitle="Simple Features"
      align="center"
      className="container px-10 mx-auto max-w-[var(--max-container-width)]"
      ref={containerRef}
    >
      {features.map((feature, index) => (
        <Feature key={index} isActive={activeFeature === index} {...feature} />
      ))}
    </Section>
  );
}
