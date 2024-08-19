import Section from "components/section";
import { getHomePage } from "lib/contentstack";
import type { Metadata } from "next";

export async function generateMetadata() {
  const homePage = await getHomePage();

  const metadata: Metadata = {
    description: homePage.seo?.meta_description,
    robots: {
      index: !!homePage.seo?.enable_search_indexing,
    },
    title: homePage.seo?.meta_title,
  };

  return metadata;
}

export default async function HomePage() {
  const homePage = await getHomePage();

  return (
    <div className="grid grid-cols-1 gap-y-12 py-12">
      {homePage.sections.map(({ section }: any, index: number) => {
        return (
          <Section
            key={section._metadata.uid}
            index={index}
            section={section}
          />
        );
      })}
    </div>
  );
}
