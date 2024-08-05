import { HeroOne2x1 } from "components/banners/hero-one-2x1";
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
      <div className="container mx-auto py-4 px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3 w-full">
          <div>
            <div className="aspect-square bg-brand-red w-full" />
          </div>
          <div>
            <div className="aspect-square bg-brand-red w-full" />
          </div>
          <div>
            <div className="aspect-square bg-brand-red w-full" />
          </div>
        </div>
      </div>
      <div className="py-4 w-full">
        <div className="w-full aspect-[5/1] bg-brand-pink" />
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6">
        Featured Deals
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3 w-full">
          <div>
            <div className="aspect-[9/5] bg-brand-red w-full" />
          </div>
          <div>
          <div className="aspect-[9/5] bg-brand-red w-full" />
          </div>
          <div>
          <div className="aspect-[9/5] bg-brand-red w-full" />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-4 w-full">
          <div>
            <div className="aspect-square bg-brand-red w-full" />
          </div>
          <div>
            <div className="aspect-square bg-brand-red w-full" />
          </div>
          <div>
            <div className="aspect-square bg-brand-red w-full" />
          </div>
          <div>
            <div className="aspect-square bg-brand-red w-full" />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6">
        Shop By Category
      </div>
      <Footer />
    </>
  );
}
