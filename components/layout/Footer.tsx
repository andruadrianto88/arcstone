import Link from "next/link";

const cols = [
  {
    heading: "Services",
    links: [
      { label: "Web Design",   href: "/#services" },
      { label: "Development",  href: "/#services" },
      { label: "Copywriting",  href: "/#services" },
      { label: "SEO",          href: "/#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",   href: "/about"   },
      { label: "Work",    href: "/work"    },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#666]">
      <div className="wrap py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white text-xl mb-3" style={{ fontFamily: "var(--font-mango)", letterSpacing: "0.01em", fontWeight: 700 }}>GOODSITES</p>
            <p className="text-sm leading-relaxed text-[#555]">
              Websites for Adelaide businesses.<br />Fast, affordable, built to last.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.heading}>
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Contact</p>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:hello@goodsites.com.au" className="hover:text-white transition-colors">hello@goodsites.com.au</a></li>
              <li>Adelaide, SA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} GoodSites. Built in Adelaide.</p>
        </div>
      </div>
    </footer>
  );
}
