"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

interface AppStoreButtonProps {
  className?: string;
  /** Larger hero treatment vs. the compact nav/footer size. */
  size?: "default" | "lg";
}

export function AppStoreButton({
  className = "",
  size = "default",
}: AppStoreButtonProps) {
  return (
    <motion.a
      href={siteConfig.links.appStore}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download SL Tracker on the App Store"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group relative inline-flex items-center rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-4",
        className
      )}
    >
      {/* Soft glow */}
      <span
        aria-hidden
        className="absolute -inset-2 -z-10 rounded-[24px] bg-primary opacity-15 blur-lg"
      />

      <span
        className={cn(
          "overflow-hidden rounded-xl shadow-[0_8px_28px_-6px] shadow-primary/30 transition-shadow duration-300 group-hover:shadow-primary/50"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/download-white.svg"
          alt=""
          width={120}
          height={40}
          className={cn("block w-auto", size === "lg" ? "h-20" : "h-14")}
        />
      </span>
    </motion.a>
  );
}
