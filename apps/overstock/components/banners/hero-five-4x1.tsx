import { LivePreviewQuery } from "contentstack";
import { getHeaderFive4x1, setLivePreviewQueryParams } from "lib/contentstack";
import Image from "next/image";
import Link from "next/link";

export async function HeroFive4x1({
  searchParams,
}: {
  searchParams: LivePreviewQuery | undefined;
}) {
  const heroItems = await getHeaderFive4x1();
  setLivePreviewQueryParams(searchParams);

  const bannerDetails = heroItems?.[0]?.[0];

  if (!bannerDetails) return null;

  const leftBanner = {
    imgUrl: bannerDetails.left_image_url.href,
    linkUrl: bannerDetails.left_content_link.href,
  };
  const leftCenterBanner = {
    imgUrl: bannerDetails.left_center_image_url.href,
    linkUrl: bannerDetails.left_center_content_link.href,
  };
  const rightCenterBanner = {
    imgUrl: bannerDetails.right_center_image_url.href,
    linkUrl: bannerDetails.right_center_content_link.href,
  };
  const rightBanner = {
    imgUrl: bannerDetails.right_image_url.href,
    linkUrl: bannerDetails.right_content_link.href,
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link href={leftBanner.linkUrl} className="block w-full">
          <Image
            src={leftBanner.imgUrl}
            alt={""}
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
        </Link>
        <Link href={leftCenterBanner.linkUrl} className="block w-full">
          <Image
            src={leftCenterBanner.imgUrl}
            alt={""}
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
        </Link>
        <Link href={rightCenterBanner.linkUrl} className="block w-full">
          <Image
            src={rightCenterBanner.imgUrl}
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
