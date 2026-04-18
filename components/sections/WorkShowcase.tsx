"use client";
import Link from "next/link";
import { useState } from "react";

type WorkItem = {
  client: string;
  type: string;
  desc: string;
  results: string[];
  stat: string;
  statLabel: string;
  statDesc: string;
  href: string;
  image: string;
};

function WorkCard({ w, featured = false }: { w: WorkItem; featured?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={w.href}
      className="group relative block overflow-hidden bg-[#f3f3f3]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Square image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={w.image}
          alt={w.client}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{ opacity: hovered ? 0.4 : 0.1 }}
        />

        {/* Type tag — top left */}
        <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1">
          {w.type}
        </div>

        {/* Arrow — bottom right, fades in on hover */}
        <div
          className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.75)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3">
        <p className="text-[#111] font-semibold text-sm leading-snug">{w.client}</p>
        <p className="text-[#888] text-xs mt-0.5 leading-snug truncate">{w.statDesc}</p>
      </div>
    </Link>
  );
}

export default function WorkShowcase({ work }: { work: WorkItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8">
      {work.map((w, i) => (
        <WorkCard key={w.client} w={w} featured={i === 0} />
      ))}
    </div>
  );
}
