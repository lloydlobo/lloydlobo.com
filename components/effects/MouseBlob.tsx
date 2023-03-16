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
      }, { duration: 2700, fill: "forwards" });
    };

    return () => { };
  }, []);
  return (
    <>
      <style jsx>
        {`
          html,
          body,
          main,
          article {
            overflow: hidden !important;
          }
        `}
      </style>
      <div className="-z-50 dark:brightness-[55%] blur-3xl w-screen min-h-screen absolute">
        <div
          id="blob"
          className="absolute aspect-square h-[500px] bg-gradient-to-t from-gray1 to-green-300 dark:from-on-primary dark:to-green-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] -z-[9999999]"
        ></div>
      </div>
    </>
  );
}
