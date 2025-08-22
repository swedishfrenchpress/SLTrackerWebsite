"use client";

import { easeInOutCubic } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { forwardRef, useRef } from "react";

interface SectionProps {
  id?: string;
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

    const { scrollYProgress } = useScroll({
      target: ref as React.RefObject<HTMLElement>,
      offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0, 1], {
      ease: easeInOutCubic,
    });
    const y = useTransform(scrollYProgress, [0, 0.05, 0.1], [30, 30, 0], {
      ease: easeInOutCubic,
    });

    return (
      <section id={id || sectionId} ref={ref}>
        <div className={cn("sm:py-24 py-16", className)}>
          {(title || subtitle || description) && (
            <div className={cn(alignmentClass, "space-y-6 pb-16 mx-auto")}>
              {title && (
                <motion.h2
                  className="text-lg sm:text-xl text-primary text-balance font-mono font-bold tracking-widest uppercase"
                  style={{ opacity, y }}
                >
                  {title}
                </motion.h2>
              )}

              {subtitle && (
                <motion.h3
                  className={cn(
                    "mx-0 mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-balance font-black leading-[0.9] tracking-tight text-foreground lowercase",
                    align === "center"
                      ? "mx-auto"
                      : align === "right"
                      ? "ml-auto"
                      : ""
                  )}
                  style={{ opacity, y }}
                >
                  {subtitle}
                </motion.h3>
              )}
              {description && (
                <motion.p
                  className={cn(
                    "mt-8 text-xl sm:text-2xl leading-relaxed text-muted-foreground/90 text-balance max-w-3xl font-medium",
                    align === "center"
                      ? "mx-auto"
                      : align === "right"
                      ? "ml-auto"
                      : ""
                  )}
                  style={{ opacity, y }}
                >
                  {description}
                </motion.p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export { Section };
