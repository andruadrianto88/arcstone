"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Row = {
  partner: string;
  value: string;
  outcome: string;
  service: string;
  href: string;
  image: string;
};

const ROWS: Row[] = [
  {
    partner: "Vossén",
    value: "More bookings",
    outcome: "Designed to increase bookings with a frictionless flow",
    service: "Design, Dev, SEO",
    href: "#",
    image: "/work1.webp",
  },
  {
    partner: "Uncle Hainanese",
    value: "Easier updates",
    outcome: "Built to streamline reservations and reduce manual updates",
    service: "Design, Dev, Copywriting",
    href: "#",
    image: "/work2.webp",
  },
  {
    partner: "KORA",
    value: "Higher conversions",
    outcome: "Designed to drive event sign-ups and repeat visits",
    service: "Design, Dev, SEO",
    href: "#",
    image: "/work3.webp",
  },
];

export default function CaseStudies() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative bg-[#101010] text-white overflow-hidden py-12 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #fff 0 1px, transparent 1px 24px)",
        }}
      />


      <div className="relative wrap">
        {/* Section label */}
        <div className="mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold">Selected Work &amp; Results</p>
        </div>

        {/* Header row */}
        <div className="hidden md:grid grid-cols-[1.5fr_1fr_minmax(300px,1.5fr)_1fr] items-center gap-6 text-[12px] text-white/50 mb-6 px-4">
          <span>Partner</span>
          <span>Outcome</span>
          <span className="font-[family-name:var(--font-display)] tracking-wider text-white/70 text-center">
            <span className="text-white/40">(&nbsp;&nbsp;</span>
            <span className="underline underline-offset-4">GOODSITES CASE STUDIES</span>
            <span className="text-white/40">&nbsp;&nbsp;)</span>
          </span>
          <span className="text-right">Service</span>
        </div>

        {/* Floating preview image */}
        <div className="hidden md:block absolute left-[65%] top-[48%] -translate-x-1/2 -translate-y-1/2 w-[32%] max-w-[480px] aspect-[16/9] pointer-events-none z-0">
          {ROWS.map((r, i) => {
            const on = hovered === i;
            return (
              <img
                key={r.partner}
                src={r.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                style={{
                  opacity: on ? 1 : 0,
                  transform: on ? "scale(1)" : "scale(0.7)",
                  transition:
                    "opacity 400ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            );
          })}
        </div>

        {/* Rows */}
        <div className="relative">
          <motion.p
            aria-hidden
            className="pointer-events-none absolute left-[65%] top-1/2 z-20 hidden max-w-[14rem] -translate-x-1/2 -translate-y-1/2 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-white/38 md:block"
            initial={false}
            animate={{ opacity: hovered === null ? 1 : 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            Hover to preview · click to open
          </motion.p>

          <ul className="relative">
            {ROWS.map((r, i) => {
              const isHover = hovered === i;
              return (
                <li key={r.partner}>
                  <Link
                    href={r.href}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`block py-4 md:py-3 px-3 md:px-4 -mx-3 md:-mx-4 rounded-xl border-b border-white/5 md:border-0 transition-all duration-200 ${isHover ? "md:bg-white/5" : ""}`}
                  >
                    {/* Mobile stacked */}
                    <div className="md:hidden flex flex-col gap-1.5">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-[family-name:var(--font-harmond)] text-[15px] uppercase tracking-[0.12em] text-white truncate">{r.partner}</span>
                        <span className="text-white/80 text-[12px] shrink-0">{r.value}</span>
                      </div>
                      <span className="text-white/50 text-[12px] leading-snug">{r.outcome}</span>
                      <span className="text-white/40 text-[11px]">{r.service}</span>
                    </div>
                    {/* Desktop grid */}
                    <div
                      className="hidden md:grid grid-cols-[1.5fr_1fr_minmax(300px,1.5fr)_1fr] items-start gap-6 leading-[1.15] font-[family-name:var(--font-harmond)] text-[15px] md:text-[16px] uppercase tracking-[0.12em]"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="truncate text-white">{r.partner}</span>
                        <span className={`font-sans normal-case tracking-normal text-[11px] font-normal transition-colors ${isHover ? "text-white/70" : "text-white/40"}`}>{r.outcome}</span>
                      </div>
                      <span className={`truncate text-[13px] mt-0.5 transition-colors ${isHover ? "text-white/90" : "text-white/60"}`}>{r.value}</span>
                      <span />
                      <span className={`text-right truncate font-sans normal-case tracking-normal text-[13px] mt-0.5 transition-colors ${isHover ? "text-white/90" : "text-white/60"}`}>
                        {r.service}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-20 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-white/50 text-sm">Want something like this for your business?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors duration-200 shrink-0"
          >
            Get your free homepage mockup →
          </Link>
        </div>
      </div>
    </section>
  );
}
