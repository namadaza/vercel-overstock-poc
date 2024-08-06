import Slider from "components/slider";
import type { LivePreviewQuery } from "contentstack";
import { getHomePage } from "lib/contentstack";
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

  return <>
  {homePage.sections.map(({ section }: any) => {
    return <div className={`${section.is_screen_width ? '' : 'container mx-auto px-4 lg:px-6'} py-4 gap-4 grid grid-cols-1`} key={section._metadata.uid}>
      {!!section.title && <h2 className="text-[36px]/[48px] font-bold">{section.title}</h2>}
      {section.has_slider && <Slider desktopColumns={section.desktop_columns} mobileColumns={section.mobile_columns} viewport={section.slider_type}>
        {(section.cards ?? []).map(({ card }: { card: any }) => {
          return <Link href={card.url} key={card._metadata.uid}>
            <div className="w-full aspect-[3/1] bg-black mb-4" />
            {card.title}
            </Link>
        })}
      </Slider>}
      {!section.has_slider && <div className="w-full md:flex gap-4">{(section.cards ?? []).map(({ card }: { card: any }) => {
          return <Link className="md:flex-1" href={card.url} key={card._metadata.uid}>
            <div className="w-full bg-black aspect-[5/1] mb-4" />
          </Link>
        })}
        </div>}
    </div>
  })}
  </>
}
