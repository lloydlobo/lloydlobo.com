import { useTheme } from "next-themes";
import styles from "@/components/effects/SolarSystem.module.css";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { MouseBlob } from "./MouseBlob";

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {
  return (
    <>
      <div className="relative inset-0 top-40 mx-auto">
        <div data-id="solar-system" className={`${styles.solar}`}>
          <ThemeToggleWrapper>
            <div className={`${styles.sun}`} />
          </ThemeToggleWrapper>

          {/* Start: Planets. */}
          <div className={styles.mercury} />
          <div className={styles.venus} />
          <div className={styles.earth} />
          <div className={styles.mars} />
          <div className={styles.jupiter} />
          <div className={styles.saturn} />
          <div className={styles.neptune} />
          <div className={styles.pluto} />
          <div className={styles.asteroid_belt} />
          {/* End: Planets. */}
        </div>

        <SolarControls />
      </div>
    </>
  );
};

type Props = {
  children: ReactNode;
};
export const ThemeToggleWrapper = (items: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [dropdown, setDropdown] = useState(false);
  const { forcedTheme } = useTheme();
  // Theme is forced, we shouldn't allow user to change the theme
  const disabled = !!forcedTheme;

  useEffect(() => {
    // useEffect only runs on the client, so now we can safely show the UI
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // e.target may select the svg or span too. e.currentTarget selects the parent button.
  const switchTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else if (theme === "system") {
      setTheme("dark");
    }
  };

  return (
    <>
      <button className="" onClick={(e) => switchTheme(e)}>
        {items.children}
      </button>
    </>
  );
};

export const SolarControls = (props: {}) => {
  const [speed, setSpeed] = useState(30); // --year-in-second: 30; /* 30 seconds = 1 Earth year. */
  // https://davidwalsh.name/css-variables-javascript
  // TODO: use animate to delay the effect
  const useUpdateSpeed = (e) => {
    e.preventDefault();
    document.documentElement.style.setProperty(
      "--year-in-second",
      e.currentTarget.value
    );
    setSpeed(Number(e.currentTarget.value));
  };

  return (
    <>
      <div className="absolute bottom-24 -right-12">
        <div className="prose-sm relative grid w-fit -rotate-90 grid-flow-col items-center gap-2 font-sans font-bold">
          <label
            id="yearInSecondLabel"
            htmlFor="yearInSecond"
            className="text-neutral-700 dark:text-neutral-200 absolute -left-12 -top-4 mb-2 inline-block aspect-square w-10 rotate-90 text-end"
          >
            {speed}s
          </label>
          {/* https://tailwind-elements.com/docs/standard/forms/range/ */}
          <input
            id="yearInSecond"
            className="transparent bg-neutral-200 h-0.5 w-fit cursor-pointer appearance-none rounded-lg border-transparent bg-gradient-to-r from-orange-400 via-green-400 to-purple-500 transition-all delay-300 duration-300 ease-in-out hover:py-2 dark:brightness-75 dark:saturate-50"
            min="1.0"
            max="120.0"
            value={speed}
            onChange={(e) => useUpdateSpeed(e)}
            type="range"
          />
          <button
            className="scale-75 brightness-50"
            onClick={() => setSpeed(30)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>
      </div>

      <style>
        {`
      #yearInSecond{
      }
      #yearInSecondLabel{
        opacity: 0.4;
      }
      #yearInSecond:hover{
        filter: brightness(100%) saturate(100%);
      }
      input:hover label {
        opacity: 1 !important;
      }
      `}
      </style>
    </>
  );
};
