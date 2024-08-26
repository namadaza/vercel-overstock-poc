'use client';

import { Transition } from '@headlessui/react';
import { HeaderTopNav } from 'lib/contentstack/types';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

// Add Top Nav Type
export default function DesktopMenu({ topNav }: { topNav: HeaderTopNav; }) {
  const [menu, setMenu] = useState('');
  const openMenu = (name: string) => () => {
    setMenu(name);
  };
  const closeMenu = () => {
    setMenu('');
  };
  const menuIsOpen = menu !== '';

  useEffect(() => {
    if (menuIsOpen) {
      document.body.classList.add('overflow-y-hidden');
      // document.body.classList.add('pr-4');
    } else {
      document.body.classList.remove('overflow-y-hidden');
      // document.body.classList.remove('pr-4');
    }
  }, [menu]);

  return (
    <Fragment>
      <div className="px-2 pt-2 container hidden md:flex w-full" onMouseLeave={closeMenu}>
        <ul className="flex flex-wrap items-end">
          {topNav?.level_one?.length && topNav?.level_one.map(l1 => {
            return (
              <li
                key={l1.link.title}
                className="flex items-center text-nowrap px-4 h-8 w-auto hover:shadow-[white_0px_-2px_0px_0px_inset] z-40"
                onFocus={openMenu(l1.link.title)}
                onMouseEnter={openMenu(l1.link.title)}
              >
                <Link href={l1.link.href} className="font-bold">
                  {l1.link.title}
                </Link>
                <Transition show={l1.link.title === menu} unmount={false}>
                  <div className="absolute top-[100%] left-0 w-lvw bg-white text-black z-40" aria-expanded={l1.link.title === menu}>
                    <div className='container mx-auto grid grid-cols-4 gap-x-16 gap-y-8 p-4'>
                      {l1?.level_two?.map(l2 => {
                        return (
                          <div
                            key={l2.link.title}
                            className="flex flex-col"
                          >
                            <Link href={l2.link.href} tabIndex={-1} className="py-2 mb-2 border-b-[1px] border-brand-charcoal hover:text-brand-red font-bold">
                              {l2.link.title}
                            </Link>
                            <ul className="flex flex-col">
                              {l2?.level_three?.map(l3 => {
                                return <li key={l3.link.title}>
                                  <Link
                                    href={l3.link.href}
                                    className="py-1 text-sm text-brand-grey hover:text-brand-red"
                                    tabIndex={-1}>
                                    {l3.link.title}
                                  </Link>
                                </li>
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Transition>
              </li>
            );
          })}
        </ul>
      </div>
      {menuIsOpen && <div className="position absolute top-[100%] left-0 h-lvh w-lvw -z-40 bg-black/40"></div>}
    </Fragment>
  );
}