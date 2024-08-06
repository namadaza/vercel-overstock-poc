import { LivePreviewQuery } from "contentstack";
import { getHeaderThree1x1, setLivePreviewQueryParams } from "lib/contentstack";
import Image from "next/image";
import Link from "next/link";

export async function HeroThree1x1({
  searchParams,
}: {
  searchParams: LivePreviewQuery | undefined;
}) {
  const heroItems = await getHeaderThree1x1();
  setLivePreviewQueryParams(searchParams);

  const bannerDetails = heroItems?.[0]?.[0];

  if (!bannerDetails) return null;

  const banner = {
    imgUrl: bannerDetails.image_url.href,
    linkUrl: bannerDetails.content_link.href,
    imgUrlSmall: bannerDetails.image_url_small.href,
  };


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <div className="grid grid-cols-1 gap-4">
        <Link href={banner.linkUrl} className="block w-full">
          <Image
            src={banner.imgUrl}
            alt={""}
            width={1400}
            height={300}
            className="w-full h-auto object-cover hidden sm:block"
          />
          <Image
            src={banner.imgUrlSmall}
            alt={""}
            width={600}
            height={300}
            className="w-full h-auto object-cover block sm:hidden"
          />
        </Link>
      </div>
    </div>
  );
}
