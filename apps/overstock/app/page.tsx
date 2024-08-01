import { HeroOne2x1 } from "components/banners/hero-one-2x1";
import Footer from "components/layout/footer";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroOne2x1 />
      <Footer />
    </>
  );
}
