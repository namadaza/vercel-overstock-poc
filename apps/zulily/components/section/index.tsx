import Category, { type CategoryType } from "components/category";
import FeaturedDeals from "components/featured-deals";
import Slider from "components/slider";
import Link from "next/link";
import SvgOverlay from "../svg-overlay";
import SectionImage from "./image";

function Section({ index, section }: { index: number; section: any }) {
  const viewport = section.viewport ?? "both";
  const isDesktop = ["both", "desktop"].includes(viewport);
  const isMobile = ["both", "mobile"].includes(viewport);

  return (
    <div
      className={`${section.is_screen_width ? "w-full" : "container mx-auto px-4 lg:px-6"} ${isMobile ? "grid" : "hidden"} ${isDesktop ? "md:grid" : "md:hidden"} gap-4 grid-cols-1`}
    >
      {!!section.title && (
        <h2 className="text-[36px]/[48px] font-bold">{section.title}</h2>
      )}
      {section.is_featured_deals && <FeaturedDeals />}
      {section.has_slider && (
        <Slider
          desktopColumns={section.desktop_columns}
          mobileColumns={section.mobile_columns}
          viewport={section.slider_type}
        >
          {(section.cards ?? []).map(({ card }: { card: CategoryType }) => {
            return <Category key={card._metadata?.uid} category={card} />;
          })}
        </Slider>
      )}
      {!section.has_slider && (
        <div className="w-full flex-col md:flex-row flex gap-4">
          {(section.cards ?? []).map(({ card }: { card: any }) => {
            return (
              <Link
                className="md:flex-1 relative"
                href={card.url}
                key={card._metadata.uid}
              >
                {!!card.image && (
                  <SectionImage image={card.image} sectionIndex={index} />
                )}
                {!!card.svg && (
                  <SvgOverlay 
                     sectionIndex={index}  
                     svg={card.svg}
                  />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Section;
