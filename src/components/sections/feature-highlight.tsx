/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/components/section";
import { easeOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageSrcAlt?: string;
  direction: "ltr" | "rtl";
}

function Feature({
  title,
  description,
  imageSrc,
  imageSrcAlt,
  direction,
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
    <div
      className={cn(
        "flex flex-col items-center justify-between pb-16",
        isLTR ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <motion.div
        className={cn(
          "w-full lg:w-1/2 mb-12 lg:mb-0",
          isLTR ? "lg:pr-12" : "lg:pl-12"
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <div className="flex flex-col gap-5 max-w-lg text-center lg:text-left mx-auto">
          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground"
            variants={itemVariants}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
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
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                src={imageSrc}
                alt={title}
                width={435}
                height={435}
                className="w-full rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
            </motion.div>
            {/* Small widget - front, overlapping bottom-right */}
            <motion.div
              className="absolute right-0 bottom-0 w-[50%] sm:w-[52%] z-10"
              initial={{ opacity: 0, y: 60, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              <img
                src={imageSrcAlt}
                alt=""
                width={435}
                height={435}
                className="w-full rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={title}
            width={499}
            height={1024}
            className="w-full max-w-[350px] mx-auto drop-shadow-2xl"
          />
        )}
      </div>
    </div>
  );
}

export function FeatureHighlight() {
  const features = siteConfig.featureHighlight;

  return (
    <Section
      id="feature-highlight"
      subtitle="Everything you need, nothing you don't"
      align="center"
      className="container px-10 mx-auto max-w-[var(--max-container-width)]"
    >
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </Section>
  );
}
