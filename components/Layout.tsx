import React, { ReactNode } from "react";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
  preview?: boolean;
};

export default function Layout({ children, title = "Lloyd Lobo" }: Props) {
  return (
    <div className="layout-wrapper overflow-x-hidden">
      <Head>
        <title>
          {title !== "Lloyd Lobo" ? `${title} • Lloyd Lobo` : title}
        </title>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
