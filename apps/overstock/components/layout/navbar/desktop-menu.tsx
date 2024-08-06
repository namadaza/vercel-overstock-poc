'use-client';

import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';

// Add Top Nav Type
export default function DesktopMenu({ topNav } : { topNav: any }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const openMenu = () => setMenuOpen(true);

    const level_one = topNav?.[0]?.[0]?.level_one;

    return (
        <Fragment>
            <div className="flex flex-wrap items-end w-full">
                {level_one?.length &&
                    level_one.map((l1: any) => {
                        return (
                            <div className="flex items-center text-nowrap px-4 h-8 w-auto" onMouseEnter={openMenu}>
                                <Link href={l1.link.href}>
                                    {l1.link.title}
                                </Link>
                            </div>
                        );
                    })}
            </div>
            <Transition show={menuOpen}>
                {"hello"}
            </Transition>
        </Fragment>
    );
}