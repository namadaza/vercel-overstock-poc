import { LivePreviewQuery } from "contentstack";
import { getHeaderOne2x1, setLivePreviewQueryParams } from "lib/contentstack";
import Image from "next/image";
import Link from "next/link";

export async function HeroOne2x1({
  searchParams,
}: {
  searchParams: LivePreviewQuery | undefined;
}) {
  const heroItems = await getHeaderOne2x1();
  setLivePreviewQueryParams(searchParams);

  const bannerDetails = heroItems?.[0]?.[0];

  if (!bannerDetails) return null;

  const leftBanner = {
    imgUrl: bannerDetails.left_image_url.href,
    linkUrl: bannerDetails.left_content_link.href,
  };
  const rightBanner = {
    imgUrl: bannerDetails.right_image_url.href,
    linkUrl: bannerDetails.right_content_link.href,
  };

  return (
    <div className="container mx-auto py-4 px-4 lg:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href={leftBanner.linkUrl} className="block w-full">
          <Image
            src={leftBanner.imgUrl}
            alt={""}
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
        </Link>
        <Link href={rightBanner.linkUrl} className="block w-full">
          <Image
            src={rightBanner.imgUrl}
            alt={""}
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
