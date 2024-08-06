import { HeroOne2x1 } from "components/banners/hero-one-2x1";
import Footer from "components/layout/footer";
import Slider from "components/slider";
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
            <div className="aspect-square bg-black w-full" />
          </div>
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
        </div>
      </div>
      <div className="py-4 w-full">
        <div className="w-full aspect-[5/1] bg-black" />
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6">
      <h2 className="text-[36px]/[48px] font-bold">Featured Deals</h2>
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3 w-full">
        <div className="col-span-full"><h2 className="text-[36px]/[48px] font-bold">Discover Brands You{"'"}ll Love</h2></div>
          <div>
            <div className="aspect-[9/5] bg-black w-full" />
          </div>
          <div>
          <div className="aspect-[9/5] bg-black w-full" />
          </div>
          <div>
          <div className="aspect-[9/5] bg-black w-full" />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-4 w-full">
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
          <div>
            <div className="aspect-square bg-black w-full" />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4 px-4 lg:px-6 gap-4 grid grid-cols-1">
        <h2 className="text-[36px]/[48px] font-bold">Shop By Category</h2>
        <Slider>
          <div>
            <div className="bg-black w-full aspect-square rounded-full" />
          </div>
          <div>
            <div className="bg-black w-full aspect-square rounded-full" />
          </div>
          <div>
            <div className="bg-black w-full aspect-square rounded-full" />
          </div>
          <div>
            <div className="bg-black w-full aspect-square rounded-full" />
          </div>
          <div>
            <div className="bg-black w-full aspect-square rounded-full" />
          </div>
          <div>
            <div className="bg-black w-full aspect-square rounded-full" />
          </div>
          <div>
            <div className="bg-black w-full aspect-square rounded-full" />
          </div>
          <div>
            <div className="bg-black w-full aspect-square rounded-full" />
          </div>
        </Slider>
      </div>
      <Footer />
    </>
  );
}
