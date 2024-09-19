'use client';

import { Transition } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import type { LevelOne } from 'lib/contentstack/types';
import MobileSubmenu from './mobile-submenu';

export default function MobileMenu({ levelOne }: { levelOne: LevelOne[]; }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [subMenu, setSubMenu] = useState('');
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleSubMenu = (menu: string) => () => setSubMenu(menu);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={toggleMenu}
        aria-label="Open mobile menu"
        className="h-8 w-8 md:hidden text-white"
      >
        {isOpen ? <XMarkIcon className="h-6" /> : <Bars3Icon className="h-8" />}
      </button>
      <Transition show={isOpen}>
        <div className="absolute top-[100%] left-0 w-lvw flex flex-col bg-brand-red border-t-[1px] border-t-white/20 px-4 pb-6 overflow-scroll h-lvh">
          {levelOne.length && levelOne.map(l1 => (
            <div
              key={l1.link.title}
              className="flex border-b-[1px] border-b-white/20 h-auto w-auto"
            >
              <li
                className="list-none p-6 w-full"
                onClick={handleSubMenu(l1.link.title)}
                role="button"
              >
                {l1.link.title}
              </li>
              <Transition show={l1.link.title === subMenu} as="div">
                  <MobileSubmenu levelOne={l1} closeMenu={handleSubMenu('')} />
              </Transition>
            </div>
          ))}
        </div>
      </Transition>
    </>
  );
}
