"use client";

import { easeInOutCubic } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { forwardRef, useRef } from "react";

interface SectionProps {
  id?: string;
  /** Used for the section anchor id; no longer rendered as an eyebrow. */
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { id, title, subtitle, description, children, className, align },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = forwardedRef || internalRef;

    const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id;
    const alignmentClass =
      align === "left"
        ? "text-left"
        : align === "right"
        ? "text-right"
        : "text-center";

    return (
      <section id={id || sectionId} ref={ref}>
        <div className={cn("sm:py-24 py-16", className)}>
          {(subtitle || description) && (
            <motion.div
              className={cn(alignmentClass, "space-y-4 pb-14 mx-auto")}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: easeInOutCubic }}
            >
              {subtitle && (
                <h2
                  className={cn(
                    "max-w-3xl text-3xl sm:text-4xl md:text-5xl text-balance font-bold tracking-tight text-foreground",
                    align === "center"
                      ? "mx-auto"
                      : align === "right"
                      ? "ml-auto"
                      : ""
                  )}
                >
                  {subtitle}
                </h2>
              )}
              {description && (
                <p
                  className={cn(
                    "text-lg sm:text-xl leading-relaxed text-muted-foreground text-balance max-w-2xl",
                    align === "center"
                      ? "mx-auto"
                      : align === "right"
                      ? "ml-auto"
                      : ""
                  )}
                >
                  {description}
                </p>
              )}
            </motion.div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
