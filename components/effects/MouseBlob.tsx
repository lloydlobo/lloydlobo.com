import React, { useEffect } from "react";

/* Disable the aspect ratio for slinky effect */
/*
      <style jsx global>
        {`
          #blob {
            background-color: white;
            height: 500px;
            aspect-ratio: 1;
            border: 1px solid red;
            position: absolute;
          }
        `}
      </style>
*/

//
// Inspiration: https://www.youtube.com/watch?v=kySGqoU7X-s
export function MouseBlob() {
  // blob.style.left = `${clientX}px`;
  // blob.style.top = `${clientY}px`;
  useEffect(() => {
    const blob = document.getElementById("blob");

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      // For delayed and relaxed effect use animate API.
      // `fill: "forwards"` - Avoid reset of property at duration end.
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
      }, { duration: 3000, fill: "forwards" });
    };

    return () => { };
  }, []);
  return (
    <>
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
            overflow: hidden !important;
          }
          #blob {
            left: 50%;
            top: 50%;
            right: 50%;
            bottom: 50%;
            position: absolute;
            height: 500px;
            aspect-ratio:1;
            translate: -50% -50%;
            border-radius: 100%;
            background: linear-gradient(to right, rgb(74 222 128), rgb(17 16 17));
            animation: rotate var(--timing-mouse-duration, 20s) infinite;
          }

          @keyframes rotate {
            from {
              rotate: 0deg;
            }
            to {
              rotate: 360deg;
            }
          }
        `}
      </style>
      <div className="-z-50 dark:brightness-[55%] blur-[48px] w-screen min-h-screen absolute">
        <div
          id="blob"
          className="bg-gradient-to-r dark:bg-green-800 dark:from-orange-900/40
        dark:via-green-400 dark:to-purple-900/40"
        />
      </div>
    </>
  );
}
