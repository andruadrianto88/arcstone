import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mango = localFont({
  src: "./fonts/Nohemi-VF.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "100 900",
});

const round8 = localFont({
  src: "./fonts/Round8-Four.otf",
  variable: "--font-round8",
  display: "swap",
});

const mangoGrotesque = localFont({
  src: "./fonts/MangoGrotesque-VF.ttf",
  variable: "--font-mango",
  display: "swap",
  weight: "100 900",
});

const harmond = localFont({
  src: [
    { path: "./fonts/Harmond-ExtraBoldExpanded.otf", weight: "800", style: "normal" },
    { path: "./fonts/Harmond-SemiBoldCondensed.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-harmond",
  display: "swap",
});

const BASE_URL = "https://goodsites.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GoodSites — Web Design Adelaide",
    template: "%s | GoodSites",
  },
  description: "Affordable, custom websites for small businesses in Adelaide. Web design, SEO, copywriting and maintenance. Get a free quote today.",
  keywords: ["web design Adelaide", "small business website", "affordable website Adelaide", "SEO Adelaide", "website design"],
  authors: [{ name: "GoodSites", url: BASE_URL }],
  creator: "GoodSites",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: BASE_URL,
    siteName: "GoodSites",
    title: "GoodSites — Web Design Adelaide",
    description: "Affordable, custom websites for small businesses in Adelaide. Web design, SEO, copywriting and maintenance. Get a free quote today.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GoodSites — Web Design Adelaide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoodSites — Web Design Adelaide",
    description: "Affordable, custom websites for small businesses in Adelaide.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/logo_box.jpeg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mango.variable} ${harmond.variable} ${round8.variable} ${mangoGrotesque.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
