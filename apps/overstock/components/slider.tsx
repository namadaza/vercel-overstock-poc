import type { CSSProperties, ReactNode } from 'react';

function Slider({ children, desktopColumns = 6, mobileColumns = 2.5, viewport = 'both' }: { children: ReactNode; desktopColumns?: number; mobileColumns?: number; viewport?: 'both' | 'desktop' | 'mobile' | 'none' }) {
    const isDesktop = viewport === 'desktop' || viewport === 'both'
    const isMobile = viewport === 'mobile' || viewport === 'both'

    return <>
    <div className={`w-[calc(100%+32px)] px-4 -mx-4 scrollbar-none flex md:hidden gap-4 ${isMobile ? '*:w-[var(--mobile-column-width)] snap-x overflow-x-auto overscroll-x-none *:snap-start *:scroll-ml-4' : ''} *:shrink-0`} style={{
        '--mobile-column-width': `calc((100% - ${(mobileColumns - 1) * 16}px) / ${mobileColumns})`
    } as CSSProperties}>{children}</div>
    <div className={`scrollbar-none hidden md:flex gap-4 ${isDesktop ? '*:w-[var(--desktop-column-width)] *:snap-start snap-mandatory snap-x overflow-x-auto overscroll-x-none' : ''} *:shrink-0`} style={{
        '--desktop-column-width': `calc((100% - ${(desktopColumns - 1) * 16}px) / ${desktopColumns})`
    } as CSSProperties}>{children}</div>
    </>
}

export default Slider