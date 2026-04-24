import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Mockup",
  description: "Get a free custom homepage mockup for your Adelaide business — no commitment, no credit card. See exactly what your new website could look like before paying anything.",
  openGraph: {
    title: "Get Your Free Mockup | GoodSites",
    description: "Get a free custom homepage mockup for your Adelaide business — no commitment, no credit card.",
    url: "https://goodsites.com.au/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
