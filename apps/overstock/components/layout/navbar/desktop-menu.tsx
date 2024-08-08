'use client';

import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { HeaderTopNav } from 'lib/contentstack/types';

// Add Top Nav Type
export default function DesktopMenu({ topNav } : { topNav: HeaderTopNav }) {
    const [menu, setMenu] = useState('');
    const openMenu = (name: string) => () => {
        setMenu(name);
    };
    const closeMenu = () => {
        setMenu('');
    };

    return (
        <Fragment>
            <div className="container flex flex-wrap items-end w-full" onMouseLeave={closeMenu}>
                {topNav?.level_one?.length && topNav?.level_one.map(l1 => {
                    return (
                        <div
                            key={l1.link.title}
                            className="flex items-center text-nowrap px-4 h-8 w-auto hover:shadow-[white_0px_-2px_0px_0px_inset] z-40"
                            onFocus={openMenu(l1.link.title)}
                            onMouseEnter={openMenu(l1.link.title)}
                        >
                            <Link href={l1.link.href} className="font-bold">
                                {l1.link.title}
                            </Link>
                            <Transition show={l1.link.title === menu}>
                                <div className="grid grid-cols-4 gap-x-16 gap-y-8 absolute top-[100%] left-0 w-lvw p-4 bg-white text-black -z-10">
                                    {l1?.level_two?.map(l2 => {
                                        return (
                                            <div
                                                key={l2.link.title}
                                                className="flex flex-col"
                                            >
                                                <Link href={l2.link.href} tabIndex={-1} className="py-2 mb-2 border-b-[1px] border-brand-charcoal hover:text-brand-red font-bold">
                                                    {l2.link.title}
                                                </Link>
                                                {l2?.level_three?.map(l3 => {
                                                    return <Link
                                                        key={l3.link.title}
                                                        href={l3.link.href}
                                                        className="py-1 text-sm text-brand-grey hover:text-brand-red"
                                                        tabIndex={-1}>
                                                        {l3.link.title}
                                                    </Link>
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            </Transition>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
}