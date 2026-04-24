"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring, MotionValue } from "framer-motion";

const HEADLINE = "Small team. Full attention.";
const BODY =
  "We're a tight-knit web agency that works closely with every client — no handoffs, no layers. But more importantly, we believe you should see the work before you commit. That's why we design a free custom homepage for your business first — so you know exactly what you're getting.";

/** Words finish lighting by this fraction of pin scroll (rest = brief hold). */
const REVEAL_COMPLETE = 0.85;
/** Wider span = smoother, more cinematic reveal per word. */
const WORD_FADE_SPAN = 0.2;

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
  const rawOpacity = useTransform(progress, range, [0, 1], { clamp: true });
  const rawY = useTransform(progress, range, [18, 0], { clamp: true });

  // Spring-smooth the driven values so fast scrolling doesn't look choppy
  const opacity = useSpring(rawOpacity, { stiffness: 120, damping: 22, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 120, damping: 22, mass: 0.6 });

  // Blend from dim white → bright white as the word reveals
  const color = useTransform(opacity, [0, 1], ["#4a4a4a", "#f0f0f0"]);

  return (
    <motion.span
      style={{
        opacity: useTransform(opacity, (v) => 0.12 + v * 0.88),
        y,
        color,
        display: "inline-block",
      }}
    >
      {children}
    </motion.span>
  );
}

type Props = {
  as?: "h1" | "h2";
  className?: string;
};

export default function AboutReveal({ as = "h2", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rawProgress = useMotionValue(0);
  // Gentle spring on the section-level progress so the whole reveal breathes
  const progress = useSpring(rawProgress, { stiffness: 80, damping: 28, mass: 1 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const flush = () => {
      raf = 0;
      rawProgress.set(computeSectionScrollProgress(el));
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
  }, [rawProgress]);

  const headlineWords = HEADLINE.split(" ");
  const bodyWords = BODY.split(" ");
  const allWords = [...headlineWords, ...bodyWords];
  const n = Math.max(allWords.length - 1, 1);
  const Tag = as === "h1" ? motion.h1 : motion.h2;

  return (
    <section
      ref={ref}
      id="about"
      className={`relative min-h-[320vh] bg-[#101010] text-white ${className}`}
    >
      <div className="sticky top-0 min-h-screen w-full flex items-center overflow-hidden ">
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
            <p className="font-semibold tracking-wide">GoodSites©</p>
            <p className="leading-snug">
              Driven by visions.
              <br />
              Built with design and technology.
            </p>
            <p className="md:text-right">Adelaide, EST 2024©</p>
          </div>

          <Tag className="font-semibold uppercase tracking-tight leading-[0.95] text-[7vw] md:text-[4.8vw] max-w-[22ch] flex flex-wrap gap-x-[0.22em] gap-y-[0.05em] mb-8">
            {headlineWords.map((w, i) => {
              const start = (i / n) * (REVEAL_COMPLETE - WORD_FADE_SPAN);
              return (
                <Word key={i} progress={progress} range={[start, start + WORD_FADE_SPAN]}>
                  {w}
                </Word>
              );
            })}
          </Tag>

          <motion.p className="text-[3.8vw] md:text-[1.6vw] max-w-[52ch] leading-snug flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]">
            {bodyWords.map((w, i) => {
              const globalIndex = headlineWords.length + i;
              const start = (globalIndex / n) * (REVEAL_COMPLETE - WORD_FADE_SPAN);
              return (
                <Word key={i} progress={progress} range={[start, start + WORD_FADE_SPAN]}>
                  {w}
                </Word>
              );
            })}
          </motion.p>

          <motion.div
            className="mt-10 md:mt-14 border-l-2 border-white/20 pl-5 max-w-[48ch]"
            style={{
              opacity: useTransform(progress, [0.5, 0.7], [0, 1]),
              y: useTransform(progress, [0.5, 0.7], [16, 0]),
            }}
          >
            <p className="text-white/80 text-[14px] md:text-[15px] leading-relaxed italic">
              "Loved the final result — clean, professional, and exactly what we needed."
            </p>
            <p className="mt-2 text-white/40 text-[12px] tracking-wide">— Nick Wang, Owner of Uncle Hainanese Chicken Rice</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
