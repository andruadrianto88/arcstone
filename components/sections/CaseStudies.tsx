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
    value: "Built for bookings",
    outcome: "Designed to increase bookings with a frictionless flow",
    service: "Design, Dev, SEO",
    href: "#",
    image: "/work1.png",
  },
  {
    partner: "Uncle Hainanese",
    value: "Easy to update",
    outcome: "Built to streamline reservations and reduce manual updates",
    service: "Design, Dev, Copywriting",
    href: "#",
    image: "/work2.png",
  },
  {
    partner: "KORA",
    value: "Built for conversions",
    outcome: "Designed to drive event sign-ups and repeat visits",
    service: "Design, Dev, SEO",
    href: "#",
    image: "/work3.png",
  },
  {
    partner: "Harlow & Co.",
    value: "Built for leads",
    outcome: "Built to turn visitors into paying clients",
    service: "Design, Copywriting, Dev",
    href: "#",
    image: "/work1.png",
  },
  {
    partner: "Saltwood Café",
    value: "Built for walk-ins",
    outcome: "Designed to attract walk-ins and grow regulars",
    service: "Design, Dev, SEO",
    href: "#",
    image: "/work2.png",
  },
  {
    partner: "Mercer Legal",
    value: "Built for trust",
    outcome: "Built to build trust and drive enquiries",
    service: "Design, Dev, Copywriting",
    href: "#",
    image: "/work3.png",
  },
];

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

export default function CaseStudies() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative bg-[#101010] text-white overflow-hidden py-20 md:py-28">
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
        <div className="grid grid-cols-[1fr_1fr_minmax(360px,1.6fr)_auto_1fr] items-center gap-6 text-[12px] text-white/50 mb-6">
          <span>Partner</span>
          <span>Built for</span>
          <span className="font-[family-name:var(--font-display)] tracking-wider text-white/70 text-center">
            <span className="text-white/40">(&nbsp;&nbsp;</span>
            <span className="underline underline-offset-4">ARCSTONE CASE STUDIES</span>
            <span className="text-white/40">&nbsp;&nbsp;)</span>
          </span>
          <span />
          <span className="text-right">Service</span>
          <p className="col-span-full text-center text-[10px] text-white/40 tracking-wide md:hidden -mt-4 mb-2">
            Tap a row to preview
          </p>
        </div>

        {/* Floating preview image */}
        <div className="absolute left-[53%] top-[52%] -translate-x-1/2 -translate-y-1/2 w-[25%] max-w-[380px] aspect-[4/5] pointer-events-none z-0">
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
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden max-w-[14rem] -translate-x-1/2 -translate-y-1/2 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-white/38 md:block"
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
                    className="block py-2.5"
                  >
                    <div
                      className="grid grid-cols-[1fr_1fr_minmax(360px,1.6fr)_auto_1fr] items-start gap-6 leading-[1.15] transition-colors duration-200 font-[family-name:var(--font-harmond)] text-[15px] md:text-[16px] uppercase tracking-[0.12em]"
                      style={{
                        background: isHover ? "#fff" : "transparent",
                        color: isHover ? "#000" : "#ffffff",
                        mixBlendMode: isHover ? "difference" : "normal",
                      }}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="truncate">{r.partner}</span>
                        <span className="font-sans normal-case tracking-normal text-[11px] opacity-60 font-normal">{r.outcome}</span>
                      </div>
                      <span className="truncate text-[13px]" style={{ color: isHover ? "#000" : "rgba(255,255,255,0.7)" }}>{r.value}</span>
                      <span />
                      <span className="w-16 text-center normal-case" style={{ color: isHover ? "#000" : "rgba(255,255,255,0.6)" }}>({LETTERS[i]}.)</span>
                      <span className="text-right truncate font-sans normal-case tracking-normal text-[13px]">
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
        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row sm:items-center gap-4">
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
