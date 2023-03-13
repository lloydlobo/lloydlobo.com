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
      <div className="layout-wrapper">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header className="md:px-52 z-50 h-fit md:mx-4">
          <div className="relative w-full flex items-center px-4 disabled:justify-center border-[0px] rounded-full my-4 gap-4">
            <div className="hover:opacity-100 opacity-0 absolute px-4 md:px-0 mx-auto">
              <ClockNav />
            </div>

            <div className="absolute mx-auto left-0 right-0 items-center justify-center flex">
              <ThemeDropdown />
            </div>
          </div>
        </header>

        {children}

        <div className="disabled:hidden">
          <DockNavigation />
        </div>
        <div className="hidden">
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default Layout;


export const Navigation = (props: {}) => {
  return (
    <div>

      <div
        className="navigation w-full prose-a:text-green-700 dark:prose-a:text-green-300  lg:-top-0 lg:absolute lg:mt-0 mt-8 relative lg:-right-24">
        <div
          className="lg:absolute normal-case lg:top-0 
										relative grid lg:right-0 prose-lg font-sans gap-3  brightness-95  leading-none font-bold "
        >
          <Link href="/" className="after:hidden rounded-full mb-2 bg-green-400 content-[''] w-6 h-6" />
          <Link className="after:hidden" href="/about">About</Link>
          <Link className="after:hidden" href="/projects">Projects</Link>
          <Link className="after:hidden" href="/work">Work</Link>
          <Link className="after:hidden" href="/contact">Contact</Link>
          <Link className="after:hidden" href="/shop">Shop</Link>

        </div>
      </div>
    </div>
  )
}
