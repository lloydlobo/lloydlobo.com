import React from "react";
// https://getwaves.io/
export default function CurvedTop() {
  const fillColor = "#0c0c0c";
  return (
    <>
      <svg
        // style={{ borderTop: "1px solid rgba(100, 119, 98, 0.4)", }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className="fill-white dark:fill-[#0c0c0c]"
          // fill={fillColor}
          fill-opacity="1"
          d="M0,192L80,170.7C160,149,320,107,480,90.7C640,75,800,85,960,112C1120,139,1280,181,1360,202.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}
