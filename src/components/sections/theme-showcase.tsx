/* eslint-disable @next/next/no-img-element */
"use client";

import { Section } from "@/components/section";
import { easeInOutCubic } from "@/lib/animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useRef, useState } from "react";

// Horizontal slant of the diagonal divider, in percentage points from the
// midpoint. The line runs from (position - SLANT) at the top to
// (position + SLANT) at the bottom.
const SLANT = 14;

function ThemeComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isPressed, setIsPressed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // Coalesce rapid pointer events into a single update per animation frame so
  // we don't recompute the clip-path more often than the browser can paint.
  const handleMove = useCallback((clientX: number) => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.max(5, Math.min(95, x)));
    });
  }, []);

  // Follow the pointer: on mouse this tracks plain hover; on touch/pen it only
  // tracks while the surface is pressed, so vertical page scrolling still works.
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === "mouse" || isPressed) handleMove(e.clientX);
    },
    [isPressed, handleMove]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsPressed(true);
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const handlePointerUp = useCallback(() => {
    setIsPressed(false);
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

  const topX = sliderPosition - SLANT;
  const bottomX = sliderPosition + SLANT;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto aspect-[390/844] rounded-3xl overflow-hidden border border-border/30 shadow-2xl select-none cursor-ew-resize"
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* Dark mode image (base layer) */}
      <img
        src="/dark-mode.PNG"
        alt="SL Tracker in dark mode"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Light mode image (clipped overlay, revealed on the right of the diagonal) */}
      <img
        src="/light-mode.PNG"
        alt="SL Tracker in light mode"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: `polygon(${topX}% 0, 100% 0, 100% 100%, ${bottomX}% 100%)`,
        }}
        draggable={false}
      />

      {/* Diagonal divider line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1={topX}
          y1={0}
          x2={bottomX}
          y2={100}
          stroke="white"
          strokeOpacity={0.6}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Handle — sits on the diagonal at the vertical midpoint */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
        style={{ left: `${sliderPosition}%` }}
        onKeyDown={handleKeyDown}
        role="slider"
        aria-label="Theme comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        tabIndex={0}
      >
        <div className="w-11 h-11 rounded-full bg-white/90 shadow-lg flex items-center justify-center backdrop-blur-sm">
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
