"use client";

import Image from "next/image";

function CategoryImage({ alt, image }: { alt: string; image: any }) {
  return (
    <Image
      alt={alt}
      className="w-full h-full object-cover"
      height={image.dimension.height}
      loader={({ src }) => {
        return `${src}?auto=webp&width=1280`;
      }}
      src={image.url}
      width={image.dimension.width}
    />
  );
}

export default CategoryImage;
