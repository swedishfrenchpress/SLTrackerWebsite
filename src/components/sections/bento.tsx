/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function BentoGrid() {
  return (
    <Section
      id="bento"
      subtitle="Why I built SL Tracker"
      align="center"
      className="mx-auto max-w-screen-md px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {siteConfig.bento.map((bentoItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: easeInOutCubic,
            }}
            className={cn(
              "bg-muted border border-border p-6 sm:p-8 !pb-0 rounded-3xl grid grid-rows-1 shadow-lg",
              bentoItem.fullWidth && "md:col-span-2"
            )}
          >
            <div className="flex flex-col space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 text-foreground tracking-tight leading-tight">
                {bentoItem.title}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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
                width={900}
                height={1809}
                className="w-full h-64 sm:h-96 rounded-xl object-cover object-top shadow-xl"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
