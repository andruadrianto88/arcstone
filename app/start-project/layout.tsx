import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Project",
  description: "Tell us about your project and we'll get back to you with a tailored quote. Website builds for Adelaide small businesses — from $300.",
  openGraph: {
    title: "Start Your Project | GoodSites",
    description: "Tell us about your project and we'll get back to you with a tailored quote.",
    url: "https://goodsites.com.au/start-project",
  },
};

export default function StartProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
