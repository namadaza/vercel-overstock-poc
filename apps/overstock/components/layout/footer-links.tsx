"use client";

import { FooterLinks } from "lib/contentstack/types";
import Link from "next/link";
import { useState } from "react";

function FooterCompanyLinks({
  my_account,
  let_us_help,
  company_information,
}: {
  my_account: { title: string; link: [] };
  let_us_help: { title: string; link: [] };
  company_information: { title: string; link: [] };
}) {
  const [showAccount, setShowAccount] = useState(false);
  const [showLetUsHelp, setShowLetUsHelp] = useState(false);
  const [showCompanyLinks, setShowCompanyLinks] = useState(false);

  return (
    <>
      <div className='border-b border-white border-opacity-20 md:border-hidden'>
        <h2
          onClick={() => setShowAccount(!showAccount)}
          className='flex justify-between cursor-pointer md:cursor-default uppercase mb-6 font-bold text-lg'
        >
          {my_account?.title}
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation" className={`${showAccount ? '-scale-y-100' : ''} icon md:hidden`}><path d="M20 8.5 12.5 16 5 8.5" stroke="currentColor" stroke-width="1.5" fill="none"></path></svg>
        </h2>
        <div
          className={`${showAccount ? 'block' : 'hidden'} md:block`}
        >
          {my_account?.link?.map((prop: FooterLinks, index: number) => {
            return (
              <Link
                className='my-auto flex gap-4 mb-6 text-base'
                href={prop.href}
                key={index}
              >
                {prop.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className='border-b border-white border-opacity-20 md:border-hidden'>
        <h2
          onClick={() => setShowLetUsHelp(!showLetUsHelp)}
          className='flex justify-between cursor-pointer md:cursor-default uppercase mb-6 font-bold text-lg'
        >
          {let_us_help?.title}
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation" className={`${showLetUsHelp ? '-scale-y-100' : ''} icon md:hidden`}><path d="M20 8.5 12.5 16 5 8.5" stroke="currentColor" stroke-width="1.5" fill="none"></path></svg>
        </h2>
        <div
          className={`${showLetUsHelp ? 'block' : 'hidden'} md:block`}
        >
          {let_us_help?.link?.map((prop: FooterLinks, index: number) => {
            return (
              <Link
                className='my-auto flex gap-4 mb-6 text-base'
                href={prop.href}
                key={index}
              >
                {prop.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className='border-b border-white border-opacity-20 md:border-hidden'>
        <h2
          onClick={() => setShowCompanyLinks(!showCompanyLinks)}
          className='flex justify-between cursor-pointer md:cursor-default uppercase mb-6 font-bold text-lg'
        >
          {company_information?.title}
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="presentation" className={`${showCompanyLinks ? '-scale-y-100' : ''} icon md:hidden`}><path d="M20 8.5 12.5 16 5 8.5" stroke="currentColor" stroke-width="1.5" fill="none"></path></svg>
        </h2>
        <div
          className={`${showCompanyLinks ? 'block' : 'hidden'} md:block`}
        >
          {company_information?.link?.map(
            (prop: FooterLinks, index: number) => {
              return (
                <Link
                  className='my-auto flex gap-4 mb-6 text-base'
                  href={prop.href}
                  key={index}
                >
                  {prop.title}
                </Link>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}


export default FooterCompanyLinks;
