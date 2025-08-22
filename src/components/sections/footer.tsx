"use client";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 relative overflow-hidden">
      {/* Subtle static blue gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-blue-500/5 via-blue-500/2 to-transparent blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-10 relative z-10">
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="flex items-center justify-center space-x-3 mb-1">
              <motion.div 
                className="p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="/appicon.png" 
                  alt="SL Tracker App Icon" 
                  className="w-8 h-8 rounded-[4px] shadow-sm"
                />
              </motion.div>
              <span className="text-xl font-bold text-foreground">{siteConfig.name}</span>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground mb-3"
            >
              A simpler way to check the Tunnelbana
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-6"
            >
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link 
                  href="https://twitter.com/uxerik_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 block"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link 
                  href="https://primal.net/erik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 block"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 620 620">
                    <path d="M499.839 38.75H120.146C75.1931 38.75 38.75 75.1931 38.75 120.146V499.839C38.75 544.802 75.1983 581.25 120.161 581.25H499.839C544.802 581.25 581.25 544.802 581.25 499.839V120.161C581.25 75.1983 544.802 38.75 499.839 38.75ZM247.282 169.686C247.282 169.686 247.277 169.697 247.271 169.699L231.826 170.748C197.38 172.146 195.615 176.697 195.615 189.996V430.073C195.615 443.721 197.38 447.922 231.826 449.673L247.271 450.373C247.271 450.373 247.282 450.378 247.282 450.383V464.987C247.282 464.987 247.277 465 247.269 465H183.492C164.698 465 155 452.925 155 438.035V181.998C155 167.087 164.716 155 183.533 155H247.266C247.266 155 247.282 155.008 247.282 155.015V169.686ZM465 438.035C465 452.928 455.302 465 436.508 465H372.731C372.731 465 372.718 464.995 372.718 464.987V450.316C372.718 450.316 372.723 450.303 372.731 450.303L388.174 449.603C422.62 447.854 424.385 443.651 424.385 430.004V189.927C424.385 176.628 422.62 172.078 388.174 170.678L372.731 169.629C372.731 169.629 372.718 169.622 372.718 169.614V155.013C372.718 155.013 372.723 155 372.731 155H436.467C455.282 155 465 167.087 465 181.998V438.035Z"/>
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link 
                  href="https://github.com/swedishfrenchpress/SLTracker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 block"
                >
                  <Icons.github className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden md:grid md:grid-cols-1 gap-4">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1 text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-2">
              <motion.div 
                className="p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="/appicon.png" 
                  alt="SL Tracker App Icon" 
                  className="w-8 h-8 rounded-[4px] shadow-sm"
                />
              </motion.div>
              <span className="text-xl font-bold text-foreground">{siteConfig.name}</span>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground mb-3"
            >
              A simpler way to check the Tunnelbana
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-6"
            >
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link 
                  href="https://twitter.com/uxerik_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link 
                  href="https://primal.net/erik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 620 620">
                    <path d="M499.839 38.75H120.146C75.1931 38.75 38.75 75.1931 38.75 120.146V499.839C38.75 544.802 75.1983 581.25 120.161 581.25H499.839C544.802 581.25 581.25 544.802 581.25 499.839V120.161C581.25 75.1983 544.802 38.75 499.839 38.75ZM247.282 169.686C247.282 169.686 247.277 169.697 247.271 169.699L231.826 170.748C197.38 172.146 195.615 176.697 195.615 189.996V430.073C195.615 443.721 197.38 447.922 231.826 449.673L247.271 450.373C247.271 450.373 247.282 450.378 247.282 450.383V464.987C247.282 464.987 247.277 465 247.269 465H183.492C164.698 465 155 452.925 155 438.035V181.998C155 167.087 164.716 155 183.533 155H247.266C247.266 155 247.282 155.008 247.282 155.015V169.686ZM465 438.035C465 452.928 455.302 465 436.508 465H372.731C372.731 465 372.718 464.995 372.718 464.987V450.316C372.718 450.316 372.723 450.303 372.731 450.303L388.174 449.603C422.62 447.854 424.385 443.651 424.385 430.004V189.927C424.385 176.628 422.62 172.078 388.174 170.678L372.731 169.629C372.731 169.629 372.718 169.622 372.718 169.614V155.013C372.718 155.013 372.723 155 372.731 155H436.467C455.282 155 465 167.087 465 181.998V438.035Z"/>
                  </svg>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link 
                  href="https://github.com/swedishfrenchpress/SLTracker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icons.github className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border/40 mt-4 sm:mt-6 pt-4 sm:pt-6 text-center"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-foreground px-4 mb-2"
          >
            SL Tracker was lovingly made by{" "}
            <motion.a 
              href="https://www.erik.day/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 underline decoration-primary/30 hover:decoration-primary/50"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Erik
            </motion.a>{" "}
            in Stockholm. ❤️‍🔥
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground px-4 mb-3"
          >
            {siteConfig.name} is open source and free software. No copyright restrictions. Long live free software!
          </motion.p>
          {/* Terms of Service - Centered and darker */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-3"
          >
            <div className="flex justify-center space-x-6">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link 
                  href="/terms" 
                  className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link 
                  href="/privacy" 
                  className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
