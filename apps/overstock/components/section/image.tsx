"use client";

import Image from "next/image";

function SectionImage({
  image,
  sectionIndex,
}: {
  image: any;
  sectionIndex: number;
}) {
  return (
    <Image
      alt="Hello World"
      className="bg-brand-red block w-full h-auto"
      height={image.dimension.height}
      priority={sectionIndex === 0}
      loader={({ src }) => {
        return `${src}?auto=webp&width=1280`;
      }}
      loading={sectionIndex === 0 ? "eager" : "lazy"}
      src={image.url}
      width={image.dimension.width}
    />
  );
}

export default SectionImage;
