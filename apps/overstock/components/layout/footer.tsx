import { getFooter } from 'lib/contentstack';
import { FooterLinks } from 'lib/contentstack/types';
import Link from 'next/link';
import { Suspense } from 'react';
import FooterForm from './footer-form';

const { COMPANY_NAME, SITE_NAME } = process.env;
const footerProps = [
  {
    description: '$6.99 flat-rate shipping for orders under $50',
    href: 'https://help.overstock.com/support/s/article/Shipping-Delivery-ostk',
    icon: '<path fill="currentColor" d="M15.64 6.92L9.5 5.12V4a.5.5 0 00-.5-.5H1a.5.5 0 00-.5.5v8.5c0 .28.22.5.5.5h1.27a2.1 2.1 0 004.06 0h3.94a2.1 2.1 0 004.06 0h1.17a.5.5 0 00.5-.5V7.4a.5.5 0 00-.36-.48zM4.3 13.6a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2zM6.33 12a2.1 2.1 0 00-4.06 0H1.5V4.5h7V12H6.33zm5.97 1.6a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2zM15 12h-.67a2.1 2.1 0 00-4.06 0H9.5V6.17l5.5 1.6V12z"></path>',
    title: 'Free Shipping Over $49.99*',
  },
  {
    description:
      'Return, refund or replace within 30 days of receipt on most new and unused items',
    href: 'https://help.overstock.com/support/s/article/Standard-Return-Policy-ostk',
    icon: '<path fill="currentColor" d="M9 .5a.5.5 0 000 1h1a4.5 4.5 0 110 9H2.2l3.15-3.15a.5.5 0 10-.7-.7l-4 4a.5.5 0 000 .7l4 4a.5.5 0 00.7-.7L2.21 11.5H10a5.5 5.5 0 100-11H9z"></path>',
    title: 'Easy 30-Day Returns',
  },
  {
    description:
      'We offer expedited, safe and reliable delivery options for most products.',
    href: 'https://help.overstock.com/support/s/article/Expedited-Shipping-ostk',
    icon: '<circle stroke="currentColor" fill="none" cx="8" cy="8" r="6.7097588"></circle><polyline stroke="currentColor" fill="none" points="12 6 12 12 16 14" transform="matrix(0.67097581,0,0,0.67097581,-0.01963672,-0.01963672)"></polyline>',
    title: '100s of Items 1-3 Day Shipping',
  },
  {
    description:
      'Introducing a new self-service return option, now available on your Order History Page.',
    href: 'https://www.overstock.com/account',
    icon: '<path fill="currentColor" d="M9 .5a.5.5 0 000 1h1a4.5 4.5 0 110 9H2.2l3.15-3.15a.5.5 0 10-.7-.7l-4 4a.5.5 0 000 .7l4 4a.5.5 0 00.7-.7L2.21 11.5H10a5.5 5.5 0 100-11H9z"></path>',
    title: 'Self-Service Returns',
  },
];

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightName = COMPANY_NAME || SITE_NAME || '';
  const footerItems = await getFooter();
  const {
    company_description,
    company_information,
    cookies,
    legal_links,
    let_us_help,
    my_account,
    payment_options,
    social_media,
  } = footerItems;

  return (
    <>
      <div className='w-full bg-brand-pink text-white py-6'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-6 text-sm'>
          {footerProps.map((prop, index) => {
            return (
              <Link className='my-auto flex gap-4' href={prop.href} key={index}>
                <svg
                  aria-hidden={true}
                  className='h-12 w-12 text-white shrink-0 my-auto'
                  dangerouslySetInnerHTML={{ __html: prop.icon }}
                  focusable={false}
                  height={48}
                  role='presentation'
                  viewBox='0 0 16 16'
                  width={48}
                />
                <ul>
                  <li className='font-bold'>{prop.title}</li>
                  <li>{prop.description}</li>
                </ul>
              </Link>
            );
          })}
        </div>
      </div>
      <div className='w-full bg-brand-charcoal text-white py-6'>
        <div className='container mx-auto grid md:grid-cols-6 gap-4 px-4 md:px-6'>
          <div className='md:col-span-4 md:col-start-2 grid md:grid-cols-5 gap-4'>
            <FooterForm />
          </div>
        </div>
      </div>
      <Suspense fallback={null}>
        <footer className='flex justify-center align-middle bg-brand-red text-sm text-white pt-6'>
          <div className='flex container flex-col px-4 lg:px-6 py-6 text-sm'>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 lg:px-6 text-sm'>
              <div>
                <div className='text-base mb-6'>{company_description}</div>
                <div className='flex'>
                  {social_media?.social_media_share?.map(
                    (prop: FooterLinks, index: number) => {
                      return (
                        <Link
                          className='my-auto flex gap-4 mr-5'
                          title={prop?.url?.title}
                          href={prop?.url?.href}
                          key={index}
                        >
                          <div dangerouslySetInnerHTML={{ __html: prop.svg }} />
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>
              <div>
        <h2 className='uppercase mb-6 font-bold text-lg'>
          {my_account?.title}
        </h2>
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
      <div>
        <h2 className='uppercase mb-6 font-bold text-lg'>
          {let_us_help?.title}
        </h2>
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
      <div>
        <h2 className='uppercase mb-6 font-bold text-lg'>
          {company_information?.title}
        </h2>
        {company_information?.link?.map((prop: FooterLinks, index: number) => {
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
            <div className='flex md:justify-end sm:justify-center m-8'>
              {payment_options?.payment_options?.map((prop: FooterLinks) => {
                return (
                  <div
                    className='mr-2'
                    title={prop?.url?.title}
                    dangerouslySetInnerHTML={{ __html: prop.svg }}
                  />
                );
              })}
            </div>
            <hr className='mb-8 opacity-20' />
            <div className='text-xs mb-4'>
              &copy; {currentYear} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''}
            </div>
            <div className='flex text-xs mb-4'>
              {legal_links?.link?.map((prop: FooterLinks, index: number) => {
                return (
                  <Link
                    className='my-auto mr-3 underline flex gap-4'
                    href={prop.href}
                    key={index}
                  >
                    {prop.title}
                  </Link>
                );
              })}
            </div>
            {cookies?.cookies_info}{' '}
            <Link
              className='my-auto flex gap-4'
              href={cookies?.cookie_link?.href}
            >
              {cookies?.cookie_link?.title}
            </Link>
          </div>
        </footer>
      </Suspense>
    </>
  );
}
