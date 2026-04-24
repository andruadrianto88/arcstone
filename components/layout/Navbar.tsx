"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Work",     href: "/#work"     },
  { label: "Services", href: "/#services" },
  { label: "Process",  href: "/#process"  },
  { label: "Pricing",  href: "/#pricing"  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="wrap">
        {/* Black bar — floats with white space on top + sides */}
        <div className="bg-[#111] rounded-xl px-4 md:px-6 mt-3 mx-0 md:mx-16">
          <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center h-[56px] md:h-[60px]">

            {/* Logo — left */}
            <Link href="/" className="flex items-center gap-2 text-white text-lg tracking-tight">
              <img src="/logo.png" alt="GoodSites" className="h-7 w-auto" />
              <span style={{ fontFamily: "var(--font-mango)", letterSpacing: "0.01em", fontStyle: "normal", fontSize: "1.4rem", fontWeight: 700 }}>GOODSITES</span>
            </Link>

            {/* Nav links — truly centered */}
            <nav className="hidden md:flex items-center justify-center gap-7">
              {links.map(l => (
                <Link key={l.href} href={l.href}
                  className="text-sm text-white/80 hover:text-white font-medium transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* CTA — right */}
            <div className="hidden md:flex justify-end">
              <Link href="/contact" className="pill-accent text-sm">
                Get Free Mockup →
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden col-start-3 flex justify-end">
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                className="p-3 -mr-2 text-white"
                onClick={() => setOpen(!open)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  {open
                    ? <path d="M18 6L6 18M6 6l12 12"/>
                    : <path d="M3 12h18M3 6h18M3 18h18"/>}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 py-3 flex flex-col">
              {links.map(l => (
                <Link key={l.href} href={l.href}
                  className="text-[#e0e0e0] hover:text-white font-medium text-base py-3"
                  onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" className="pill-accent mt-3 mb-1" onClick={() => setOpen(false)}>
                Get Free Mockup →
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
