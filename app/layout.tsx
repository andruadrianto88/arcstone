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

export const metadata: Metadata = {
  title: "GoodSites — Web Design Adelaide",
  description: "Affordable, custom websites for small businesses in Adelaide. Web design, SEO, copywriting and maintenance. Get a free quote today.",
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
