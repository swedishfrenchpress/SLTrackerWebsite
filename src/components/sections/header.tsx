"use client";

import { Icons } from "@/components/icons";
import { easeInOutCubic } from "@/lib/animation";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [addBorder, setAddBorder] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY);
      setAddBorder(currentScrollY > 20);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Set isInitialLoad to false after the component has mounted
    setIsInitialLoad(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start(isVisible ? "visible" : "hidden");
  }, [isVisible, controls]);

  const headerVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial="hidden"
          animate={controls}
          exit="hidden"
          variants={headerVariants}
          transition={{
            duration: isInitialLoad ? 1 : 0.3,
            delay: isInitialLoad ? 0.5 : 0,
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
      )}
    </AnimatePresence>
  );
}
