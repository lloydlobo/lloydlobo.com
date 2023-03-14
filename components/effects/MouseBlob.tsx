import React from "react";

export function MouseBlob() {
  return (
    <>
      <style jsx global>
        {`
          #blob {
            background-color: white;
            height: 500px;
            aspect-ratio: 1;
            position: absolute;
          }
        `}
      </style>
      <div id="blob"></div>
    </>
  );
}
