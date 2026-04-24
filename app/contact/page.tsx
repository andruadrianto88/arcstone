"use client";

import { useState } from "react";
import Link from "next/link";

const GOALS = [
  "More leads / enquiries",
  "More bookings or sales",
  "Look more professional",
  "Redesign existing site",
  "Not sure — need advice",
];

type FormState = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [website, setWebsite] = useState("");
  const [whatYouDo, setWhatYouDo] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        company: businessName,
        website,
        whatYouDo,
        need: goal,
      }),
    });

    setFormState(res.ok ? "sent" : "error");
  }

  return (
    <main className="bg-[#fafafa] min-h-screen pt-32 pb-24">
      <div className="wrap">
        <div className="max-w-[640px] mx-auto">
          {formState === "sent" ? (
            <Confirmation name={name} email={email} />
          ) : (
            <RequestForm
              name={name}
              setName={setName}
              businessName={businessName}
              setBusinessName={setBusinessName}
              website={website}
              setWebsite={setWebsite}
              whatYouDo={whatYouDo}
              setWhatYouDo={setWhatYouDo}
              goal={goal}
              setGoal={setGoal}
              email={email}
              setEmail={setEmail}
              formState={formState}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </main>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  REQUEST FORM                                              */
/* ────────────────────────────────────────────────────────── */

type FormProps = {
  name: string; setName: (v: string) => void;
  businessName: string; setBusinessName: (v: string) => void;
  website: string; setWebsite: (v: string) => void;
  whatYouDo: string; setWhatYouDo: (v: string) => void;
  goal: string; setGoal: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  formState: FormState;
  onSubmit: (e: React.FormEvent) => void;
};

function RequestForm(p: FormProps) {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-[#111] font-bold tracking-tight leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}>
          Get your free<br />homepage mockup
        </h1>
        <p className="text-[#555] text-base md:text-lg leading-relaxed max-w-md mx-auto">
          Tell us a bit about your business — we&apos;ll design a custom homepage for you, free. Delivered in 2–3 days.
        </p>
      </div>

      {/* Form card */}
      <form
        onSubmit={p.onSubmit}
        className="bg-white rounded-3xl border border-[#e8e8e8] shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-8 md:p-10"
      >
        <div className="flex items-center justify-between mb-6">
          <p className="text-[11px] font-bold text-[#999] uppercase tracking-widest">Step 1 of 1</p>
          <p className="text-[11px] text-[#999]">~30 seconds</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field label="Your name">
            <input
              type="text" required placeholder="Jane Smith"
              value={p.name} onChange={(e) => p.setName(e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Business name">
            <input
              type="text" required placeholder="Acme Coffee Co."
              value={p.businessName} onChange={(e) => p.setBusinessName(e.target.value)}
              className={inputCls}
            />
          </Field>
        </div>

        <div className="mt-5">
          <Field label="Website" optional>
            <input
              type="text" placeholder="acmecoffee.com.au"
              value={p.website} onChange={(e) => p.setWebsite(e.target.value)}
              className={inputCls}
            />
          </Field>
        </div>

        <div className="mt-5">
          <Field label="What do you do?">
            <input
              type="text" required maxLength={120}
              placeholder="Specialty coffee roaster in Adelaide"
              value={p.whatYouDo} onChange={(e) => p.setWhatYouDo(e.target.value)}
              className={inputCls}
            />
          </Field>
        </div>

        <div className="mt-5">
          <Field label="What do you want from a new site?">
            <div className="relative">
              <select
                required value={p.goal}
                onChange={(e) => p.setGoal(e.target.value)}
                className={`${inputCls} appearance-none cursor-pointer pr-10`}
                style={{ color: p.goal ? "#111" : "#bbb" }}
              >
                <option value="" disabled>Select an option…</option>
                {GOALS.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
              <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#999]"
                   width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </Field>
        </div>

        <div className="mt-5">
          <Field label="Email">
            <input
              type="email" required placeholder="jane@acmecoffee.com.au"
              value={p.email} onChange={(e) => p.setEmail(e.target.value)}
              className={inputCls}
            />
          </Field>
        </div>

        <button
          type="submit"
          disabled={p.formState === "sending"}
          className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-[#111] text-white text-[15px] font-semibold py-4 rounded-2xl hover:bg-black transition-colors disabled:opacity-60 disabled:cursor-wait"
        >
          {p.formState === "sending" ? (
            <>
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Sending…
            </>
          ) : (
            <>Get my free mockup →</>
          )}
        </button>

        {p.formState === "error" && (
          <p className="mt-4 text-center text-red-500 text-sm">
            Something went wrong — please try again.
          </p>
        )}
      </form>

      {/* Trust row */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-[#888]">
        <TrustItem>2–3 day delivery</TrustItem>
        <TrustItem>No commitment</TrustItem>
        <TrustItem>10+ Adelaide businesses</TrustItem>
      </div>
    </>
  );
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-dk)]">
        <path d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </span>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  CONFIRMATION                                              */
/* ────────────────────────────────────────────────────────── */

function Confirmation({ name, email }: { name: string; email: string }) {
  const firstName = name.split(" ")[0] || "there";
  return (
    <div className="text-center">
      <div className="inline-flex w-16 h-16 rounded-full bg-[var(--accent)] items-center justify-center mb-8">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111"
             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-[#111] font-bold tracking-tight leading-[1.05] mb-4"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)" }}>
        You&apos;re all set, {firstName}.
      </h1>
      <p className="text-[#555] text-base md:text-lg leading-relaxed max-w-md mx-auto mb-2">
        We&apos;ll send your homepage mockup within <span className="text-[#111] font-semibold">2–3 days</span>.
      </p>
      <p className="text-[#888] text-sm leading-relaxed max-w-md mx-auto mb-10">
        Keep an eye on <span className="text-[#111] font-medium">{email}</span>.
      </p>

      {/* Optional upgrade card */}
      <div className="bg-white rounded-3xl border border-[#e8e8e8] shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-8 md:p-10 max-w-[520px] mx-auto text-left">
        <p className="text-[11px] font-bold text-[#999] uppercase tracking-widest mb-3">Want it faster?</p>
        <h2 className="text-[#111] font-bold tracking-tight leading-tight mb-3"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)" }}>
          Walk through it with us.
        </h2>
        <p className="text-[#555] text-[15px] leading-relaxed mb-6">
          A 20-minute call so we can ask the right questions and get your mockup back even sooner. Totally optional.
        </p>
        <a
          href="https://cal.com/goodsites/20min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#111] text-white text-[14px] font-semibold px-5 py-3 rounded-xl hover:bg-black transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Book a 20-min call
        </a>
      </div>

      <Link href="/" className="inline-flex items-center gap-1.5 text-[#777] hover:text-[#111] text-sm font-semibold mt-10 transition-colors">
        ← Back to home
      </Link>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  PRIMITIVES                                                */
/* ────────────────────────────────────────────────────────── */

const inputCls =
  "w-full bg-[#fafafa] border border-[#e8e8e8] rounded-xl px-4 py-3.5 text-[15px] text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#111] focus:bg-white transition-all";

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
