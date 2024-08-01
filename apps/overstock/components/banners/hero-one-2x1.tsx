import { getHeaderOne2x1 } from "lib/contentstack";
import Link from "next/link";
import Image from "next/image";

export async function HeroOne2x1() {
  const heroItems = await getHeaderOne2x1();

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
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
