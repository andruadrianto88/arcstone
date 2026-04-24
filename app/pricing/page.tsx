import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent website pricing for small businesses in Adelaide. No hidden fees, no retainers. From $300 one-time. See your site before you pay.",
  openGraph: {
    title: "Pricing | GoodSites",
    description: "Simple, transparent website pricing for small businesses in Adelaide. No hidden fees, no retainers. From $300 one-time.",
    url: "https://goodsites.com.au/pricing",
  },
};

const plans = [
  {
    name: "Free Demo",
    price: "$0",
    desc: "Not sure what you need? Start here. We'll walk you through what's possible, no strings attached.",
    features: [
      "20-minute strategy call",
      "Live website walkthrough",
      "Custom recommendations for your business",
      "No credit card, no commitment",
    ],
    cta: "Book a Demo →",
    href: "/contact",
    highlight: false,
  },
  {
    name: "Basic",
    price: "$1,800",
    desc: "A clean, fast website that gets you online and looking professional. Perfect for small businesses just getting started.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "2 weeks delivery",
    ],
    cta: "Get Started →",
    href: "/contact",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$3,800",
    desc: "A full-featured site built to generate leads, rank on Google, and grow with your business.",
    features: [
      "Up to 12 pages",
      "Custom design & copywriting",
      "Advanced SEO & performance",
      "CMS so you can update content",
      "Analytics & conversion setup",
      "3 rounds of revisions",
      "Priority support for 60 days",
    ],
    cta: "Get Started →",
    href: "/contact",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="s border-b border-[#e8e8e8]">
        <div className="wrap">
          <span className="label">Pricing</span>
          <h1 className="max-w-2xl mb-4 font-semibold">
            Straight up pricing.<br />No surprises.
          </h1>
          <p className="text-[#555] text-lg max-w-md leading-relaxed">
            Pick a plan or book a free demo — we'll figure out what's right for you together.
          </p>
        </div>
      </section>

      {/* ── PLANS ───────────────────────────────────────── */}
      <section className="s border-b border-[#e8e8e8]">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div key={p.name}
                className={`rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-8 ${
                  p.highlight
                    ? "bg-[#111] text-white"
                    : "bg-[#f7f7f7] border border-[#e8e8e8]"
                }`}>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${p.highlight ? "text-[#666]" : "text-[#999]"}`}>
                    {p.name}
                  </p>
                  <p className={`text-4xl font-semibold tracking-tight mb-4 ${p.highlight ? "text-white" : "text-[#111]"}`}>
                    {p.price}
                  </p>
                  <p className={`text-sm leading-relaxed mb-6 ${p.highlight ? "text-[#777]" : "text-[#666]"}`}>
                    {p.desc}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${p.highlight ? "bg-[#f2ff37]" : "bg-[#111]"}`} />
                        <span className={p.highlight ? "text-[#bbb]" : "text-[#444]"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={p.href}
                  className={p.highlight ? "pill-accent w-fit" : "pill-dark w-fit"}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ NOTE ────────────────────────────────────── */}
      <section className="s">
        <div className="wrap">
          <div className="max-w-xl">
            <span className="label">Good to know</span>
            <h2 className="mb-4 font-semibold">Have questions?</h2>
            <p className="text-[#666] text-base leading-relaxed mb-6">
              Every project is different. If your needs don't fit neatly into a plan, just book a free demo and we'll work something out.
            </p>
            <Link href="/contact" className="pill-outline">Talk to us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
