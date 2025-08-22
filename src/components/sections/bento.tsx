/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function BentoGrid() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacities = [
    useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1], {
      ease: easeInOutCubic,
    }),
    useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, 1], {
      ease: easeInOutCubic,
    }),
    useTransform(scrollYProgress, [0, 0.3, 0.5], [0, 0, 1], {
      ease: easeInOutCubic,
    }),
  ];

  const yTransforms = [
    useTransform(scrollYProgress, [0, 0.1, 0.3], [100, 100, 0], {
      ease: easeInOutCubic,
    }),
    useTransform(scrollYProgress, [0, 0.2, 0.4], [100, 100, 0], {
      ease: easeInOutCubic,
    }),
    useTransform(scrollYProgress, [0, 0.3, 0.5], [100, 100, 0], {
      ease: easeInOutCubic,
    }),
  ];

  return (
    <Section
      id="bento"
      title="About"
      subtitle="Built for Stockholm train riders"
      align="center"
      className="mx-auto max-w-screen-md px-10"
      ref={ref}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {siteConfig.bento.map((bentoItem, index) => (
          <motion.div
            key={index}
            style={{ opacity: opacities[index], y: yTransforms[index] }}
            className={cn(
              "bg-muted/60 backdrop-blur-sm p-6 sm:p-8 !pb-0 rounded-3xl grid grid-rows-1 border border-border/20 shadow-lg",
              bentoItem.fullWidth && "md:col-span-2"
            )}
          >
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 text-foreground tracking-tight leading-tight">
                {bentoItem.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground/90 leading-relaxed font-medium">
                {bentoItem.content}
              </p>
            </div>
            <div
              className={cn(
                "flex justify-center mt-6",
                bentoItem.fullWidth && "sm:space-x-4"
              )}
            >
              <img
                src={bentoItem.imageSrc}
                alt={bentoItem.imageAlt}
                className="w-full h-64 sm:h-96 rounded-xl object-cover object-top shadow-xl"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
