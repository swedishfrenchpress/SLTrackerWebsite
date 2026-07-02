"use client";

import { Section } from "@/components/section";
import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export function OnboardingDemo() {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(frameRef, { amount: 0.35 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView && !reduce) {
      // React drops the `muted` attribute during SSR (facebook/react#10389);
      // set it imperatively so play() satisfies autoplay policies.
      video.muted = true;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, reduce]);

  return (
    <Section
      id="onboarding-demo"
      title="Getting started"
      subtitle="Set up in seconds"
      description="Search a station, pin it, add the widget. That's the whole setup."
      align="center"
      className="container px-10 mx-auto max-w-[var(--max-container-width)]"
    >
      <div ref={frameRef} className="flex justify-center">
        <div className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[720/1566] rounded-3xl overflow-hidden border border-border/30 shadow-2xl bg-muted">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            poster="/onboarding-poster.webp"
            controls={!!reduce}
            className="absolute inset-0 h-full w-full object-cover"
            aria-label="Screen recording of SL Tracker's onboarding: a welcome screen, pinning a station, and adding the home-screen widget"
          >
            <source src="/onboarding-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </Section>
  );
}
