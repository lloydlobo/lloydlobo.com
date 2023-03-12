import React from "react";
import styles from "@/components/effects/SolarSystem.module.css";

const SS = {
  sun: 40,
  mercury_orb: 40,
};

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {
  console.dir(styles.sun);
  return (
    <div
      className={`${styles.body} rounded-t-[200px] lg:rounded-t-[1000px] pt-60 lg:pt-80`}
    >
      <div data-id="solar-system" className="solar-system">
        <div>
          <div
            data-id="sun"
            style={{
              background:
                "radial-gradient(ellipse at center, #ffd000 1%, #f9b700 39%, #f9b700 39%, #e06317 100%)",
              width: SS.sun + "px",
              // width: styles.sun + "px",
              height: SS.sun + "px",
              marginTop: `-${SS.sun / 2}px`,
              marginBottom: `-${SS.sun / 2}px`,
              backgroundPosition: "-28px -103px",
              backgroundSize: "175%",
              boxShadow:
                "0 0 11px 3px rgba(255, 106, 0, 0.4), 0 0 21px 10px rgba(255, 204, 0, 0.13)",
            }}
            className={`sun mx-auto bg-clip-padding rounded-full`}
          ></div>
          <div data-id="mercury" className="mercury "></div>
        </div>
      </div>
    </div>
  );
};
