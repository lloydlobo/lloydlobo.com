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
        <header className="md:px-52 z-50 md:mx-4">
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

        <DockNavigation />
      </div>
    </>
  );
};

export default Layout;
