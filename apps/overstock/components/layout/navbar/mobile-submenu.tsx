'use client';

import { Disclosure, DisclosureButton, DisclosurePanel, TransitionChild } from '@headlessui/react';
import Link from 'next/link';

import { LevelOne } from 'lib/contentstack/types';

export default function MobileSubmenu({ levelOne, closeMenu }: { levelOne: LevelOne, closeMenu: Function; }) {
  const handleCloseMenu = () => {
    closeMenu();
  };

  return (
    <TransitionChild
      enter="transition-all ease-in-out duration-300"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transition-all ease-in-out duration-200"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-[100%]"
    >
      <div className="absolute top-0 left-0 w-lvw flex flex-col items-start p-4 bg-white text-black overflow-y-scroll h-lvh z-50">
        <button className="py-4 text-left w-full" onClick={handleCloseMenu}>
          Back
        </button>
        <Link href={levelOne.link.href} className="font-bold text-lg py-4">
            {levelOne.link.title}
        </Link>
        <ul>
          {levelOne?.level_two?.map(({
            level_three,
            link: { title: l2Title }
          }) => (
            <Disclosure>
              <DisclosureButton className="focus:text-brand-red w-full">
                <li className="list-none font-bold py-4 mb-2 w-full text-left">
                    {l2Title}
                </li>
              </DisclosureButton>
              <DisclosurePanel className="flex flex-col items-start">
                {level_three?.map(({
                  link: {
                    title: l3Title,
                    href: l3Href
                  }
                }) => (
                  <Link
                    key={l3Title}
                    href={l3Href}
                    className="py-1 text-sm text-brand-grey hover:text-brand-red"
                    tabIndex={-1}
                  >
                    {l3Title}
                  </Link>
                ))}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </ul>
      </div>
    </TransitionChild>
  );
}
