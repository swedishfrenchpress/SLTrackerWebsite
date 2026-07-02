/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  /** Extra classes for the outer wrapper — set the width here (e.g. `w-72`). */
  className?: string;
  /** Eager-load with high fetch priority for above-the-fold hero use. */
  priority?: boolean;
}

/**
 * A thin, modern iPhone frame rendered entirely in CSS around a clean
 * screenshot. Bezel thickness and corner radius are expressed in container
 * query units (`cqw`), so a single component stays razor-sharp and correctly
 * proportioned at any rendered width — no chunky baked-in mockup required.
 *
 * The wrapper's aspect ratio matches the source screen capture (789×1718 ≈ the
 * 1206:2622 ratio of a current iPhone), so screenshots sit flush with no
 * distortion.
 */
export function PhoneFrame({
  src,
  alt,
  className,
  priority = false,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "@container relative aspect-[789/1718] select-none",
        className
      )}
    >
      {/* Titanium rim: subtle metal gradient, front-lit top edge, soft shadow */}
      <div className="absolute inset-0 rounded-[16cqw] bg-[linear-gradient(150deg,#3c3c42_0%,#202024_22%,#141417_56%,#0a0a0c_100%)] p-[2.3cqw] shadow-[inset_0_2px_1px_rgba(255,255,255,0.14),inset_0_0_0_0.4cqw_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.6),0_30px_60px_-24px_rgba(0,0,0,0.7),0_14px_30px_-18px_rgba(0,0,0,0.55)]">
        {/* Screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[13.5cqw] bg-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.9)]">
          <img
            src={src}
            alt={alt}
            width={789}
            height={1718}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            draggable={false}
            className="h-full w-full object-cover object-top"
          />
          {/* Glass sheen — faint diagonal reflection across the display */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0)_16%,rgba(255,255,255,0)_84%,rgba(255,255,255,0.045)_100%)]" />
        </div>
      </div>
    </div>
  );
}
