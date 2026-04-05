/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useRef, useState } from "react";

function ThemeComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(5, Math.min(95, x)));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSliderPosition((prev) => Math.max(5, prev - 5));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSliderPosition((prev) => Math.min(95, prev + 5));
      }
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto aspect-[390/844] rounded-3xl overflow-hidden border border-border/30 shadow-2xl select-none"
    >
      {/* Dark mode image (base layer) */}
      <img
        src="/dark-mode.PNG"
        alt="SL Tracker in dark mode"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Light mode image (clipped overlay) */}
      <img
        src="/light-mode.PNG"
        alt="SL Tracker in light mode"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        draggable={false}
      />

      {/* Labels */}
      <div
        className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs font-medium text-white/90 transition-opacity duration-200"
        style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
      >
        Dark
      </div>
      <div
        className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/60 backdrop-blur-sm text-xs font-medium text-black/80 transition-opacity duration-200"
        style={{ opacity: sliderPosition < 85 ? 1 : 0 }}
      >
        Light
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/60"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Drag handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
        style={{ left: `${sliderPosition}%`, touchAction: "none" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-label="Theme comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        tabIndex={0}
      >
        <div className="w-11 h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing backdrop-blur-sm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-black/60"
          >
            <path
              d="M5 3L2 8L5 13M11 3L14 8L11 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ThemeShowcase() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0, 1], {
    ease: easeInOutCubic,
  });
  const y = useTransform(scrollYProgress, [0, 0.1, 0.3], [100, 100, 0], {
    ease: easeInOutCubic,
  });

  return (
    <Section
      id="theme-showcase"
      title="Appearance"
      subtitle="Your theme, your way"
      description="SL Tracker adapts to your style with full dark mode and light mode support."
      align="center"
      className="container px-10 mx-auto max-w-[var(--max-container-width)]"
      ref={ref}
    >
      <motion.div style={{ opacity, y }} className="flex justify-center">
        <ThemeComparisonSlider />
      </motion.div>
    </Section>
  );
}
