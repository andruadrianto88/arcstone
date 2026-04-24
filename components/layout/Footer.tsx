import Link from "next/link";

const cols = [
  {
    heading: "Services",
    links: [
      { label: "Web Design",   href: "/services" },
      { label: "SEO & Growth", href: "/services" },
      { label: "Copywriting",  href: "/services" },
      { label: "Maintenance",  href: "/services" },
      { label: "Branding",     href: "/services" },
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
      <div className="wrap py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white font-extrabold text-xl tracking-tight mb-3">GoodSites</p>
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
              <li className="flex gap-4 pt-1">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
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
