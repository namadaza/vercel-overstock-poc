import Cart from "components/cart";
import Logo from "components/logo";
import { getHeaderTopNav } from "lib/contentstack";
import Link from "next/link";
import { Suspense } from "react";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const preNavItems = [
  {
    href: "https://beyond.com/",
    title: "Beyond, Inc.",
  },
  {
    href: "https://bedbathandbeyond.com/",
    title: "Bed Bath & Beyond",
  },
  {
    href: "https://babyandbeyond.com/",
    title: "Baby & Beyond",
  },
  {
    href: "https://kidsandbeyond.com",
    title: "Kids & Beyond",
  },
  {
    href: "https://zulilly.com",
    title: "Zulilly",
  },
  {
    href: "https://collegeliving.com",
    title: "College Living",
  },
  {
    href: "https://studio4beyond.com",
    title: "Studio4 Beyond",
  },
  {
    href: "https://backyard.com",
    title: "Backyard",
  },
];

export async function Navbar() {
  const topNav = await getHeaderTopNav();

  return (
    <>
      <menu className="scrollbar-none flex justify-center divide-x divide-neutral-300 text-xs py-2 overflow-x-auto">
        {preNavItems.map((item, index) => {
          return (
            <Link
              className="px-3 shrink-0"
              key={index}
              href={item.href}
              target="_blank"
            >
              {item.title}
            </Link>
          );
        })}
      </menu>
      <nav className="bg-brand-red border-b-white border-b-[1px] text-white flex flex-col items-center justify-between py-4 md:pb-0 sticky z-40 top-0">
        <div className="flex container mx-auto items-center px-4 lg:px-6">
          <div className="flex w-1/2 md:w-1/4">
            <Link
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
              href="/"
              title="Overstock"
            >
              <Logo className="text-white h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden justify-center md:flex md:w-1/2">
                        <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          <div className="flex justify-end gap-2 w-1/2 md:w-1/4 ">
            <div className="relative flex h-11 w-11 items-center justify-center">
              <Link
                className="flex h-8 w-8"
                href="https://www.overstock.com/account/login"
                title="Account Login"
              >
                <svg
                  className=" h-6 w-6 md:h-8 md:w-8 m-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                >
                  <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.429a3.571 3.571 0 1 0 0 7.142 3.571 3.571 0 0 0 0-7.142zm0 10c2.558 0 5.114.471 7.664 1.411A3.571 3.571 0 0 1 22 18.19v3.096c0 .394-.32.714-.714.714H2.714A.714.714 0 0 1 2 21.286V18.19c0-1.495.933-2.833 2.336-3.35 2.55-.94 5.106-1.411 7.664-1.411zm0 1.428c-2.387 0-4.775.44-7.17 1.324a2.143 2.143 0 0 0-1.401 2.01v2.38H20.57v-2.38c0-.898-.56-1.7-1.401-2.01-2.395-.885-4.783-1.324-7.17-1.324z"></path>
                </svg>
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <span className="head-slot-bell h-8 w-8 flex">
                <svg
                  className="text-white h-6 w-6 md:h-8 md:w-8 m-auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5 13.3684L17.5001 13.3875C17.5225 15.1462 17.8778 16.8772 18.5396 18.5H5.46043C6.12221 16.8772 6.47752 15.1462 6.49988 13.3875L6.5 13.3684V8.63158C6.5 7.29757 7.05862 6.00066 8.08187 5.03127C9.10787 4.05927 10.5159 3.5 12 3.5C13.4841 3.5 14.8921 4.05927 15.9181 5.03127C16.9414 6.00066 17.5 7.29757 17.5 8.63158V13.3684ZM21 20C20.6904 19.5157 20.4153 19.0146 20.1757 18.5C19.4249 16.8874 19.0225 15.1424 19 13.3684V8.63158C19 6.87278 18.2625 5.18601 16.9497 3.94234C15.637 2.69868 13.8565 2 12 2C10.1435 2 8.36301 2.69868 7.05025 3.94234C5.7375 5.18601 5 6.87278 5 8.63158V13.3684C4.97745 15.1424 4.57513 16.8874 3.8243 18.5C3.58469 19.0146 3.30958 19.5157 3 20H4.74405H19.256H21ZM12 23C15 23 15 21 15 21H9C9 21 9 23 12 23Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span id="badge" />
              </span>
            </div>
            <Cart />
            <div className="flex items-center md:hidden pl-4">
              <Suspense fallback={null}>
                <MobileMenu topNav={topNav} />
              </Suspense>
            </div>
          </div>
        </div>
        <Suspense fallback={null}>
          <DesktopMenu topNav={topNav} />
        </Suspense>
      </nav>
    </>
  );
}
