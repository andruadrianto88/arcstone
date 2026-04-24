"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type WorkItem = {
  client: string;
  type: string;
  desc: string;
  highlight?: string;
  results: string[];
  stat: string;
  statLabel: string;
  statDesc: string;
  href: string;
  image: string;
};

function SquareImage({ item, index }: { item: WorkItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group shrink-0 w-[85vw] md:w-auto snap-center"
    >
      <Link href={item.href} target="_blank" rel="noopener noreferrer" className="block w-full">
        <div className="relative w-full aspect-square md:aspect-auto md:h-[28vh] overflow-hidden rounded-none bg-[#f0f0f0]">
          <img
            src={item.image}
            alt={item.client}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          />
          {/* Gray overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 ease-out" />

          {/* Centered button — mirrors the video hero button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-2.5 bg-black/50 border border-white/10 text-white text-[13px] font-semibold px-6 py-3 rounded-full">
              See work
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </span>
          </div>
        </div>
        <div className="pt-3 pb-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b94a3a]">{item.type}</span>
            <span className="text-[#ddd]">·</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#999]">{item.client}</span>
          </div>
          <p className="text-[13px] text-[#555] leading-relaxed mb-3">
            {item.desc}{item.highlight && <> <mark className="bg-yellow-100 text-inherit">{item.highlight}</mark></>}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#111] tracking-wide group/btn">
            <span className="underline underline-offset-4 decoration-[#ccc] group-hover/btn:decoration-[#111] transition-colors duration-200">See work</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WorkShowcase({ work }: { work: WorkItem[] }) {
  if (!work || work.length === 0) return null;

  return (
    <div 
      className="mt-8 md:mt-10 flex md:grid md:grid-cols-3 gap-1 md:gap-1.5 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 px-4 md:px-0 -mx-4 md:mx-0"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="flex md:contents w-full no-scrollbar gap-1 md:gap-0">
        {work.map((item, index) => (
          <SquareImage key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
