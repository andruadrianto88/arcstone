"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";

const HEADLINE =
  "Innovation is connection. We bridge the gap between complex infrastructure and human experience to turn vision into momentum.";

/** Words finish lighting by this fraction of pin scroll (rest = brief hold). */
const REVEAL_COMPLETE = 0.88;
/** Narrower = snappier per-word ramp. Must be < REVEAL_COMPLETE. */
const WORD_FADE_SPAN = 0.15;

/** Progress 0→1 while the tall section scrolls through the viewport (sticky pin). */
function computeSectionScrollProgress(el: HTMLElement): number {
  const h = el.offsetHeight;
  const vh = window.innerHeight;
  const scrollRange = Math.max(1, h - vh);
  const top = el.getBoundingClientRect().top;
  return Math.min(1, Math.max(0, -top / scrollRange));
}

function Word({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: React.ReactNode;
}) {
  const opacity = useTransform(progress, range, [0.15, 1], { clamp: true });
  return <motion.span style={{ opacity, color: "#e5e5e5" }}>{children}</motion.span>;
}

type Props = {
  as?: "h1" | "h2";
  className?: string;
};

export default function AboutReveal({ as = "h2", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const flush = () => {
      raf = 0;
      progress.set(computeSectionScrollProgress(el));
    };
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(flush);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const ro = new ResizeObserver(schedule);
    ro.observe(el);
    flush();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      ro.disconnect();
    };
  }, [progress]);

  const words = HEADLINE.split(" ");
  const Tag = as === "h1" ? motion.h1 : motion.h2;

  return (
    <section
      ref={ref}
      id="about"
      className={`relative min-h-[250vh] bg-[#101010] text-white ${className}`}
    >
      <div className="sticky top-0 min-h-screen w-full flex items-center overflow-hidden border-b border-black">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #fff 0 1px, transparent 1px 24px)",
          }}
        />
        <div className="relative wrap w-full pt-14 pb-16 md:pt-20 md:pb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[11px] md:text-xs text-white/70 mb-10 md:mb-14">
            <p className="font-semibold tracking-wide">Arcstone©</p>
            <p className="leading-snug">
              Driven by visions.
              <br />
              Built with design and technology.
            </p>
            <p className="md:text-right">Adelaide, EST 2024©</p>
          </div>

          <Tag className="font-semibold uppercase tracking-tight leading-[0.95] text-[7vw] md:text-[4.8vw] max-w-[22ch] flex flex-wrap gap-x-[0.22em] gap-y-[0.05em]">
            {words.map((w, i) => {
              const n = Math.max(words.length - 1, 1);
              const start = (i / n) * (REVEAL_COMPLETE - WORD_FADE_SPAN);
              return (
                <Word
                  key={i}
                  progress={progress}
                  range={[start, start + WORD_FADE_SPAN]}
                >
                  {w}
                </Word>
              );
            })}
          </Tag>
        </div>
      </div>
    </section>
  );
}
