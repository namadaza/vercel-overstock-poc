import Section from "components/section";
import type { LivePreviewQuery } from "contentstack";
import { getHomePage } from "lib/contentstack";

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

    return <Section key={section._metadata.uid} section={section} />
  })}
  </div>
}
