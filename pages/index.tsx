import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Section } from "@/components/Section";

import createGlobe from "cobe";
import {
  AnimatePresence,
  motion,
  MotionProps,
  // useInView, // import { useInView } from "react-intersection-observer";
} from "framer-motion";
import Layout from "@/components/Layout";
import { ThemeDropdown } from "@/components/layout/Dock/DockNavigation";

export function ClockNav() {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs text-center font-semibold bg-opacity-50 backdrop-blur-[2px] ">
      <span className="h-full relative dark:text-secondary brightness-75 text-opacity-70">
        {currentTime ? (
          <span>{currentTime}</span>
        ) : (
          <span className="blur-[0.5px]"> 0:00:00 AM</span>
        )}
      </span>
    </div>
  );
}

export default function IndexPage() {
  return (
    <>
      <Layout title="Home">
        <main className="">
          <Section>
            <article className="py-12">
              <div className="text-2xl tracking-tight leading-9 lowercase w-full sm:max-w-[75vw] decoration-accent underline-offset-8 lg:max-w-[63vw] mx-auto font-medium gap-1">
                <Link
                  href="/about"
                  className="opacity-50 hover:underline hover:opacity-100"
                >
                  lloyd lobo.
                </Link>

                <span className="">
                  {" "}
                  creating{" "}
                  <span className="inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      />
                    </svg>
                  </span>{" "}
                  software with the focus on innovative experiences that exceed
                  client expectations.{" "}
                  <span className="inline-flex">
                    <strong>software developer</strong>
                  </span>{" "}
                  with an <span id="roughblock">eye</span> for design and
                  motion. deeply curious about functional and beautiful{" "}
                  <svg
                    // https://primer.style/design/foundations/icons/git-compare-24
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 inline-flex"
                  >
                    <path d="M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z" />
                  </svg>{" "}
                  apps. tend to use{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="w-5 h-5 inline-flex"
                  >
                    <path d="M16.5 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm3.25-1.75a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z"></path>
                    <path d="M13.905 1.72a.75.75 0 0 1 0 1.06L12.685 4h4.065a3.75 3.75 0 0 1 3.75 3.75v8.75a.75.75 0 0 1-1.5 0V7.75a2.25 2.25 0 0 0-2.25-2.25h-4.064l1.22 1.22a.75.75 0 0 1-1.061 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM7.5 4.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0ZM4.25 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 4.25 6.5Z"></path>
                    <path d="M10.095 22.28a.75.75 0 0 1 0-1.06l1.22-1.22H7.25a3.75 3.75 0 0 1-3.75-3.75V7.5a.75.75 0 0 1 1.5 0v8.75a2.25 2.25 0 0 0 2.25 2.25h4.064l-1.22-1.22a.748.748 0 0 1 .332-1.265.75.75 0 0 1 .729.205l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0Z"></path>
                  </svg>{" "}
                  open source and machine learning tools to architect efficient{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline-flex"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                  </svg>{" "}
                  code and tackle complex problems with{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-flex"
                  >
                    <path d="M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z"></path>
                    <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
                  </svg>{" "}
                  ease.
                </span>
              </div>
            </article>
          </Section>
        </main>
      </Layout>
    </>
  );
}

const Globe = () => {
  // https://github.com/shuding/cobe

  const canvasRef = useRef();
  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 200 * 2,
      height: 200 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="grid place-self-center h-full w-full">
      <canvas
        ref={canvasRef}
        className={`w-full place-self-center`}
        style={{ width: 200, height: 200, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
};
type Themes = "linear" | "raycast" | "vercel" | "framer";
function GlobeWindow() {
  const [theme, setTheme] = React.useState<Themes>("framer");
  return (
    <div className="hidden flex-col py-4 mx-auto w-screen h-screen items-center">
      <div className="hidden">
        <OSWindow>
          <AnimatePresence mode="wait" initial={false}>
            {theme === "framer" && (
              <CMDKWrapper key="framer">
                <div className="grid gap-4 h-full place-self-center mx-auto w-full">
                  <h1 className="font-bold hidden text-center text-2xl leading-none">
                    Lloyd Lobo
                  </h1>
                </div>
                <div className="h-full place-content-center hidden">
                  <div className="space-y-4 px-12">
                    <h1 className="font-bold text-center text-2xl leading-none">
                      Lloyd Lobo
                    </h1>
                    <h2 className="text-secondary max-w-[29ch] text-base text-center ">
                      Software developer with an eye for design and motion.
                    </h2>
                    <ActionCTA />
                  </div>
                </div>
              </CMDKWrapper>
            )}
          </AnimatePresence>
        </OSWindow>
      </div>
    </div>
  );
}

function ActionCTA() {
  return (
    <div className="relative mx-auto w-fit text-secondary">
      <div className="grid gap-4 lg:grid-cols-2 ">
        <Link
          href="/work"
          className="flex items-center rounded-md font-semibold underline decoration-accent underline-offset-8 shadow-sm hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-1 -ml-1.5 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          Work
        </Link>

        <a
          href="https://github.com/lloydlobo/"
          className="flex items-center font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
        >
          <svg viewBox="0 0 24 24" className="mr-1 -ml-1.5 h-5 w-5">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
            ></path>
          </svg>
          Code&nbsp;&nbsp;
          <span aria-hidden="true" className="">
            &rarr;
          </span>
        </a>
      </div>
    </div>
  );
}

function OSWindow({ children }) {
  const constraintsRef = useRef(null);
  return (
    <>
      <motion.div
        ref={constraintsRef}
        className="relative grid place-items-center w-screen min-h-screen"
      >
        <motion.div
          className="drag absolute "
          drag={true}
          whileHover={{ cursor: "context-menu" }}
          animate={{ opacity: 1.0, x: [0, 0, 0], y: [0, 0, 0] }}
          whileTap={{ scale: 1.0, cursor: "grab" }}
          transition={{
            duration: 0.1,
            delay: 0.1,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 0, bounceDamping: -1 }}
        // dragConstraints={{ right: 10, left: -150, top: -70, bottom: 0 }}
        >
          <div className="min-w-[300px] min-h-[250px] w-full backdrop-blur-sm opacity-[90%] dark:bg-on-secondary aspect-h-9 rounded-lg shadow-lg">
            <div className="bg-black/20 flex relative items-center px-2 min-h-4 h-fit w-full">
              <div className="flex gap-2 absolute items-center left-2">
                <span className="flex w-2 h-2 font-bold text-black text-[8px] text-center items-center rounded-full bg-accent justify-center">
                  x
                </span>
                <span className="flex w-2 h-2 text-black   font-bold  rounded-full bg-secondary text-[8px] items-center justify-center ">
                  -
                </span>
              </div>
              <h3 className="text-center text-[2vw]  lg:text-[1vw] w-full">
                <span className=" hover:opacity-100 opacity-0">Home</span>
              </h3>
            </div>
            <div className="px-4 scale-[100%] py-4">{children}</div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

function CMDKWrapper(props: MotionProps & { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.2 }}
      // height: 475,
      style={{
        height: 287,
      }}
      {...props}
    />
  );
}

const LastVisit = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              const { city, countryName } = data;
              setLocation({ city, country: countryName });
            })
            .catch((error) => {
              setError("Failed to retrieve location information");
            });
        },
        (error) => {
          setError("Failed to retrieve location information");
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  }, []);
  if (error) {
    return <div>{error}</div>;
  }
  if (!location) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>
        last visit from {location.city}, {location.country}
      </p>
    </div>
  );
};

export function DockNav() {
  return (
    <div className="z-50 fixed bottom-5 left-0 right-0 gird  mx-auto">
      <div className="border border-opacity-10 rounded-full border-secondary/10 w-fit mx-auto bg-opacity-40 backdrop-blur-[1.5px]">
        <nav className="dock grid grid-flow-col justify-between p-2 overflow-x-scroll overflow-y-hidden gap-1 rounded-full  place-items-center">
          <Link
            href="/"
            className="font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
            data-te-toggle="tooltip"
            data-te-placement="top"
            data-te-ripple-init
            data-te-ripple-color="light"
            title="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>

          <Link
            href="/work"
            className="flex items-center font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
            data-te-toggle="tooltip"
            data-te-placement="top"
            data-te-ripple-init
            data-te-ripple-color="light"
            title="Work"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
          </Link>

          <a
            href="https://github.com/lloydlobo/"
            className="font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
            data-te-toggle="tooltip"
            data-te-placement="top"
            data-te-ripple-init
            data-te-ripple-color="light"
            title="Code"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
              ></path>
            </svg>
          </a>

          <a
            href="mailto:hello@lloydlobo.com"
            className="flex items-center font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
            data-te-toggle="tooltip"
            data-te-placement="top"
            data-te-ripple-init
            data-te-ripple-color="light"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
}
