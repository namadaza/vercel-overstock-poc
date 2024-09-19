import Section from "components/section";
import { getHomePage } from "lib/contentstack";
import type { Metadata } from "next";

export async function generateMetadata() {
  const { seo } = await getHomePage();

  if (!seo) {
    return {};
  }

  const metadata: Metadata = {
    description: seo.meta_description,
    robots: {
      index: !!seo.enable_search_indexing,
    },
    title: seo.meta_title,
  };

  return metadata;
}

export default async function HomePage() {
  const homePage = await getHomePage();
  const featuredDealsIndex = homePage.sections.findIndex(({ section }: any) => section.is_featured_deals)

  return (
    <div className="grid grid-cols-1 gap-y-12 py-12">
      {homePage.sections.map(({ section }: any, index: number) => {
        return (
          <Section
            key={section._metadata.uid}
            featuredDealsIndex={featuredDealsIndex}
            index={index}
            section={section}
          />
        );
      })}
    </div>
  );
}
