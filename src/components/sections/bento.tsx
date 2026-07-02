/* eslint-disable @next/next/no-img-element */
"use client";

import { PhoneFrame } from "@/components/phone-frame";
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
              "relative flex flex-col overflow-hidden bg-muted border border-border rounded-3xl shadow-lg",
              bentoItem.fullWidth && "md:col-span-2"
            )}
          >
            <div className="flex flex-col space-y-4 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 text-foreground tracking-tight leading-tight">
                {bentoItem.title}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {bentoItem.content}
              </p>
            </div>
            {/* Phone peeks up from the bottom, clipped by the card's rounded edge */}
            <div
              className={cn(
                "relative mt-auto",
                bentoItem.fullWidth ? "h-72 sm:h-80" : "h-64 sm:h-72"
              )}
            >
              <PhoneFrame
                src={bentoItem.imageSrc}
                alt={bentoItem.imageAlt}
                className={cn(
                  "absolute left-1/2 top-5 -translate-x-1/2",
                  bentoItem.fullWidth
                    ? "w-[46%] sm:w-[34%]"
                    : "w-[68%] sm:w-[62%]"
                )}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
