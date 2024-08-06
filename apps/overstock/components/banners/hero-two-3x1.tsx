import { LivePreviewQuery } from "contentstack";
import { getHeaderTwo3x1, setLivePreviewQueryParams } from "lib/contentstack";
import Image from "next/image";
import Link from "next/link";

export async function HeroTwo3x1({
  searchParams,
}: {
  searchParams: LivePreviewQuery | undefined;
}) {
  const heroItems = await getHeaderTwo3x1();
  setLivePreviewQueryParams(searchParams);

  const bannerDetails = heroItems?.[0]?.[0];

  if (!bannerDetails) return null;

  const leftBanner = {
    imgUrl: bannerDetails.left_image_url.href,
    linkUrl: bannerDetails.left_content_link.href,
  };
  const centerBanner = {
    imgUrl: bannerDetails.center_image_url.href,
    linkUrl: bannerDetails.center_content_link.href,
  };
  const rightBanner = {
    imgUrl: bannerDetails.right_image_url.href,
    linkUrl: bannerDetails.right_content_link.href,
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href={leftBanner.linkUrl} className="block w-full">
          <Image
            src={leftBanner.imgUrl}
            alt={""}
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
        </Link>
        <Link href={centerBanner.linkUrl} className="block w-full">
          <Image
            src={centerBanner.imgUrl}
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
