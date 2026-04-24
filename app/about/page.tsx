import type { Metadata } from "next";
import AboutReveal from "@/components/sections/AboutReveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "We're a small, senior web design team in Adelaide. No account managers, no junior handoffs — just direct collaboration with the people building your site.",
  openGraph: {
    title: "About Us | GoodSites",
    description: "We're a small, senior web design team in Adelaide. No account managers, no junior handoffs — just direct collaboration with the people building your site.",
    url: "https://goodsites.com.au/about",
  },
};

export default function About() {
  return (
    <div className="-mt-20 pt-20 bg-[#101010]">
      <AboutReveal as="h1" />
    </div>
  );
}
