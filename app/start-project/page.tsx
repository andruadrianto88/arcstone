"use client";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

const PROJECT_TYPE = ["New website", "Redesign existing site"];
const TIMELINE = ["ASAP", "Within 2 weeks", "Within 1 month", "Flexible"];
const BUDGET = ["Not sure yet", "$300–$500", "$500–$1000", "$1000+"];

export default function StartProjectPage() {
  const [state, handleSubmit] = useForm("mpqkbqal");

  return (
    <main className="relative min-h-screen pt-8 md:pt-16 pb-12 md:pb-16 overflow-hidden">
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
        <div className="max-w-[620px] mx-auto">
          {state.succeeded ? (
            <Confirmation />
          ) : (
            <IntakeForm state={state} handleSubmit={handleSubmit} />
          )}
        </div>
      </div>
    </main>
  );
}

function IntakeForm({ state, handleSubmit }: { state: any; handleSubmit: any }) {
  return (
    <>
      <div className="text-center mb-6">
        <h1
          className="text-[#111] font-bold tracking-tight leading-[1.05] mb-3"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)" }}
        >
          Let&apos;s start<br />your project
        </h1>
        <p className="text-[#111] text-base leading-relaxed max-w-md mx-auto mb-4">
          Tell us what you need — we&apos;ll review your project and get back to you within 24 hours with a clear next step.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12px] text-[#222]">
          <span>No payment yet</span>
          <span className="text-[#666]">•</span>
          <span>Reply within 24h</span>
          <span className="text-[#666]">•</span>
          <span>Free quote</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl border border-[#e8e8e8] shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-6 md:p-7 flex flex-col gap-5"
      >
        <input type="hidden" name="form_type" value="start-project" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Name">
            <input type="text" name="name" required placeholder="John" className={inputCls} />
            <ValidationError field="name" errors={state.errors} className="text-red-500 text-xs" />
          </Field>

          <Field label="Email">
            <input type="email" name="email" required placeholder="john@email.com" className={inputCls} />
            <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs" />
          </Field>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Business name">
            <input type="text" name="business" required placeholder="John's Barbershop" className={inputCls} />
          </Field>

          <Field label="Current website" optional>
            <input type="text" name="website" placeholder="yourwebsite.com" className={inputCls} />
          </Field>
        </div>

        <Field label="What do you need?">
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPE.map((t) => (
              <label key={t} className={radioPillCls}>
                <input type="radio" name="project_type" value={t} required className="peer sr-only" />
                <span className={radioPillSpanCls}>{t}</span>
              </label>
            ))}
          </div>
        </Field>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Timeline">
            <div className="relative">
              <select
                name="timeline"
                required
                defaultValue=""
                className={`${inputCls} appearance-none cursor-pointer pr-10`}
              >
                <option value="" disabled>Select…</option>
                {TIMELINE.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <ChevronIcon />
            </div>
          </Field>

          <Field label="Budget">
            <div className="relative">
              <select
                name="budget"
                required
                defaultValue=""
                className={`${inputCls} appearance-none cursor-pointer pr-10`}
              >
                <option value="" disabled>Select…</option>
                {BUDGET.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
              <ChevronIcon />
            </div>
          </Field>
        </div>

        <Field
          label="Anything else we should know?"
          optional
          hint="e.g. goals, examples you like, features you need"
        >
          <textarea
            rows={4}
            name="notes"
            className={`${inputCls} resize-none`}
          />
        </Field>

        <p className="text-center text-[13px] text-[#555] leading-relaxed px-2 mt-1">
          We&apos;ll review your project and reply within 24 hours. No obligation.
        </p>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-[#111] text-[15px] font-bold py-4 rounded-2xl hover:brightness-95 transition-all disabled:opacity-60 disabled:cursor-wait shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
        >
          {state.submitting ? (
            <>
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Sending…
            </>
          ) : (
            <>Get my quote →</>
          )}
        </button>

        <ValidationError errors={state.errors} className="text-center text-red-500 text-sm" />
      </form>

      <p className="text-center text-[13px] text-[#666] mt-6">
        Just want a free mockup first?{" "}
        <Link href="/contact" className="text-[#111] font-semibold underline underline-offset-2">
          Start there instead
        </Link>
      </p>
    </>
  );
}

function Confirmation() {
  return (
    <div className="text-center">
      <div className="inline-flex w-16 h-16 rounded-full bg-[var(--accent)] items-center justify-center mb-8">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1
        className="text-[#111] font-bold tracking-tight leading-[1.05] mb-5"
        style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
      >
        Thanks — we&apos;ve got it.
      </h1>
      <p className="text-[#222] text-base md:text-[17px] leading-relaxed max-w-md mx-auto mb-3">
        We&apos;ll review your project details and get back to you within 1 business day with a tailored next step.
      </p>
      <p className="text-[#444] text-[15px] leading-relaxed max-w-md mx-auto mb-10">
        Keep an eye on your inbox.
      </p>

      <Link href="/" className="inline-flex items-center gap-1.5 text-[#777] hover:text-[#111] text-sm font-semibold transition-colors">
        ← Back to home
      </Link>
    </div>
  );
}

const inputCls =
  "w-full bg-[#fafafa] border border-[#e8e8e8] rounded-xl px-4 py-3.5 text-base md:text-[15px] text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#111] focus:bg-white transition-all";

const radioPillCls = "cursor-pointer";
const radioPillSpanCls =
  "inline-block px-4 py-2.5 rounded-full border border-[#e8e8e8] bg-[#fafafa] text-[13px] font-medium text-[#444] transition-all peer-checked:bg-[#111] peer-checked:text-white peer-checked:border-[#111] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--accent)] hover:border-[#111]";

function ChevronIcon() {
  return (
    <svg
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#999]"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function Field({
  label,
  optional,
  hint,
  children,
}: {
  label: string;
  optional?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-semibold text-[#555] flex items-center gap-1.5">
        {label}
        {optional && <span className="text-[#bbb] font-normal">(optional)</span>}
      </label>
      {hint && <p className="text-[12px] text-[#888] -mt-1">{hint}</p>}
      {children}
    </div>
  );
}
