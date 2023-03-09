import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { ClockNav, DockNav } from "@/pages";
import { DockNavigation } from "@/components/layout/Dock/DockNavigation";
import { fortunerData } from "@/utils/fortune";
import { Fortune } from "@/interfaces";

type Props = {
  children?: ReactNode;
  title?: string;
};

const COPYRIGHT_SYMBOL = "\u00A9"; // Copyright symbol
const currentYear = new Date().getFullYear(); // Function to get current year

function getRandomFortune(): Fortune {
  const len = fortunerData.length;
  const rand = Math.floor(Math.random() * len);
  return fortunerData[rand];
}

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <div className="layout-wrapper">
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

      <footer className="text-sm border-t place-self-end mb-0 mt-auto border-gray6/30">
        <article className="grid grid-cols-2 py-2">
          {/* <div>{getRandomFortune().title}</div> */}
          <div>Shine, constantly and steadily.</div>
          <div className={`place-self-end`}>
            {COPYRIGHT_SYMBOL} {currentYear} <Link href={"/"}>Lloyd Lobo</Link>
          </div>
        </article>
      </footer>
    </div>
  </>
);

export default Layout;
