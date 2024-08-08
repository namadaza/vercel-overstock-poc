import Category, { CategoryType } from "components/category";
import FeaturedDeals from "components/featured-deals";
import Slider from "components/slider";
import type { LivePreviewQuery } from "contentstack";
import { getHomePage } from "lib/contentstack";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  description:
    "Crazy-Good Deals",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: LivePreviewQuery | undefined;
}) {
  const homePage = await getHomePage()

  return <div className="grid grid-cols-1 gap-y-12 py-12">
  {homePage.sections.map(({ section }: any) => {
    return <div className={`${section.is_screen_width ? 'w-full' : 'container mx-auto px-4 lg:px-6'} gap-4 grid grid-cols-1`} key={section._metadata.uid}>
      {!!section.title && <h2 className="text-[36px]/[48px] font-bold">{section.title}</h2>}
      {section.is_featured_deals && <FeaturedDeals />}
      {section.has_slider && <Slider desktopColumns={section.desktop_columns} mobileColumns={section.mobile_columns} viewport={section.slider_type}>
        {(section.cards ?? []).map(({ card }: { card: CategoryType }) => {
          return <Category key={card._metadata?.uid} category={card} />
        })}
      </Slider>}
      {!section.has_slider && <div className="w-full flex-col md:flex-row flex gap-4">{(section.cards ?? []).map(({ card }: { card: any }) => {
          return <Link className="md:flex-1" href={card.url} key={card._metadata.uid}>
            {!!card.image &&
            <Image alt="Hello World" className="block w-full h-auto" height={card.image.dimension.height} src={card.image.url} width={card.image.dimension.width} unoptimized />}
            {!card.image && <div className="w-full bg-black aspect-[5/1]" />}
          </Link>
        })}
        </div>}
    </div>
  })}
  </div>
}
