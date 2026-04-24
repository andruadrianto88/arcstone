import Link from "next/link";
import Image from "next/image";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import WorkShowcase from "@/components/sections/WorkShowcase";
import AboutReveal from "@/components/sections/AboutReveal";
import CaseStudies from "@/components/sections/CaseStudies";
import StackReveal from "@/components/sections/StackReveal";

const plans = [
  {
    name: "Free Demo",
    price: "$0",
    priceLabel: "",
    desc: "See exactly what we'd build for your business before spending a cent.",
    features: [
      "20-minute strategy call",
      "Live site walkthrough",
      "Custom recommendations",
      "No credit card, no commitment",
    ],
    cta: "Get Your Free Mockup",
    href: "/contact",
    pillBg: "bg-white",
    cardBg: "bg-[#efefef]",
  },
  {
    name: "Basic",
    price: "$300",
    priceLabel: "one-time",
    desc: "Everything you need to launch a clean, professional site — without agency overhead. Perfect for small businesses getting online properly.",
    features: [
      "Up to 4 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 round of revisions",
      "7-day delivery",
    ],
    cta: "Start Your Site",
    href: "/contact",
    pillBg: "bg-white/80",
    cardBg: "bg-[#dbe4f3]",
    insetShadow: "inset 0 2px 12px rgba(0,0,60,0.12), inset 0 1px 4px rgba(0,0,60,0.08)",
  },
  {
    name: "Pro",
    price: "From $500",
    priceLabel: "one-time",
    desc: "For businesses that want a site that actually works hard for them. Most projects land between $500–$1,200.",
    features: [
      "Up to 10 pages",
      "Custom design & copywriting",
      "CMS — update content yourself",
      "SEO & performance optimised",
      "Analytics setup",
      "3 rounds of revisions",
      "14-day delivery",
      "30 days of support after launch",
    ],
    cta: "Request a Quote",
    href: "/contact",
    pillBg: "bg-white/80",
    cardBg: "bg-[#b8c8e8]",
    insetShadow: "inset 0 2px 12px rgba(0,0,60,0.12), inset 0 1px 4px rgba(0,0,60,0.08)",
  },
];

const services = [
  {
    name: "Web Design",
    desc: "Designed to guide visitors toward action — whether that's booking, buying, or getting in touch.",
    href: "/contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    name: "Development",
    desc: "Fast, reliable builds that load quickly and work flawlessly — no bloat, no surprises.",
    href: "/contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    name: "Copywriting",
    desc: "Clear, persuasive messaging that explains what you do and convinces people to choose you.",
    href: "/contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    name: "SEO",
    desc: "Set up so the right people can find you — and your site actually turns that traffic into customers.",
    href: "/contact",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
  },
];

const work = [
  {
    client: "Vossén",
    type: "Barbershop",
    desc: "Designed to make booking effortless — turning first-time visitors into regulars with a clear flow and frictionless experience.",
    results: [
      "500+ visitors on launch day",
      "Streamlined booking flow drove repeat clients",
      "Online bookings up 60% within the first month",
    ],
    stat: "+60%",
    statLabel: "Vossén",
    statDesc: "Online bookings increased 60% within the first month of launch.",
    href: "#",
    image: "/work1.png",
  },
  {
    client: "Uncle Hainanese",
    type: "Restaurant",
    desc: "Built to fill tables, not just look good — with a streamlined reservation flow and easy menu updates the team can manage without a developer.",
    highlight: "500+ visitors in less than one month.",
    results: [
      "Table reservations doubled after launch",
      "Faster menu updates — team does it in minutes",
      "Clearer reservation flow reduced no-shows",
    ],
    stat: "2x",
    statLabel: "Uncle Hainanese",
    statDesc: "Table reservations doubled within weeks of the new site going live.",
    href: "#",
    image: "/work2.png",
  },
  {
    client: "KORA",
    type: "Café",
    desc: "Designed to drive event sign-ups and keep regulars coming back — with clear updates, strong calls to action, and a site that works as hard as the team behind it.",
    results: [
      "Event bookings filled within 48 hours of launch",
      "40% more time spent on site per visit",
      "Strong CTAs turned browsers into regulars",
    ],
    stat: "+40%",
    statLabel: "KORA",
    statDesc: "Average dwell time increased 40% — visitors spend more time before visiting.",
    href: "#",
    image: "/work3.png",
  },
];




export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="border-b border-[#e8e8e8]">
        {/* Text block — centered */}
        <div className="wrap pt-12 pb-12 flex flex-col items-center text-center">
          <h1 className="max-w-3xl mb-5 font-semibold">
            Websites designed to bring in more customers
          </h1>
          <p className="text-[#555] text-lg max-w-md mb-8 leading-relaxed">
            Get a free custom homepage mockup for your business — and see how your site could perform before committing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/work" className="pill-accent shadow-[0_4px_12px_rgba(0,0,0,0.25)]">See Our Work →</Link>
            <Link href="/contact" className="pill-outline">Get Free Mockup →</Link>
          </div>
        </div>

        {/* Before / After */}
        <div className="wrap pb-16 pt-6">
          <div className="mx-16">
            {/* Headline */}
            <div className="text-center mb-3">
              <h2 className="text-[1.8rem] md:text-[2.2rem] font-bold tracking-tight text-[#111] mb-2">
                See the difference a better website makes
              </h2>
              <p className="text-[#555] text-base max-w-xl mx-auto">
                We redesign outdated websites into clean, modern experiences that turn visitors into bookings.
              </p>
            </div>

            {/* Slider */}
            <div className="mt-10">
              <BeforeAfterSlider
                before="/before.jpg"
                after="/after.jpeg"
                beforeAlt="Before — outdated website"
                afterAlt="After — modern website"
              />
            </div>

            {/* Callouts + CTA */}
            <div className="mt-6 flex flex-col items-center gap-6">
              {/* Why it works better */}
              <div className="flex flex-col items-center">
                <p className="text-center text-[11px] font-bold uppercase tracking-widest text-[#aaa] mb-4">Why it works better</p>
                <div className="flex gap-10">
                  <ul className="flex flex-col gap-2">
                    {["Hard to navigate", "Outdated design", "No clear booking flow"].map((t) => (
                      <li key={t} className="flex items-center gap-2 text-[13px] text-[#555]">
                        <span className="text-[#cc2200] font-bold text-[11px]">✕</span> {t}
                      </li>
                    ))}
                  </ul>
                  <div className="w-px bg-[#e8e8e8]" />
                  <ul className="flex flex-col gap-2">
                    {["Clean, modern layout", "Mobile-friendly", `Clear "Book Now" action`].map((t) => (
                      <li key={t} className="flex items-center gap-2 text-[13px] text-[#555]">
                        <span className="text-[#1a7a3c] font-bold text-[11px]">✓</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-center gap-2 pt-2">
                <p className="text-[#111] font-semibold text-base">Want this for your business?</p>
                <Link href="/contact" className="pill-dark shadow-[0_4px_12px_rgba(0,0,0,0.2)]">Get your free mockup →</Link>
                <p className="text-[#aaa] text-[12px] mt-1">No commitment. See your site before paying anything.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STACKING GROUP: scoped container so sticky doesn't bleed out ── */}
      <div className="relative isolate">
        <section id="work" className="border-b border-[#e8e8e8] bg-white pt-12 pb-10">
          <div className="wrap">
            <div className="mx-16">
              <span className="label"><mark className="bg-yellow-100 text-inherit">Real results from recent projects</mark></span>
              <h2 className="max-w-lg mb-0">
                Websites designed to bring<br />in more customers.
              </h2>
            </div>
            <div className="mx-4 md:mx-16">
              <WorkShowcase work={work} />
            </div>
            <div className="mx-16 mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-[#555] text-sm">Want something like this for your business?</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#111] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-black transition-colors duration-200 shrink-0">
                Get your free homepage mockup →
              </Link>
            </div>
          </div>
        </section>

        <div className="relative z-10">
          <StackReveal>
            <AboutReveal as="h2" />
          </StackReveal>
          <CaseStudies />
        </div>
      </div>

      {/* ── PROOF STRIP ─────────────────────────────────── */}
      <section className="relative bg-[#101010] text-white overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "repeating-linear-gradient(to right, #fff 0 1px, transparent 1px 24px)" }}
        />
        <div className="relative wrap">
          <div className="mx-16 pt-16 pb-16 md:pt-20 md:pb-20">
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                { stat: "500+", label: "Visitors in less than a month", sub: "Uncle Hainanese Chicken Rice" },
                { stat: "2×", label: "Bookings after launch", sub: "Local Adelaide businesses" },
                { stat: "14 days", label: "Average time to go live", sub: "From first call to launch" },
              ].map(({ stat, label, sub }) => (
                <div key={stat} className="flex flex-col gap-2 px-0 md:px-10 first:pl-0 last:pr-0 py-8 md:py-0">
                  <p className="text-[52px] md:text-[64px] font-extrabold leading-none tracking-tight text-white">{stat}</p>
                  <p className="text-[15px] font-semibold text-white/90 leading-snug">{label}</p>
                  <p className="text-[12px] text-white/40 tracking-wide">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ───────────────────────────────────── */}
      <section className="relative bg-[#101010] text-white overflow-hidden pt-16 pb-14 md:pt-20 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #fff 0 0.5px, transparent 0.5px 24px)",
          }}
        />
        <div className="relative wrap">
          <p className="max-w-[1600px] mx-auto text-[24px] md:text-[34px] leading-[1.25] tracking-tight font-semibold">
            <span className="inline-block w-12 md:w-20" />
            We&apos;re a small team — and that&apos;s the point. No account managers, no junior handoffs, no broken telephone. When you work with{" "}<Image src="/logo.png" alt="GoodSites" width={34} height={7} className="inline-block align-middle mx-1" unoptimized />{" "}<span style={{ fontFamily: "var(--font-mango)", letterSpacing: "0.01em", fontStyle: "normal", fontWeight: 700 }}>GOODSITES</span>, you work directly with the people building your site.
          </p>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section id="services" className="s border-b border-[#e8e8e8] bg-[#f7f7f7]">
        <div className="wrap">
          <div className="mx-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">

              {/* Left: heading + desc */}
              <div className="flex flex-col justify-start pt-1">
                <span className="label"><mark className="bg-yellow-100 text-inherit">Services</mark></span>
                <h2 className="mb-5 leading-[1.1]">
                  Everything you need to{" "}
                  <span className="text-[#bbb]">turn visitors into customers.</span>
                </h2>
                <p className="text-[#555] text-sm leading-relaxed max-w-xs">
                  Everything is handled in-house — from design to development — so nothing gets lost in translation.
                </p>
              </div>

              {/* Right: 2×2 grid */}
              <div className="grid grid-cols-2 border-l border-[#e0e0e0]">
                {services.map((svc, i) => (
                  <Link
                    key={svc.name}
                    href={svc.href}
                    className="group flex flex-col gap-4 p-7 border-b border-r border-[#e0e0e0] bg-[#f7f7f7] hover:bg-white transition-colors duration-200"
                    style={{
                      borderRight: (i % 2 === 1) ? "none" : undefined,
                      borderBottom: (i >= 2) ? "none" : undefined,
                    }}
                  >
                    <div className="text-[#333]">{svc.icon}</div>
                    <div className="flex-1">
                      <p className="text-[#111] font-bold text-[0.95rem] mb-1 leading-snug">{svc.name}</p>
                      <p className="text-[#777] text-xs leading-relaxed">{svc.desc}</p>
                    </div>
                    <div className="w-9 h-9 bg-[var(--accent)] flex items-center justify-center shrink-0">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section id="process" className="s border-b border-[#e8e8e8]">
        <div className="wrap">
          <div className="flex justify-center ml-36">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 max-w-4xl w-full">

              {/* Left: heading + desc + CTA */}
              <div className="flex flex-col justify-start pt-1">
                <span className="label"><mark className="bg-yellow-100 text-inherit">How it works</mark></span>
                <h2 className="mb-5 leading-[1.1]">
                  See your website{" "}
                  <span className="text-[#bbb]">before you commit.</span>
                </h2>
                <p className="text-[#555] text-sm leading-relaxed max-w-xs mb-8">
                  Most projects are live within 1–2 weeks — with full visibility at every step.
                </p>
              </div>

              {/* Right: vertical steps */}
              <div className="flex flex-col">
                {[
                  {
                    n: "01",
                    title: "Quick Chat — Day 1",
                    desc: "A short call to understand your business and what you need. No pitch, no pressure — just making sure we're a good fit.",
                  },
                  {
                    n: "02",
                    title: "Free Homepage Mockup — Days 2–4",
                    desc: "We design a custom homepage for your business — completely free. You review it and only move forward if you're happy.",
                  },
                  {
                    n: "03",
                    title: "Build — Days 5–10",
                    desc: "We build the full site, write the copy, and set everything up. You stay hands-off while we handle it.",
                  },
                  {
                    n: "04",
                    title: "Launch — Day 14",
                    desc: "Your site goes live. Everything is handed over, with support after launch if you need it.",
                  },
                ].map((step, i, arr) => (
                  <div key={step.n} className="flex gap-5 group">
                    {/* Timeline column */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#111] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {step.n}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-px flex-1 bg-[#e0e0e0]" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-10">
                      <p className="text-[#111] font-bold text-[0.95rem] mb-1.5 leading-snug">{step.title}</p>
                      <p className="text-[#777] text-sm leading-relaxed max-w-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
        <div className="wrap mt-12 flex flex-col items-center text-center gap-4">
          <p className="text-[#111] font-semibold text-base">Want to see what your site could look like?</p>
          <Link href="/contact" className="pill-dark shadow-[0_4px_12px_rgba(0,0,0,0.2)]">Get your free mockup →</Link>
        </div>
      </section>


      {/* ── PRICING ─────────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-[#fafafa]">
        <div className="wrap flex flex-col items-center">
          <h2 className="text-4xl md:text-[2.6rem] font-bold tracking-tight text-[#111] mb-2 text-center">Simple pricing</h2>
          <p className="text-[#333] text-[15px] mb-2 font-medium tracking-tight text-center">No hidden fees. No retainers. Pay once, own it forever.</p>
          <p className="text-[#555] text-[13px] mb-3 text-center">You&apos;ve already seen your homepage before paying — no surprises.</p>
          <p className="text-[#888] text-[13px] mb-12 text-center font-medium">Built for 10+ local businesses and growing</p>
          <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center max-w-5xl mx-auto w-full px-4">
            {plans.map((p) => (
              <div key={p.name} className="rounded-[2rem] bg-white shadow-[0_12px_40px_rgb(0,0,0,0.06)] flex flex-col p-2.5 w-full md:w-[330px]">
                {/* Top inset container */}
                <div className={`rounded-[1.6rem] ${p.cardBg} pt-6 px-6 pb-6 relative`} style={'insetShadow' in p ? { boxShadow: (p as any).insetShadow } : undefined}>
                  <div className="mb-14">
                    <span className={`${p.pillBg} text-[#333] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm`}>
                      {p.name}
                    </span>
                  </div>
                  <div className="mb-1 flex items-baseline">
                    <span className="text-[2.5rem] leading-none font-bold tracking-[-0.03em] text-[#111]">{p.price}</span>
                    {p.priceLabel && <span className="text-[15px] font-semibold text-[#111] ml-1">/{p.priceLabel}</span>}
                  </div>
                  <p className="text-[14px] tracking-tight text-[#333] font-medium mt-3 mb-6">{p.desc}</p>
                  
                  <Link href={p.href}
                    className="flex items-center justify-center w-full py-3.5 rounded-2xl text-[14px] font-medium bg-[#1d1d1f] text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:bg-black transition-all duration-200 hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
                    {p.cta}
                  </Link>
                </div>
                {/* Bottom: features */}
                <div className="px-6 pt-6 pb-6 flex flex-col flex-1">
                  <ul className="flex flex-col gap-4 relative z-10">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3.5 text-[14px]">
                        <svg className="mt-[3px] shrink-0 text-[#a1a1aa]" width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M3.5 8.5l2.5 2.5 6.5-6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[#3f3f46] font-medium tracking-tight leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE DEMO CTA ───────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "320px" }}>
        <img
          src="/hero_bg.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ transform: "rotate(180deg)", objectPosition: "center bottom" }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full pt-16 pb-32 px-6">
          <span className="label mb-2">Free, no strings</span>
          <h2 className="max-w-2xl mb-4 font-semibold">
            <span className="whitespace-nowrap">Not sure if we&apos;re the right fit?</span><br />See your website before you decide.
          </h2>
          <p className="text-[#555] text-base max-w-md mb-8 leading-relaxed">
            We design a free homepage for your business — so you know exactly what you&apos;re getting before paying anything. No pressure, no commitment.
          </p>
          <Link href="/contact" className="pill-dark shadow-[0_4px_12px_rgba(0,0,0,0.2)]">See Your Free Mockup →</Link>
        </div>
      </section>
    </>
  );
}
