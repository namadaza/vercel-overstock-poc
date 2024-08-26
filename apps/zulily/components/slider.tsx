import type { CSSProperties, ReactNode } from "react";

function Slider({
  children,
  desktopColumns = 6,
  mobileColumns = 2.5,
  viewport = "both",
}: {
  children: ReactNode;
  desktopColumns?: number;
  mobileColumns?: number;
  viewport?: "both" | "desktop" | "mobile" | "none";
}) {
  const isDesktop = viewport === "desktop" || viewport === "both";
  const isMobile = viewport === "mobile" || viewport === "both";

  return (
    <>
      <div
        className={`w-[calc(100%+32px)] px-4 md:px-0 md:scroll-ml-0 -mx-4 md:-mx-0 scrollbar-none flex gap-6 md:w-auto *:shrink-0 ${isMobile ? "*:scroll-ml-4 *:w-[var(--mobile-column-width)] overflow-x-auto overscroll-x-none *:snap-start snap-x" : ""} ${isDesktop ? "*:md:w-[var(--desktop-column-width)] *:md:snap-start md:snap-mandatory md:snap-x md:overflow-x-auto md:overscroll-x-none md:*:scroll-ml-0" : "*:md:flex-1"}`}
        style={
          {
            "--desktop-column-width": `calc((100% - ${(desktopColumns - 1) * 24}px) / ${desktopColumns})`,
            "--mobile-column-width": `calc((100% - ${(mobileColumns - 1) * 24}px) / ${mobileColumns})`,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </>
  );
}

export default Slider;
