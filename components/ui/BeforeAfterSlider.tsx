"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(40);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const clamp = (v: number) => Math.min(100, Math.max(0, v));

  const updateFromEvent = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    setPosition(clamp(((clientX - left) / width) * 100));
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => { if (dragging.current) updateFromEvent(e.clientX); },
    [updateFromEvent]
  );
  const onMouseUp = useCallback(() => { dragging.current = false; }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => updateFromEvent(e.touches[0].clientX),
    [updateFromEvent]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden rounded-2xl border border-[#e0e0e0] shadow-md cursor-col-resize"
      style={{ aspectRatio: "16/9" }}
      onMouseDown={(e) => { dragging.current = true; updateFromEvent(e.clientX); }}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => updateFromEvent(e.touches[0].clientX)}
    >
      {/* AFTER — full width base */}
      <div className="absolute inset-0">
        <Image src={after} alt={afterAlt} fill className="object-cover object-top" sizes="100vw" priority />
        <span className="absolute top-4 right-4 text-[13px] font-bold text-[#1a7a3c] bg-green-50/90 border border-green-200 px-3 py-1 rounded-full backdrop-blur-sm">
          ✓ After
        </span>
      </div>

      {/* BEFORE — clipped to left of slider */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before} alt={beforeAlt} fill className="object-cover object-top" sizes="100vw" priority />
        <span className="absolute top-4 left-4 text-[13px] font-bold text-[#cc2200] bg-red-50/90 border border-red-200 px-3 py-1 rounded-full backdrop-blur-sm">
          ✕ Before
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] border-2 border-white flex items-center justify-center z-10 gap-1"
        style={{ left: `${position}%` }}
      >
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2L2 9l6 7" />
        </svg>
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 2l6 7-6 7" />
        </svg>
      </div>
    </div>
  );
}
