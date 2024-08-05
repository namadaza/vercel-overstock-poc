import Link from "next/link";

import FooterMenu from "components/layout/footer-menu";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Suspense } from "react";

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const skeleton =
    "w-full h-6 animate-pulse rounded bg-brand-red";
  const menu = await getMenu("next-js-frontend-footer-menu");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  return (
    <>
    <div className="w-full bg-brand-pink text-white py-6">
      <div className="container mx-auto grid grid-cols-4 gap-4 px-4 lg:px-6">
        <div>Value Prop</div>
        <div>Value Prop</div>
        <div>Value Prop</div>
        <div>Value Prop</div>
      </div>
    </div>
    <div className="w-full bg-brand-charcoal text-white py-6">
      <div className="container mx-auto grid grid-cols-6 gap-4 px-4 lg:px-6">
<div className="col-span-4 col-start-2 text-center">Get an additional 15% off your first order +
the craziest deals, straight to your inbox.</div>
      </div>
    </div>
    <footer className="bg-brand-red text-sm text-white">
      <div className="mx-auto flex container flex-col gap-6 px-4 lg:px-6 py-12 text-sm md:flex-row md:gap-12">
        <div>
          <Link
            className="flex items-center gap-2 text-black md:pt-1"
            href="/"
          >
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm">
        <div className="mx-auto flex container flex-col px-4 lg:px-6">
          <p>
            &copy; {currentYear} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".")
              ? "."
              : ""}
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
