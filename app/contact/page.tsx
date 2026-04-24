"use client";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

const LOOKING_FOR = [
  "Improve my current website",
  "Create a new website",
  "Not sure / just exploring",
  "Other",
];

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mpqkbqal");

  return (
    <main className="relative min-h-screen pt-8 md:pt-16 pb-12 md:pb-16 overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[#fdf7e8]"
        style={{
          backgroundImage: "url('/form-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="wrap relative">
        <div className="max-w-[560px] mx-auto">
          {state.succeeded ? (
            <Confirmation />
          ) : (
            <RequestForm state={state} handleSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </main>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  REQUEST FORM                                              */
/* ────────────────────────────────────────────────────────── */

function RequestForm({ state, handleSubmit }: { state: any; handleSubmit: any }) {
  return (
    <>
      {/* Hero */}
      <div className="text-center mb-6">
        <h1 className="text-[#111] font-bold tracking-tight leading-[1.05] mb-3"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}>
          Get your free<br />homepage mockup
        </h1>
        <p className="text-[#111] text-base leading-relaxed max-w-md mx-auto mb-4">
          See how your business could look with a modern, high-converting website — no cost, no obligation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12px] text-[#222]">
          <span>Takes 30 seconds</span>
          <span className="text-[#666]">•</span>
          <span>No payment required</span>
          <span className="text-[#666]">•</span>
          <span>Delivered in 2–3 days</span>
        </div>
      </div>

      {/* Reassurance line */}
      <p className="text-center text-[13px] text-[#111] mb-4">
        No website? No problem — we can design one from scratch.
      </p>

      {/* Form card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl border border-[#e8e8e8] shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-6 md:p-7 flex flex-col gap-4"
      >
        <Field label="Name">
          <input type="text" name="name" required placeholder="John" className={inputCls} />
          <ValidationError field="name" errors={state.errors} className="text-red-500 text-xs" />
        </Field>

        <Field label="Email">
          <input type="email" name="email" required placeholder="john@email.com" className={inputCls} />
          <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs" />
        </Field>

        <Field label="Business name">
          <input type="text" name="business" required placeholder="John's Barbershop" className={inputCls} />
          <ValidationError field="business" errors={state.errors} className="text-red-500 text-xs" />
        </Field>

        <Field label="Website" optional>
          <input type="text" name="website" placeholder="yourwebsite.com (or leave blank)" className={inputCls} />
        </Field>

        <Field label="What are you looking for?">
          <div className="relative">
            <select name="looking_for" required defaultValue=""
              className={`${inputCls} appearance-none cursor-pointer pr-10 text-[#bbb] [&:not([value=''])]:text-[#111]`}>
              <option value="" disabled>Select an option…</option>
              {LOOKING_FOR.map((g) => <option key={g} value={g} className="text-[#111]">{g}</option>)}
            </select>
            <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#999]"
                 width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <ValidationError field="looking_for" errors={state.errors} className="text-red-500 text-xs" />
        </Field>

        <Field label="Anything specific you'd like improved?" optional>
          <textarea rows={3} name="details"
            placeholder="e.g. more bookings, better design, mobile issues…"
            className={`${inputCls} resize-none`} />
        </Field>

        <button
          type="submit"
          disabled={state.submitting}
          className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-[#111] text-[15px] font-bold py-4 rounded-2xl hover:brightness-95 transition-all disabled:opacity-60 disabled:cursor-wait shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
        >
          {state.submitting ? (
            <>
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Sending…
            </>
          ) : (
            <>Show me my free mockup →</>
          )}
        </button>

        <ValidationError errors={state.errors} className="text-center text-red-500 text-sm" />

        {/* Trust booster under button */}
        <p className="text-center text-[12px] text-[#888] leading-relaxed px-2">
          I&apos;ll personally review your business and send your custom mockup within 2–3 days.
        </p>
      </form>

      {/* What you'll get block */}
      <div className="mt-6 max-w-[440px] mx-auto">
        <p className="text-center text-[11px] font-bold text-[#999] uppercase tracking-widest mb-4">
          What you&apos;ll get
        </p>
        <ul className="flex flex-col gap-3">
          {[
            "A modern homepage redesign concept",
            "Better layout focused on getting customers",
            "No obligation to continue",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3 text-[14px] text-[#444]">
              <svg className="mt-[3px] shrink-0 text-[var(--accent-dk)]" width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  CONFIRMATION                                              */
/* ────────────────────────────────────────────────────────── */

function Confirmation() {
  return (
    <div className="text-center">
      <div className="inline-flex w-16 h-16 rounded-full bg-[var(--accent)] items-center justify-center mb-8">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111"
             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-[#111] font-bold tracking-tight leading-[1.05] mb-5"
          style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
        Got it — you&apos;re all set.
      </h1>
      <p className="text-[#222] text-base md:text-[17px] leading-relaxed max-w-md mx-auto mb-3">
        I&apos;ll start working on your mockup and send it over within a few days.
      </p>
      <p className="text-[#444] text-[15px] leading-relaxed max-w-md mx-auto mb-10">
        If I need anything quick, I&apos;ll reach out.
      </p>

      <Link href="/" className="inline-flex items-center gap-1.5 text-[#777] hover:text-[#111] text-sm font-semibold transition-colors">
        ← Back to home
      </Link>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  PRIMITIVES                                                */
/* ────────────────────────────────────────────────────────── */

const inputCls =
  "w-full bg-[#fafafa] border border-[#e8e8e8] rounded-xl px-4 py-3.5 text-base md:text-[15px] text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#111] focus:bg-white transition-all";

function Field({
  label, optional, children,
}: { label: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-semibold text-[#555] flex items-center gap-1.5">
        {label}
        {optional && <span className="text-[#bbb] font-normal">(optional)</span>}
      </label>
      {children}
    </div>
  );
}
