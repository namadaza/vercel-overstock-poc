import CartModal from 'components/cart/modal';
import Logo from 'components/logo';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import DesktopMenu from './desktop-menu';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';
import { getHeaderTopNav } from 'lib/contentstack';

const preNavItems = [
  {
    href: 'https://beyond.com/',
    title: 'Beyond, Inc.'
  },
  {
    href: 'https://bedbathandbeyond.com/',
    title: 'Bed Bath & Beyond',
  },
  {
    href: 'https://babyandbeyond.com/',
    title: 'Baby & Beyond',
  },
  {
    href: 'https://kidsandbeyond.com',
    title: 'Kids & Beyond',
  },
  {
    href: 'https://zulilly.com',
    title: 'Zulilly',
  },
  {
    href: 'https://collegeliving.com',
    title: 'College Living',
  },
  {
    href: 'https://studio4beyond.com',
    title: 'Studio4 Beyond',
  },
  {
    href: 'https://backyard.com',
    title: 'Backyard',
  }
]

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');
  const topNav = await getHeaderTopNav();

  return (
    <>
    <menu className='scrollbar-none flex justify-center divide-x divide-neutral-300 text-xs py-2 overflow-x-auto'>
      {preNavItems.map((item, index) => {
        return <Link className='px-3 shrink-0' key={index} href={item.href} target='_blank'>{item.title}</Link>
      })}
    </menu>
    <nav className="bg-brand-red text-white flex flex-col items-center justify-between py-4 pb-0 sticky z-40 top-0">
      <div className="block flex-none md:hidden pl-4">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex container mx-auto items-center px-4 lg:px-6">
        <div className="flex w-full md:w-1/4">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <Logo className='text-white h-10 w-auto' />
          </Link>
        </div>
        <div className="hidden justify-center md:flex md:w-1/2">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/4">
          <CartModal />
        </div>
      </div>
      <Suspense fallback={null}>
        <DesktopMenu topNav={topNav} />
      </Suspense>
    </nav>
    </>
  );
}
