"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Row = {
  partner: string;
  platform: string;
  service: string;
  href: string;
  image: string;
};

const ROWS: Row[] = [
  {
    partner: "The Local Bistro",
    platform: "Next.js + CMS",
    service: "UX/UI, Dev, Integration, SEO",
    href: "#",
    image: "/work1.png",
  },
  {
    partner: "Adelaide Plumbing Co.",
    platform: "Webflow",
    service: "UX/UI, Dev, Marketing, SEO",
    href: "#",
    image: "/work2.png",
  },
  {
    partner: "Greenfield Retail",
    platform: "Shopify Plus",
    service: "UX/UI, Dev B2C, Integration, SEO",
    href: "#",
    image: "/work3.png",
  },
  {
    partner: "Northline Studio",
    platform: "Shopify",
    service: "UX/UI, Brand Direction",
    href: "#",
    image: "/work1.png",
  },
  {
    partner: "Kunzi",
    platform: "Shopify Plus",
    service: "UX/UI, Dev (B2C/B2B), Integration",
    href: "#",
    image: "/work2.png",
  },
  {
    partner: "Rombo Group",
    platform: "Laravel",
    service: "UX/UI, Dev, Integration, SEO",
    href: "#",
    image: "/work3.png",
  },
];

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

export default function CaseStudies() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative bg-[#101010] text-white overflow-hidden border-b border-black py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #fff 0 1px, transparent 1px 24px)",
        }}
      />


      <div className="relative wrap">
        {/* Decorative brackets — aligned with Partner / Service columns */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 text-white font-[family-name:var(--font-harmond)] leading-none select-none text-[20px] md:text-[24px]"
        >
          {"{"}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 text-white font-[family-name:var(--font-harmond)] leading-none select-none text-[20px] md:text-[24px]"
        >
          {"}"}
        </span>

        {/* Header row */}
        <div className="grid grid-cols-[1fr_1fr_minmax(360px,1.6fr)_auto_1fr] items-center gap-6 text-[12px] text-white/50 mb-14 md:mb-20">
          <span>Partner</span>
          <span>Platform</span>
          <span className="font-[family-name:var(--font-display)] tracking-wider text-white/70 text-center">
            <span className="text-white/40">(&nbsp;&nbsp;</span>
            <span className="underline underline-offset-4">ARCSTONE CASE STUDIES</span>
            <span className="text-white/40">&nbsp;&nbsp;)</span>
          </span>
          <span />
          <span className="text-right">Service</span>
          <p className="col-span-full text-center text-[10px] text-white/40 tracking-wide md:hidden -mt-6 mb-2">
            Tap a row to preview
          </p>
        </div>

        {/* Floating preview image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] max-w-[360px] aspect-[4/6] pointer-events-none z-0">
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

        {/* Rows — quiet desktop hint (fades on hover) */}
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
                      className="grid grid-cols-[1fr_1fr_minmax(360px,1.6fr)_auto_1fr] items-center gap-6 leading-[1.15] transition-colors duration-200 font-[family-name:var(--font-harmond)] text-[15px] md:text-[16px] uppercase tracking-[0.12em]"
                      style={{
                        background: isHover ? "#fff" : "transparent",
                        color: isHover ? "#000" : "#ffffff",
                        mixBlendMode: isHover ? "difference" : "normal",
                      }}
                    >
                      <span className="truncate">{r.partner}</span>
                      <span className="truncate" style={{ color: isHover ? "#000" : "rgba(255,255,255,0.9)" }}>{r.platform}</span>
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
      </div>
    </section>
  );
}
