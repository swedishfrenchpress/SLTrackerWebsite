"use client";

import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAddBorder(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: easeInOutCubic }}
      className={cn(
        "sticky top-0 z-50 bg-background transition-shadow",
        addBorder && "border-b border-border shadow-sm"
      )}
    >
      <div className="flex items-center justify-between container mx-auto px-4 py-3">
        <Link
          href="/"
          aria-label="SL Tracker home"
          className="flex items-center space-x-3 rounded-md focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/appicon.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-[4px]"
          />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </Link>

        <a
          href="https://testflight.apple.com/join/PDQ96Zf7"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-primary/20 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 transition-colors"
        >
          Get the app
        </a>
      </div>
    </motion.header>
  );
}
