import Link from "next/link";
import React, { ReactNode } from "react";
import Head from "next/head";
import { ClockNav } from "@/pages";
import {
  DockNavigation,
  ThemeDropdown,
} from "@/components/layout/Dock/DockNavigation";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  return (
    <>
      <div className="layout-wrapper overflow-hidden">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <header className="py-4 z-50 ">
          <nav className="uppercase font-sans text-xs md:prose-sm font-bold tracking-wider">
            <div className="dark:prose-a:text-green-300/80 opacity-95">
              <Navigation />
            </div>
          </nav>
        </header>

        {children}

        <div className="hidden">
          <SlidingDoors />
          <DockNavigation />
        </div>
      </div>
    </>
  );
};

export default Layout;

export const Navigation = (props: {}) => {
  return (
    <div className="px-6 lg:px-0 md:max-w-screen-sm mx-auto">
      <div className="flex justify-between items-center ">
        <Link
          href="/"
          data-id="logo"
          className="logo after:hidden items-center  w-full h-full min-w-[1rem] place-self-center max-w-[1rem] min-h-[1rem] max-h-[1rem] rounded-full bg-[var(--bg-logo-light)] dark:bg-[var(--bg-logo-dark)] "
        ></Link>
        <Link className="after:hidden" href="/about">
          About
        </Link>
        <Link className="after:hidden" href="/projects">
          Projects
        </Link>
        <Link className="after:hidden" href="/work">
          Work
        </Link>
        <Link className="after:hidden" href="/contact">
          Contact
        </Link>
        <Link className="after:hidden" href="/shop">
          Shop
        </Link>
        <ThemeDropdown />
      </div>
    </div>
  );
};

const SlidingDoors = () => {
  return (
    <>
      <style jsx>{`
        .door-start {
          width: 0vw;
          position: absolute;
          animation-duration: 0.3s !important;
          animation-name: slidestart !important;
        }

        .door-end {
          width: 0vw;
          right: 0vw;
          position: absolute;
          animation-duration: 0.3s !important;
          animation-name: slideend !important;
        }

        @keyframes slidestart {
          from {
            left: 0vw !important;
            width: 50vw;
          }
          to {
            left: -50vw !important;
            width: 0vw;
          }
        }
        @keyframes slideend {
          from {
            right: 0vw !important;
            width: 50vw;
          }
          to {
            right: -50vw !important;
            width: 0vw;
          }
        }
      `}</style>

      <div className="z-50 w-screen ease-in-out delay-300 blur-xl transition-all absolute h-screen opacity-90 inset-0">
        <div className="door door-start absolute items-center bg-on-primary h-full after:content-[' '] inline-flex">
          <span className="prose-2xl hidden w-full">Lloyd</span>
        </div>
        <div className="door door-end absolute items-center text-start bg-on-primary h-full after:content-[' '] inline-flex">
          <span className="prose-2xl hidden w-full">Lobo</span>
        </div>
      </div>
    </>
  );
};
