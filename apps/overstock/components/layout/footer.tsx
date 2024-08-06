import Link from "next/link";

import FooterMenu from "components/layout/footer-menu";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Suspense } from "react";

const { COMPANY_NAME, SITE_NAME } = process.env;

const footerProps = [
  {
    description: "$6.99 flat-rate shipping for orders under $50",
    href: 'https://help.overstock.com/support/s/article/Shipping-Delivery-ostk',
    icon: '<path fill="currentColor" d="M15.64 6.92L9.5 5.12V4a.5.5 0 00-.5-.5H1a.5.5 0 00-.5.5v8.5c0 .28.22.5.5.5h1.27a2.1 2.1 0 004.06 0h3.94a2.1 2.1 0 004.06 0h1.17a.5.5 0 00.5-.5V7.4a.5.5 0 00-.36-.48zM4.3 13.6a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2zM6.33 12a2.1 2.1 0 00-4.06 0H1.5V4.5h7V12H6.33zm5.97 1.6a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2zM15 12h-.67a2.1 2.1 0 00-4.06 0H9.5V6.17l5.5 1.6V12z"></path>',
    title: 'Free Shipping Over $49.99*'
  },
  {
    description: "Return, refund or replace within 30 days of receipt on most new and unused items",
    href: 'https://help.overstock.com/support/s/article/Standard-Return-Policy-ostk',
    icon: '<path fill="currentColor" d="M9 .5a.5.5 0 000 1h1a4.5 4.5 0 110 9H2.2l3.15-3.15a.5.5 0 10-.7-.7l-4 4a.5.5 0 000 .7l4 4a.5.5 0 00.7-.7L2.21 11.5H10a5.5 5.5 0 100-11H9z"></path>',
    title: 'Easy 30-Day Returns',
  },
  {
    description: "We offer expedited, safe and reliable delivery options for most products.",
    href: 'https://help.overstock.com/support/s/article/Expedited-Shipping-ostk',
    icon: '<circle stroke="currentColor" fill="none" cx="8" cy="8" r="6.7097588"></circle><polyline stroke="currentColor" fill="none" points="12 6 12 12 16 14" transform="matrix(0.67097581,0,0,0.67097581,-0.01963672,-0.01963672)"></polyline>',
    title: '100s of Items 1-3 Day Shipping',
  },
  {
    description: "Introducing a new self-service return option, now available on your Order History Page.",
    href: 'https://www.overstock.com/account',
    icon: '<path fill="currentColor" d="M9 .5a.5.5 0 000 1h1a4.5 4.5 0 110 9H2.2l3.15-3.15a.5.5 0 10-.7-.7l-4 4a.5.5 0 000 .7l4 4a.5.5 0 00.7-.7L2.21 11.5H10a5.5 5.5 0 100-11H9z"></path>',
    title: 'Self-Service Returns',
  }
]

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const skeleton =
    "w-full h-6 animate-pulse rounded bg-brand-red";
  const menu = await getMenu("next-js-frontend-footer-menu");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  return (
    <>
    <div className="w-full bg-brand-pink text-white py-6">
      <div className="container mx-auto grid grid-cols-4 gap-8 px-4 lg:px-6 text-sm">
        {footerProps.map((prop, index) => {
          return <Link className="my-auto flex gap-4" href={prop.href} key={index}>
            <svg aria-hidden={true} className="h-12 w-12 text-white shrink-0 my-auto" dangerouslySetInnerHTML={{ __html: prop.icon }} focusable={false} height={48} role="presentation" viewBox="0 0 16 16" width={48} />
            <ul>
              <li className="font-bold">{prop.title}</li>
              <li>{prop.description}</li>
            </ul>
          </Link>
        })}
      </div>
    </div>
    <div className="w-full bg-brand-charcoal text-white py-6">
      <div className="container mx-auto grid grid-cols-6 gap-4 px-4 lg:px-6">
<div className="col-span-4 col-start-2 grid md:grid-cols-5 gap-4">
        <div className="text-2xl/[1.3] font-bold md:col-span-3">
        Get an additional 15% off your first order +
        the craziest deals, straight to your inbox.
        </div>
        <div className="flex md:col-span-2">
          <div className="p-2 bg-white h-12 my-auto w-full" />
        </div>
</div>
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
