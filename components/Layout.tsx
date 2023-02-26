import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { SearchBar } from "@/components/search/SearchBar";

type Props = {
  children?: ReactNode;
  title?: string;
};

// let websiteUrl = "";
// let websiteName = "";
// if (typeof window !== "undefined") {
//   websiteName = window.location.hostname; // Get the current website name
//   websiteUrl = window.location.href; // Get the current website URL
// }

const COPYRIGHT_SYMBOL = "\u00A9"; // Copyright symbol
const currentYear = new Date().getFullYear(); // Function to get current year

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <div className={`grid place-items-center`}>
        <div className={`${styles.description} space-y-4`}>
          <nav className={``}>
            <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
            <Link href="/users">Users List</Link> |{" "}
            <a href="/api/users">Users API</a>
          </nav>
        </div>
        <div className="grid pt-8 place-items-center">
          <SearchBar />
        </div>
      </div>
    </header>
    <div className={styles.main}>{children}</div>
    <footer>
      <div>
        {COPYRIGHT_SYMBOL} {currentYear} Lloyd Lobo
      </div>
    </footer>
  </div>
);

// {COPYRIGHT_SYMBOL} {currentYear} {websiteName}
export default Layout;
