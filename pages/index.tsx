import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import createGlobe from "cobe";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  MotionProps,
  useInView,
} from "framer-motion";

// import { useInView } from "react-intersection-observer";
//
// https://rauno.me/

type Themes = "linear" | "raycast" | "vercel" | "framer";

export default function IndexPage() {
  const [theme, setTheme] = React.useState<Themes>("framer");

  const Globe = () => {
    // import { useEffect, useRef } from "react";
    // import "./styles.css";

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
        // style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        />
      </div>
    );
  };
  const CurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(
      new Date().toLocaleTimeString()
    );
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return (
      <div>
        <span>{currentTime}</span>
      </div>
    );
  };

  return (
    <>
      <main>
        <div className="">
          <header className="flex bg-on-secondary/40 w-screen absolute top-0 backdrop-blur-lg items-center justify-center text-xs font-semibold brightness-75 gap-2">
            <CurrentTime />
          </header>
        </div>
        <div className="flex mx-auto w-screen h-screen items-center">
          <OSWindow>
            <AnimatePresence mode="wait" initial={false}>
              {theme === "framer" && (
                <CMDKWrapper key="framer">
                  <div className="grid gap-4 place-self-center mx-auto w-full">
                    <h1 className="font-bold text-center text-2xl leading-none">
                      Lloyd Lobo
                    </h1>
                    <Globe />
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
        <div className="dock absolute bottom-5 w-screen">
          <div className="bar flex justify-evenly rounded-full min-w-[300px] lg:min-w-[400px] border border-opacity-10 border-secondary/10 mx-auto px-4 py-4 w-fit bg-opacity-40 backdrop-blur-md">
            <Link href="/" className="">
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

            <Link href="/work" className="">
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
            </a>

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
          </div>
        </div>
      </main>
    </>
  );
}
// <CommandMenu />

// <Layout title="Home | ">
//   <div className="">
//     <OSWindow>
//       <div className="grid mx-10 mt-4 place-self-center h-full space-y-6 ">
//         <h1 className="font-bold text-2xl leading-none">Lloyd Lobo</h1>
//         <h2 className="text-secondary">
//           Software developer with an eye for design and motion.
//         </h2>
//         <ActionCTA />
//       </div>
//     </OSWindow>
//   </div>
// </Layout>

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
/*
<div class="c-lesPJm c-lesPJm-ihaZVdX-css"><header style="opacity: 1;" class="c-gqwkJN c-gqwkJN-ejCoEP-direction-row c-gqwkJN-irEjuD-align-stretch c-gqwkJN-awKDG-justify-start c-gqwkJN-kVNAnR-wrap-no-wrap c-gqwkJN-icBTQsH-css"><span class="c-gqwkJN c-gqwkJN-ejCoEP-direction-row c-gqwkJN-jroWjL-align-center c-gqwkJN-awKDG-justify-start c-gqwkJN-kVNAnR-wrap-no-wrap c-gqwkJN-llVfQI-gap-1 c-gqwkJN-idQOVDg-css"><span data-shuffle="" class="c-iLbGmI c-iLbGmI-cyRcZm-family-body c-iLbGmI-jIjxDA-size-14 c-iLbGmI-bwnKsc-lineHeight-28 c-iLbGmI-cdWBIM-weight-400 c-iLbGmI-cOWITQ-color-gray12 c-iLbGmI-iiSiUSy-css">3:33:33 AM</span><div aria-hidden="true" style="opacity: 1;" class="c-bxaCsw c-bxaCsw-igXORMz-css"></div><span data-shuffle="" class="c-iLbGmI c-iLbGmI-cyRcZm-family-body c-iLbGmI-jIjxDA-size-14 c-iLbGmI-bwnKsc-lineHeight-28 c-iLbGmI-cdWBIM-weight-400 c-iLbGmI-cOWITQ-color-gray12 c-iLbGmI-ifMDjta-css">Tallinn, Estonia</span><div class="c-gqwkJN c-gqwkJN-ejCoEP-direction-row c-gqwkJN-jroWjL-align-center c-gqwkJN-awKDG-justify-start c-gqwkJN-kVNAnR-wrap-no-wrap c-gqwkJN-llVfQI-gap-1"><div aria-hidden="true" style="opacity: 1;" class="c-bxaCsw"></div><span class="c-iLbGmI c-iLbGmI-cyRcZm-family-body c-iLbGmI-jIjxDA-size-14 c-iLbGmI-bwnKsc-lineHeight-28 c-iLbGmI-cdWBIM-weight-400 c-iLbGmI-cOWITQ-color-gray12 c-iLbGmI-iirCAGU-css">Last visit from Faridabad, India</span></div></span></header><h1 class="vh">Rauno Freiberg. Creating software that makes people feel something. Design engineer unsatisfiably curious about novel interfaces. Trying to paint with code. Relentlessly devoted to fine, detailed polish. Always seeking out the cutting edge in my craft. Currently at Vercel. Previously at The Browser Company.</h1><div aria-hidden="true" class="c-iLbGmI c-iLbGmI-cyRcZm-family-body c-iLbGmI-jIjxDA-size-14 c-iLbGmI-bwnKsc-lineHeight-28 c-iLbGmI-cdWBIM-weight-400 c-iLbGmI-cOWITQ-color-gray12 c-iLbGmI-ifLKjeV-css"><span class="c-lesPJm c-lesPJm-ihgsrmT-css">Freiberg, Rauno.</span> Creating<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" class="c-arzPs" color="currentColor"><path d="M21 7.353v9.294a.6.6 0 01-.309.525l-8.4 4.666a.6.6 0 01-.582 0l-8.4-4.666A.6.6 0 013 16.647V7.353a.6.6 0 01.309-.524l8.4-4.667a.6.6 0 01.582 0l8.4 4.667a.6.6 0 01.309.524z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.528 7.294l8.18 4.544a.6.6 0 00.583 0l8.209-4.56M12 21v-9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>software that <span class="c-khSxjL">m</span>akes people feel something. De<span class="c-khSxjL">s</span>ign engi<span class="c-khSxjL">n</span>eer unsatisfiably<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="c-arzPs"><path d="M10.5 16.5L7 15M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 9C8.36739 9 8.24021 8.94732 8.14645 8.85355C8.05268 8.75979 8 8.63261 8 8.5C8 8.36739 8.05268 8.24021 8.14645 8.14645C8.24021 8.05268 8.36739 8 8.5 8C8.63261 8 8.75979 8.05268 8.85355 8.14645C8.94732 8.24021 9 8.36739 9 8.5C9 8.63261 8.94732 8.75979 8.85355 8.85355C8.75979 8.94732 8.63261 9 8.5 9ZM15.5 9C15.3674 9 15.2402 8.94732 15.1464 8.85355C15.0527 8.75979 15 8.63261 15 8.5C15 8.36739 15.0527 8.24021 15.1464 8.14645C15.2402 8.05268 15.3674 8 15.5 8C15.6326 8 15.7598 8.05268 15.8536 8.14645C15.9473 8.24021 16 8.36739 16 8.5C16 8.63261 15.9473 8.75979 15.8536 8.85355C15.7598 8.94732 15.6326 9 15.5 9Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>curious about nove<div class="c-lesPJm c-lesPJm-ikEjEXs-css">l</div> interfaces. Trying to<svg class="c-lesPJm c-arzPs c-arzPs-ikLzBqj-css" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" fill="none" color="currentColor"><g clip-path="url(#design-nib_svg__clip0_2585_14438)" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.674 11.408l-1.905 5.715a.6.6 0 01-.398.386L3.693 20.98a.6.6 0 01-.74-.765L6.745 8.841a.6.6 0 01.34-.365l5.387-2.218a.6.6 0 01.653.13l4.404 4.405a.6.6 0 01.145.615zM3.296 20.602l6.364-6.364"></path><path d="M17.792 11.056l2.828-2.829a2 2 0 000-2.828L18.5 3.277a2 2 0 00-2.829 0l-2.828 2.829M11.781 12.116a1.5 1.5 0 10-2.121 2.122 1.5 1.5 0 002.121-2.122z"></path></g><defs><clipPath id="design-nib_svg__clip0_2585_14438"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>pai<span class="c-khSxjL">n</span>t with code. Relentlessly devoted to fine, detailed<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" class="c-arzPs" color="currentColor"><path d="M16 6.28a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.822-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.232 0L12 4.78l.106-.107A2.276 2.276 0 0116 6.28z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path><path d="M18 20l3.824-3.824a.6.6 0 00.176-.424V10.5A1.5 1.5 0 0020.5 9v0a1.5 1.5 0 00-1.5 1.5V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 16l.858-.858a.484.484 0 00.142-.343v0a.485.485 0 00-.268-.433l-.443-.221a2 2 0 00-2.308.374l-.895.895a2 2 0 00-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 012 15.752V10.5A1.5 1.5 0 013.5 9v0A1.5 1.5 0 015 10.5V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 16l-.858-.858A.485.485 0 015 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 012.308.374l.895.895a2 2 0 01.586 1.414V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>polish. Always seeking o<span class="c-khSxjL">u</span>t the<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" class="c-arzPs c-arzPs-iihzYbP-css" color="currentColor"><path d="M17 12h1M22 12h1M6.236 7a3 3 0 10-4.472-4 3 3 0 004.472 4zm0 0L19 18M6.236 17a3 3 0 11-4.472 4 3 3 0 014.472-4zm0 0L19 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>cutting edge in my craft. Currently at <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="c-cZvYtt">Vercel</a>. Previously at <a href="https://thebrowser.company" target="_blank" rel="noopener noreferrer" class="c-cZvYtt">The Browser Company</a>.</div></div>
 * */

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
