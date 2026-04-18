import Link from "next/link";
import WorkShowcase from "@/components/sections/WorkShowcase";
import AboutReveal from "@/components/sections/AboutReveal";
import CaseStudies from "@/components/sections/CaseStudies";

const plans = [
  {
    name: "Starter",
    price: "$0",
    priceLabel: "",
    desc: "Perfect For Small Businesses",
    features: [
      "20-minute strategy call",
      "Live website walkthrough",
      "Custom recommendations",
      "No credit card, no commitment",
    ],
    cta: "Book a Demo",
    href: "/contact",
    pillBg: "bg-white",
    cardBg: "bg-[#efefef]",
  },
  {
    name: "Basic",
    price: "$1,800",
    priceLabel: "one-time",
    desc: "Perfect For Growing Businesses",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "2 weeks delivery",
    ],
    cta: "Get Started",
    href: "/contact",
    pillBg: "bg-white/80",
    cardBg: "bg-[#dbe4f3]",
  },
  {
    name: "Pro",
    price: "$3,800",
    priceLabel: "one-time",
    desc: "For Growing Online Businesses",
    features: [
      "Up to 12 pages",
      "Custom design & copywriting",
      "Advanced SEO & performance",
      "CMS so you can update content",
      "Analytics & conversion setup",
      "3 rounds of revisions",
      "Priority support for 60 days",
    ],
    cta: "Contact Us",
    href: "/contact",
    pillBg: "bg-white",
    cardBg: "bg-[#efefef]",
  },
];

const services = [
  {
    name: "Web Design",
    desc: "Beautiful, conversion-focused websites built to impress from first click.",
    href: "/services",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    name: "SEO & Growth",
    desc: "Rank higher, get found, and drive organic enquiries month after month.",
    href: "/services",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
  },
  {
    name: "Copywriting",
    desc: "Words that sell. We write every page so your site actually converts.",
    href: "/services",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    name: "AI & Automation",
    desc: "Save time and scale faster with smart automations built into your workflow.",
    href: "/services",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z"/>
        <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z"/>
      </svg>
    ),
  },
];

const work = [
  {
    client: "The Local Bistro",
    type: "Restaurant",
    desc: "A full redesign that doubled online bookings in the first month. Built a custom menu CMS so staff can update it themselves — no developer needed.",
    results: [
      "Bookings doubled within 30 days of launch",
      "Custom CMS so staff update menus without a developer",
      "Mobile-first design built for hungry customers on the go",
    ],
    stat: "2x",
    statLabel: "The Local Bistro",
    statDesc: "Online bookings doubled within the first month of launch.",
    href: "#",
    image: "/work1.png",
  },
  {
    client: "Adelaide Plumbing Co.",
    type: "Trades",
    desc: "Went from a broken WordPress site to a fast, lead-generating machine. Now ranks #1 in Adelaide for their core keywords and gets 3x the enquiries.",
    results: [
      "Ranks #1 in Adelaide for primary search terms",
      "3x increase in monthly enquiries since launch",
      "Site loads in under 1.5s — faster than 95% of competitors",
    ],
    stat: "3x",
    statLabel: "Adelaide Plumbing Co.",
    statDesc: "Monthly enquiries tripled after launch. Now ranks #1 in Adelaide.",
    href: "#",
    image: "/work2.png",
  },
  {
    client: "Greenfield Retail",
    type: "E-commerce",
    desc: "A clean, conversion-focused online store that turned browsers into buyers. Integrated with their existing inventory system from day one.",
    results: [
      "Conversion rate lifted from 1.2% to 3.8% post-launch",
      "Fully integrated with existing inventory and POS system",
      "Built-in SEO foundations driving organic traffic from month one",
    ],
    stat: "+3.1%",
    statLabel: "Greenfield Retail",
    statDesc: "Conversion rate jumped from 1.2% to 3.8% post-launch.",
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
            We build affordable websites for Adelaide businesses
          </h1>
          <p className="text-[#555] text-lg max-w-md mb-8 leading-relaxed">
            Small businesses, restaurants, and local brands — great websites
            without the big agency price tag.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/work" className="pill-accent shadow-[0_4px_12px_rgba(0,0,0,0.25)]">See Our Work →</Link>
            <Link href="/contact" className="pill-outline">Get a Free Demo →</Link>
          </div>
        </div>

        {/* Image showcase */}
        <div className="wrap pb-0">
          <div className="mx-16 rounded-3xl bg-[#f3f3f3] border border-[#e8e8e8] p-3">
            <div className="block relative rounded-2xl overflow-hidden group h-[540px]">
              <video
                src="/vid1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              {/* Center button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Link href="/#work" className="pointer-events-auto flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/10 text-white text-[15px] font-semibold px-8 py-4 rounded-full hover:bg-black/60 transition-all duration-300 transform group-hover:scale-105">
                  See works
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STACKING GROUP: Work pins, About + Case Studies scroll over it ── */}
      <div className="relative">
        {/* Featured Work — sticky pin */}
        <section id="work" className="s border-b border-[#e8e8e8] sticky top-0 z-0 bg-white">
          <div className="wrap">
            <div className="mx-16">
              <span className="label"><mark className="bg-yellow-100 text-inherit">Recent Work</mark></span>
              <h2 className="max-w-lg mb-0">
                Work that speaks<br />for itself.
              </h2>
              <WorkShowcase work={work} />
            </div>
          </div>
        </section>

        {/* About — covers Work as it scrolls up */}
        <div className="relative z-10">
          <AboutReveal as="h2" />
        </div>

        {/* Case Studies — continues the dark stack */}
        <div className="relative z-10">
          <CaseStudies />
        </div>
      </div>

      {/* ── MANIFESTO ───────────────────────────────────── */}
      <section className="relative bg-[#101010] text-white overflow-hidden border-b border-black py-14 md:py-20">
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
            We are an eCommerce agency. Not just execution, not isolated services. We provide brand direction, advanced tech, performance marketing and system integration as one connected approach. An end-to-end ecosystem designed to scale, perform and integrate seamlessly with existing platforms.
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
                <h2 className="mb-5 leading-tight">
                  Everything you need,{" "}
                  <span className="text-[#bbb]">all under one roof.</span>
                </h2>
                <p className="text-[#555] text-sm leading-relaxed max-w-xs">
                  From first concept to live site — we handle design, copy, SEO, and ongoing support so you can focus on running your business.
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
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 max-w-4xl w-full">

              {/* Left: heading + desc + CTA */}
              <div className="flex flex-col justify-start pt-1">
                <span className="label"><mark className="bg-yellow-100 text-inherit">How it works</mark></span>
                <h2 className="mb-5 leading-tight">
                  Simple process,{" "}
                  <span className="text-[#bbb]">no surprises.</span>
                </h2>
                <p className="text-[#555] text-sm leading-relaxed max-w-xs mb-8">
                  From first chat to live site in as little as two weeks. No jargon, no scope creep, no surprises on the invoice.
                </p>
              </div>

              {/* Right: vertical steps */}
              <div className="flex flex-col">
                {[
                  {
                    n: "01",
                    title: "Discovery Call",
                    desc: "20 minutes to understand your business, goals, and what you actually need — no pitch, no pressure.",
                  },
                  {
                    n: "02",
                    title: "Design & Build",
                    desc: "We handle design, copy, and development. You stay in the loop without getting buried in decisions.",
                  },
                  {
                    n: "03",
                    title: "Review & Refine",
                    desc: "You preview the live site and request changes. We iterate until you&apos;re 100% happy.",
                  },
                  {
                    n: "04",
                    title: "Launch & Grow",
                    desc: "We go live, hand everything over, and stay on call for ongoing support and growth.",
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
      </section>


      {/* ── PRICING ─────────────────────────────────────── */}
      <section id="pricing" className="py-24 bg-[#fafafa]">
        <div className="wrap flex flex-col items-center">
          <h2 className="text-4xl md:text-[2.6rem] font-bold tracking-tight text-[#111] mb-2 text-center">Pricing plans</h2>
          <p className="text-[#333] text-[15px] mb-12 font-medium tracking-tight text-center">Choose the right plan for your needs.</p>
          <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center max-w-5xl mx-auto w-full px-4">
            {plans.map((p) => (
              <div key={p.name} className="rounded-[2rem] bg-white shadow-[0_12px_40px_rgb(0,0,0,0.06)] flex flex-col p-2.5 w-full md:w-[330px]">
                {/* Top inset container */}
                <div className={`rounded-[1.6rem] ${p.cardBg} pt-6 px-6 pb-6 relative`}>
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
          <span className="label mb-2">No commitment</span>
          <h2 className="max-w-2xl mb-4 font-semibold">
            Not sure where to start?<br />That&apos;s exactly what the demo is for.
          </h2>
          <p className="text-[#555] text-base max-w-md mb-8 leading-relaxed">
            Book a free 20-minute demo. We&apos;ll show you what we can build — no pressure, no invoice, no strings.
          </p>
          <Link href="/contact" className="pill-dark shadow-[0_4px_12px_rgba(0,0,0,0.2)]">Book a Free Demo →</Link>
        </div>
      </section>
    </>
  );
}
