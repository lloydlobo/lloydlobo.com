import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { NavbarDark } from "@/components/layout/NavbarDark";
import { ClockNav, DockNav } from "@/pages";
import { DockNavigation } from "@/components/layout/Dock/DockNavigation";

type Props = {
  children?: ReactNode;
  title?: string;
};

const COPYRIGHT_SYMBOL = "\u00A9"; // Copyright symbol
const currentYear = new Date().getFullYear(); // Function to get current year

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="">
      <ClockNav />
      <DockNavigation />
    </header>

    {children}

    <footer className={`hidden space-y-4 px-8 py-4`}>
      <h3 className={`place-self-start text-start text-xl`}>Connect</h3>
      <hr className={`h-[1px] w-full border-none bg-secondary`} />
      <div className={`grid w-full grid-cols-2 py-4`}>
        <div className={`grid w-full text-xl`}>
          <div>
            <a href="https://github.com/lloydlobo">Github</a>
          </div>
          <div>
            <a href="https://github.com/lloydlobo">Email</a>
          </div>
        </div>

        <div className={`place-self-end`}>
          {COPYRIGHT_SYMBOL} {currentYear} Lloyd Lobo
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
