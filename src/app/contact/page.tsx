import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";

const contactEmail = "erikcativo@pm.me";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the person behind ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>

          <p className="text-muted-foreground leading-relaxed">
            Have a question, found a bug, or just want to say hi? I&apos;d love
            to hear from you. Reach me directly at{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-primary hover:text-primary/80 focus-visible:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary/50 rounded-sm focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
            >
              {contactEmail}
            </a>{" "}
            and I&apos;ll get back to you.
          </p>
        </div>

        <div className="border-t border-border/40 pt-8 mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">Open source</h2>
          <p className="text-muted-foreground leading-relaxed">
            {siteConfig.name} is free and open source. Curious how it works, or
            want to build something of your own? Dive into the code, open an
            issue, or fork it and make it your own.
          </p>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary focus-visible:text-primary transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
          >
            <Icons.github className="w-5 h-5" />
            View the source on GitHub
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
