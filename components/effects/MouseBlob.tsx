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
  useEffect(() => {
    const blob = document.getElementById("blob");
    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.style.left = `${clientX}px`;
      blob.style.top = `${clientY}px`;
    };

    return () => { };
  }, []);
  return (
    <>
      <div
        id="blob"
        className="absolute aspect-square h-[500px] bg-gradient-to-t from-on-primary to-green-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-3xl brightness-[25%]  mix-blend-screen disabled:mix-blend-multiply backdrop-blur-xl -z-[9999999]"
      ></div>
    </>
  );
}
