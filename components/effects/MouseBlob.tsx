import React, { useEffect } from "react";

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
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    return () => { };
  }, []);
  return (
    <>
      <div className="-z-50 brightness-110 dark:brightness-50 blur-[48px] w-screen min-h-screen absolute">
        <div
          id="blob"
          className="bg-gradient-to-r dark:bg-green-800 dark:from-orange-900/40
        dark:via-green-400 dark:to-purple-900/40"
        />
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
            overflow: hidden !important;
          }

          #blob {
            left: 50%;
            top: 50%;
            right: 50%;
            bottom: 50%;
            position: absolute;
            height: 500px;
            aspect-ratio: 1;
            translate: -50% -50%;
            border-radius: 100%;
            --on-primary: rgb(17 16 17);
            --tw-bg-opacity: 1;
            --bg-green-300: rgb(134 239 172 / var(--tw-bg-opacity));
            --bg-green-400: rgb(74 222 128 / var(--tw-bg-opacity));
            background: linear-gradient(
              to right,
              var(--bg-green-400),
              var(--bg-green-300)
            );
            animation: rotate var(--timing-mouse-duration, 30s) infinite;
          }

          @keyframes rotate {
            from {
              rotate: 0deg;
            }
            50% {
              --golden-ratio: 1.618;
              --pi: 3.14;
              /* scale: 1 calc((sin(var(--golden-ratio) / var(--pi)))); */
              scale: 1.1 1;
            }
            to {
              rotate: 360deg;
            }
          }

          // --angle:3deg;
          // rotate: calc(sin(var(--angle)) * var(--radius) * -1)deg;
          --angle: 30deg;
          /* Translation on X-axis */
          /* Translation on Y-axis */
          // rotate: calc(cos(var(--angle)) * var(--radius))deg;
        `}
      </style>
    </>
  );
}
