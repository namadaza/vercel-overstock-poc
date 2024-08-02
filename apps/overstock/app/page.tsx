import { HeroOne2x1 } from "components/banners/hero-one-2x1";
import { HeroThree1x1 } from "components/banners/hero-three-1x1";
import { HeroTwo3x1 } from "components/banners/hero-two-3x1";
import Footer from "components/layout/footer";
import { LivePreviewQuery } from "contentstack";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage({
  searchParams,
}: {
  searchParams: LivePreviewQuery | undefined;
}) {
  return (
    <>
      <HeroOne2x1 searchParams={searchParams} />
      <HeroTwo3x1 searchParams={searchParams} />
      <HeroThree1x1 searchParams={searchParams} />
      <Footer />
    </>
  );
}
