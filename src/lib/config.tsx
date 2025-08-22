import {
  BellIcon,
  BrainIcon,
  CalendarIcon,
  ClockIcon,
  CloudIcon,
  UsersIcon,
  SearchIcon,
  ZapIcon,
  SmartphoneIcon,
  TrainIcon,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "SL Tracker",
  description: "A simpler way to check the Tunnelbana",
  cta: "Test the beta on TestFlight",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "SL Tracker",
    "Stockholm Train",
    "Tunnelbana",
    "Public Transport",
    "Train App",
    "Live Departures",
  ],
  links: {
    email: "ghostsock@proton.me",
    twitter: "https://twitter.com/uxerik_",
    github: "https://github.com/swedishfrenchpress/SLTracker",
  },
  features: [
    {
      name: "Instant Search",
      description:
        "Type a station name and see the next trains immediately.",
      icon: <SearchIcon className="h-6 w-6" />,
    },
    {
      name: "No Clutter",
      description:
        "Just departures, no ads, no tracking - clean and simple.",
      icon: <ZapIcon className="h-6 w-6" />,
    },
    {
      name: "Widget Ready",
      description:
        "Pin your station and see the next 3 trains right from your home screen.",
      icon: <SmartphoneIcon className="h-6 w-6" />,
    },
    {
      name: "Fast & Lightweight",
      description: "Loads quickly, built with SwiftUI, powered by the official SL Transport API.",
      icon: <TrainIcon className="h-6 w-6" />,
    },
    {
      name: "Live Updates",
      description: "Real-time departure information from the official SL Transport API.",
      icon: <ClockIcon className="h-6 w-6" />,
    },
    {
      name: "Offline Support",
      description:
        "View your saved stations and recent departures even without internet.",
      icon: <CloudIcon className="h-6 w-6" />,
    },
  ],
  featureHighlight: [
    {
      title: "Widget Ready",
      description:
        "Your next departures on the home screen, no app opening required.",
      imageSrc: "/Device-5.png",
      direction: "rtl" as const,
    },
    {
      title: "Pin favorites",
      description:
        "Your most-used stations, ready the moment you open the app.",
      imageSrc: "/Device-6.png",
      direction: "ltr" as const,
    },
    {
      title: "Official SL data",
      description:
        "All times come from the official SL Transport API.",
      imageSrc: "/Device-7.png",
      direction: "rtl" as const,
    },
  ],
  bento: [
    {
      title: "The Problem",
      content:
        "Too often I’d arrive at the station just as the train was leaving and end up waiting ten minutes for the next one. The official SL app could solve this, but it’s slow, cluttered, and doesn’t support widgets, so I built my own.",
      imageSrc: "/Device-4.png",
      imageAlt: "Problem illustration - cluttered interface",
      fullWidth: true,
    },
    {
      title: "The Solution",
      content:
        " A clean, fast app that does one thing perfectly: shows you next train departures. No distractions. No unnecessary features.",
      imageSrc: "/Device-1.png",
      imageAlt: "Solution illustration - clean interface",
      fullWidth: false,
    },
    {
      title: "The Result",
      content:
        "A a minimal, clutter-free SL tracking app that makes it easy to know exactly when to leave for the station.",
      imageSrc: "/Device-3.png",
      imageAlt: "Result illustration - efficient workflow",
      fullWidth: false,
    },
  ],


  faqs: [
    {
      question: "How does SL Tracker get live departure information?",
      answer: (
        <span>
          SL Tracker connects directly to the official SL Transport API to provide
          real-time departure information. This ensures you get the most accurate
          and up-to-date train times available.
        </span>
      ),
    },
    {
      question: "Can I use SL Tracker offline?",
      answer: (
        <span>
          Yes, SL Tracker supports offline viewing of your saved stations and
          recent departure information. However, live updates require an internet
          connection to fetch the latest data from the SL API.
        </span>
      ),
    },
    {
      question: "How do the home screen widgets work?",
      answer: (
        <span>
          You can pin your favorite train station to your home screen as a widget.
          The widget shows the next 3 departures and updates automatically, so you
          can check times without opening the app.
        </span>
      ),
    },
    {
      question: "Is my data secure with SL Tracker?",
      answer: (
        <span>
          Yes. SL Tracker doesn&apos;t track your location
          or any personal data. You only store your favorite stations locally
          on your device and connect to the official SL API for departure times.
        </span>
      ),
    },
    {
      question: "Does SL Tracker work for all SL transport?",
      answer: (
        <span>
          Currently, SL Tracker focuses specifically on the Stockholm train
          (Tunnelbana). We&apos;re considering expanding to include buses and commuter
          trains in future updates based on user feedback.
        </span>
      ),
    },
  ],
  footer: [
    {
      id: 1,
      menu: [
        { href: "#", text: "TestFlight" },
        { href: "#", text: "About" },
        { href: "#", text: "Support" },
        { href: "#", text: "Contact" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
