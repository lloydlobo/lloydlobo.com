import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { ClockNav, DockNav } from "@/pages";
import {
  DockNavigation,
  ThemeDropdown,
} from "@/components/layout/Dock/DockNavigation";
import { fortunerData } from "@/utils/fortune";
import { Fortune } from "@/interfaces";
import { fetcher } from "@/helpers/fetcher";
import useSWR from "swr";

type Props = {
  children?: ReactNode;
  title?: string;
};

const COPYRIGHT_SYMBOL = "\u00A9"; // Copyright symbol
const currentYear = new Date().getFullYear(); // Function to get current year

function useFortune() {
  // const { data, error, isLoading } = useSWR(`/api/fortune/${id}`, fetcher);
  const { data, error, isLoading } = useSWR(`/api/fortunes`, fetcher);
  return {
    fortune: data,
    isLoading,
    isError: error,
  };
}

function getRandomFortune(): Fortune {
  const len = fortunerData.length;
  const rand = Math.floor(Math.random() * len);
  return fortunerData[rand];
}
// const { fortune, isLoading, isError } = useFortune();
//
// if (isLoading) return <></>;
// if (isError) return <span>Oops!</span>;
//
// let rand = Math.floor(Math.random() * fortune.length);
// let id = 100 + rand;
// const item = fortune.find((data: Fortune) => data.id === Number(id));

const Layout = ({ children, title = "This is the default title" }: Props) => {
  // const [fortune, setFortune] = useState("Find flow.");
  // const randomFortune = (e) => {
  //   let data: string = [
  //     "Find flow.",
  //     "Pray at the altar of work as a service.",
  //     "Shine, constantly and steadily.",
  //   ].find((title) => title !== e.currentTarget.innerText);
  //   setFortune(data);
  // };

  return (
    <>
      <div className="layout-wrapper">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header className="md:px-48  md:mx-6">
          <div
            className="relative
  w-full flex items-center justify-between px-4 disabled:justify-center border-[0px] p-2 rounded-full my-4 gap-4"
          >
            <ClockNav />
            <div className="scale-100">
              <ThemeDropdown />
            </div>
          </div>
        </header>

        <DockNavigation />
        {children}

        {/*
        <footer className="text-sm border-t place-self-end mb-0 mt-auto border-secondary/30">
          <article className="grid grid-cols-2 py-2">
            <div className="">
              <button className="w-fit hover:text-green-400 dark:hover:text-accent  h-full z-20 cursor-pointer text-left pr-2" onClick={(e) => randomFortune(e)} > {fortune} </button>
            </div>
            <div className={`place-self-end`}>
              {COPYRIGHT_SYMBOL} {currentYear}{" "}
              <Link href={"/"}>Lloyd Lobo</Link>
            </div>
          </article>
        </footer>
        */}
      </div>
    </>
  );
};

export default Layout;
