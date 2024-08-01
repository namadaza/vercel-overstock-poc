import { HeroOne2x1 } from "components/banners/hero-one-2x1";
import Footer from "components/layout/footer";
import { LivePreviewQuery } from "contentstack";
import { setLivePreviewQueryParams } from "lib/contentstack";

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
  setLivePreviewQueryParams(searchParams);

  return (
    <>
      <HeroOne2x1 />
      <Footer />
    </>
  );
}
