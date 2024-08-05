import { HeroFive4x1 } from "components/banners/hero-five-4x1";
import { HeroFour3x1 } from "components/banners/hero-four-3x1";
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
      <HeroFour3x1 searchParams={searchParams} />
      <HeroFive4x1 searchParams={searchParams} />
      <Footer />
    </>
  );
}
