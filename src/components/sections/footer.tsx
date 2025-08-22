import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden">
          {/* Brand Section */}
          <div className="text-left mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2">
                <img 
                  src="/appicon.png" 
                  alt="SL Tracker App Icon" 
                  className="w-8 h-8 rounded-[4px]"
                />
              </div>
              <span className="text-xl font-bold text-foreground">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A simpler way to check the Tunnelbana
            </p>
            <div className="flex space-x-4 mb-6">
              <Link 
                href="https://twitter.com/uxerik_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link 
                href="https://primal.net/erik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
              >
                <img src="/nostr.svg" alt="Nostr" className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Mobile Links - Horizontal */}
          <div className="flex space-x-8 mb-6">
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2 text-sm">PRODUCT</h3>
              <Link 
                href="https://github.com/swedishfrenchpress/SLTracker" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
              >
                Source Code
              </Link>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2 text-sm">LEGAL</h3>
              <Link 
                href="/terms" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2">
                <img 
                  src="/appicon.png" 
                  alt="SL Tracker App Icon" 
                  className="w-8 h-8 rounded-[4px]"
                />
              </div>
              <span className="text-xl font-bold text-foreground">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              A simpler way to check the Tunnelbana
            </p>
            <div className="flex space-x-4">
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
              <Link 
                href="https://primal.net/erik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <img src="/nostr.svg" alt="Nostr" className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://github.com/swedishfrenchpress/SLTracker" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Source Code
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-sm text-foreground px-4">
            SL Tracker was lovingly made by{" "}
            <a 
              href="https://www.erik.day/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 underline decoration-primary/30 hover:decoration-primary/50"
            >
              Erik
            </a>{" "}
            in Stockholm. ❤️‍🔥
          </p>
          <p className="text-sm text-muted-foreground px-4 mt-2">
            {siteConfig.name} is open source and free software. No copyright restrictions. Long live free software!
          </p>
        </div>
      </div>
    </footer>
  );
}
