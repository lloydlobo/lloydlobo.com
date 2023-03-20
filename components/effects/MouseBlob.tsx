import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

// Inspiration: https://www.youtube.com/watch?v=kySGqoU7X-s
export function MouseBlob() {
  // blob.style.left = `${clientX}px`;
  // blob.style.top = `${clientY}px`;
  useEffect(() => {
    // const blob = document.getElementById("blob");
    const blob = document.getElementById("blobContainer");

    document.body.onpointermove = (event) => {
      event.preventDefault();
      const { clientX, clientY } = event;
      // For delayed and relaxed effect use animate API.
      // `fill: "forwards"` - Avoid reset of property at duration end.
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    return () => { };
  }, []);
  return (
    <>
      <div id="blobContainer"
        className="w-screen absolute h-screen"
      // className="absolute-z-50 absolute min-h-screen w-screen overflow-hidden opacity-60 "
      >
        <div id="blobGroup" className="relative">
          <div id="prop" className=""> <FaGithub /> </div>
          <div className="-z-50 blur-[38px]">
            <div id="blob" className="bg-gradient-to-r transition-transform ease-in-out dark:bg-green-800 dark:from-orange-900/40 dark:via-green-400 dark:to-purple-900/40" />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          :root {
            --timing-mouse-duration: 60s;
            --tw-bg-opacity: 1;
            --tw-green-400: ;
          }

          html,
          body,
          main,
          article {
            touch-action: none;
            overflow: hidden !important;
          }

          #blobContainer{
            position: absolute;
            display: flex;
            height: 200px;
            width: 200px;
            aspect-ratio: 1;
            translate: -50% -166%;
            z-index: 0;
            left: 50%;
            top: 50%;
            right: 50%;
            bottom: 50%;
          }

          #blobGroup {
            position: relative;
            display: grid;
            place-content: center;
            width: 100%;
            // width: 200px;
            // height: 200px;
            aspect-ratio: 1;
            // left: 0%;
            // top: 0%;

          }

          #prop {
            // display: none;
            opacity: 0.75;
            position: absolute;
            aspect-ratio: 1;
            transform: scale(20);
            z-index: -1;
            margin: auto;
            left: 50%;
            top: 50%;
            // right: 50%;
            // bottom: 50%;
            translate: -50% -50%;
            will-change: transform;
          }

          #blob {
            z-index: -2;
            postion: relative;
            // left: 50%;
            // top: 50%;
            height: 100%;
            // width: 100%;
            height: 31.28vw;
            aspect-ratio: 1;
            border-radius: 100%;
            opacity: 0.4;
            --on-primary: rgb(17 16 17);
            --tw-bg-opacity: 1;
            --bg-green-300: rgb(134 239 172 / var(--tw-bg-opacity));
            --bg-green-400: rgb(74 222 128 / var(--tw-bg-opacity));
            background: linear-gradient(
              to right,
              var(--bg-green-400),
              var(--bg-green-300),
              aquamarine
            );
            animation: rotate var(--timing-mouse-duration, 30s) infinite;
          }

          #blob:after {
            content: "";
            will-change: transform;
            postion: absolute;
            display:none;
            // height: 1.28vw;
            // top: 0%;
            // left: 0%;
            right: 50%;
            padding: 2rem;
            // translate: 50% 50%;
            // aspect-ratio: 1;
            border-radius: 100%;
            --bg-green-300: rgb(134 239 172 / var(--tw-bg-opacity));
            --bg-green-400: rgb(74 222 128 / var(--tw-bg-opacity));
            background: linear-gradient(
              to right,
              var(--bg-green-400),
              var(--bg-green-300),
              aquamarine
            );
            z-index:  1;
            animation: rotate var(--timing-mouse-duration, 30s) infinite;
          }

          @keyframes rotate {
            from {
              rotate: 0deg;
            }
            50% {
            }
            to {
              rotate: 360deg;
            }
          }
        `}
      </style>
    </>
  );
}
