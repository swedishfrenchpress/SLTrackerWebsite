"use client";

import { Icons } from "@/components/icons";
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
      const currentScrollY = window.scrollY;
      setAddBorder(currentScrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: easeInOutCubic,
      }}
      className={cn("sticky top-0 z-50 p-0 bg-background/60 backdrop-blur")}
    >
      <div className="flex items-center container mx-auto px-4 py-3">
        <Link
          href="/"
          title="brand-logo"
          className="flex items-center space-x-3"
        >
          <img 
            src="/appicon.png" 
            alt="SL Tracker App Icon" 
            className="w-8 h-8 rounded-[4px]"
          />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </Link>
      </div>
      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: addBorder ? 1 : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute w-full bottom-0"
      />
    </motion.header>
  );
}
