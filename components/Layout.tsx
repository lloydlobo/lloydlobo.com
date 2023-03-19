import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import { ClockNav } from "@/pages";
import { LogoIcon } from "./icons";
import { useState, useEffect } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({ children, title = "Lloyd Lobo" }: Props) {
  return (
    <>
      <div className="layout-wrapper h-max overflow-x-hidden">
        <Head>
          <title>
            {title !== "Lloyd Lobo" ? `${title} • Lloyd Lobo` : title}
          </title>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="font-sans md:max-w-screen-sm mx-auto">
        <div className="bg-gray-100 dark:bg-gray-800">
          <div className="container flex flex-col items-center px-4 md:px-0 py-6 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:justify-between">
            <div className="">
              <div className="flex space-x-2 items-center">
                <WallClock />
                <p className="ml-2 hidden leading-none text-lg 2xl:text-xl">lloyd lobo</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <p className="text-sm mr-auto flex-1 text-center ">
                © 2023 Lloyd Lobo.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-sm transition-colors duration-300 hover:underline ">Privacy
              </a>
              <a href="/legal" className="text-sm transition-colors duration-300 hover:underline ">Legal
              </a>
              <a href="/cookies" className="text-sm transition-colors duration-300">Cookies
              </a>
              <a href="https://twitter.com/" target="_blink" className="transition-colors after:hidden duration-300 ">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current">
                  <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78739 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z">
                  </path>
                </svg>
              </a>
              <a href="https://github.com/lloydlobo" target="_blink" className="transition-colors after:hidden duration-300 ">
                <svg viewBox="0 0 30 30" className="w-6 h-6 fill-current">
                  <path d="M15 1.875C7.75195 1.875 1.875 7.9043 1.875 15.334C1.875 21.2812 5.63672 26.3203 10.8516 28.1016C10.9247 28.1175 10.9994 28.1253 11.0742 28.125C11.5605 28.125 11.748 27.7676 11.748 27.457C11.748 27.1348 11.7363 26.291 11.7305 25.166C11.2963 25.2678 10.8522 25.3209 10.4062 25.3242C7.88086 25.3242 7.30664 23.3613 7.30664 23.3613C6.70898 21.8086 5.84766 21.3926 5.84766 21.3926C4.70508 20.5898 5.8418 20.5664 5.92969 20.5664H5.93555C7.25391 20.6836 7.94531 21.9609 7.94531 21.9609C8.60156 23.1094 9.48047 23.4316 10.2656 23.4316C10.7848 23.4213 11.2959 23.3015 11.7656 23.0801C11.8828 22.2129 12.2227 21.6211 12.5977 21.2812C9.68555 20.9414 6.62109 19.7871 6.62109 14.6309C6.62109 13.1602 7.13086 11.959 7.96875 11.0215C7.83398 10.6816 7.38281 9.31055 8.09766 7.45898C8.19354 7.43604 8.29209 7.42619 8.39062 7.42969C8.86523 7.42969 9.9375 7.61133 11.707 8.8418C13.8572 8.24022 16.1311 8.24022 18.2812 8.8418C20.0508 7.61133 21.123 7.42969 21.5977 7.42969C21.6962 7.42619 21.7947 7.43604 21.8906 7.45898C22.6055 9.31055 22.1543 10.6816 22.0195 11.0215C22.8574 11.9648 23.3672 13.166 23.3672 14.6309C23.3672 19.7988 20.2969 20.9355 17.373 21.2695C17.8418 21.6855 18.2637 22.5059 18.2637 23.7598C18.2637 25.5586 18.2461 27.0117 18.2461 27.4512C18.2461 27.7676 18.4277 28.125 18.9141 28.125C18.9928 28.1253 19.0713 28.1175 19.1484 28.1016C24.3691 26.3203 28.125 21.2754 28.125 15.334C28.125 7.9043 22.248 1.875 15 1.875Z">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </>
  )

}


function WallClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (hours % 12) * 30 + minutes / 2;
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;

  return (
    <>
      <div className="grid gap-2 place-content-center">
        <div
          className="clock mx-auto items-center"
          aria-hidden="true"
          data-state="closed"
          style={{
            '--now-h': hourDegrees,
            '--now-m': minuteDegrees,
            '--now-s': secondDegrees,
          } as React.CSSProperties} // type assertion here
        >
          <div className="second">
          </div>
          <div className="minute">
          </div>
          <div className="hour">
          </div>
        </div>
        <div
          style={{ fontFamily: "monospace" }}
          className="debug grid text-xs absolute -top-1/4 text-right">
          <span className="after:content-['\FEFF°_h']">{hourDegrees}</span>
          <span className="after:content-['\FEFF°_m']">{minuteDegrees}</span>
          <span className="after:content-['\FEFF°_s']">{secondDegrees}</span>
        </div>
      </div>

      <style jsx>
        {`
          :root {
            --now-h: 0,
            --now-m: 0,
            --now-s: 0,
          }

          .clock {
             border-radius: 50%;
             border: 2.1px solid var(--bg-logo-dark);
             width: 1.25rem;
             aspect-ratio: 1;
             position: relative;
             padding: 2px;
             transform: rotate(-90deg);
          }

          .debug {
            opacity: 0;
          }

          .debug:hover {
            opacity: 1 !important;
          }

          .second,.minute,.hour {
            --color: var(--bg-logo-dark);
            border-top: 1px solid var(--color);
            position: absolute !important;
            left: 47%;
            top: 47%;
            opacity: 0.9;
            transform-origin: left;
            --radius: 9px;
            max-width: 45%;
            border-radius: 0  var(--radius) var(--radius) 0;
          }

          .second {
            width: 40%;
            height: 1px;
            transform: rotate(calc(var(--now-s)*1deg));
          }

          .minute {
            width: 40%;
            height: 1.25px;
            transform: rotate(calc(var(--now-m)*1deg));
          }

          .hour {
            width: 28%;
            height: 1px;
            transform: rotate(calc(var(--now-h)*1deg));
          }
        `}

      </style>
    </>
  );
}
