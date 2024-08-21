"use client"

import Image from "next/image";


const SvgOverlay = ({sectionIndex, svg}: {sectionIndex: number, svg: any}) => {

  return (
    <Image
      alt={`SVG Overlay ${sectionIndex}`}
      src={svg.url}
      height={svg.dimension.height}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      priority={sectionIndex === 0}
      loading={[0, 1].includes(sectionIndex) ? "eager" : "lazy"}
      width={svg.dimension.width}
    />
  );
};

export default SvgOverlay;
