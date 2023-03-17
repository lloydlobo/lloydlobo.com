import { useTheme } from "next-themes";
import styles from "@/components/effects/SolarSystem.module.css";
import React, { ReactNode, useEffect, useRef, useState } from "react";

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {
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
      <div className="relative inset-0 top-40 mx-auto">
        <div data-id="solar-system" className={`${styles.solar}`}>
          <ThemeToggleWrapper>
            <div className={`${styles.sun}`} />
          </ThemeToggleWrapper>
          <div className={styles.mercury} />
          <div className={styles.venus} />
          <div className={styles.earth} />
          <div className={styles.mars} />
          <div className={styles.jupiter} />
          <div className={styles.saturn} />
          <div className={styles.neptune} />
          <div className={styles.pluto} />
          <div className={styles.asteroid_belt} />
        </div>

        <div className="absolute bottom-24 -right-12">
          <div className="prose-sm relative grid w-fit -rotate-90 grid-flow-col items-center gap-2 font-sans font-bold">
            <label
              id="yearInSecondLabel"
              htmlFor="yearInSecond"
              className="text-neutral-700 dark:text-neutral-200 absolute -left-12 -top-4 mb-2 inline-block aspect-square w-10 rotate-90 text-end"
            >
              {speed}s
            </label>
            <input
              id="yearInSecond"
              className="transparent bg-neutral-200 dark:brightness-75 dark:saturate-50 h-0.5 bg-gradient-to-r w-fit from-orange-400 via-green-400 to-purple-500 cursor-pointer appearance-none rounded-lg border-transparent"
              min="1.0"
              max="120.0"
              onChange={(e) => useUpdateSpeed(e)}
              type="range"
            />
          </div>
        </div>
      </div>

      <>
        <div
          className={`
					absolute left-1/2 
					top-1/3 
					-z-50 
					hidden aspect-square h-[500px] -translate-x-1/2 
					-translate-y-1/2 overflow-visible 
					rounded-[50%] bg-gradient-to-t from-gray1  
					to-yellow-500 opacity-90 
					blur-3xl disabled:top-1/2 
					dark:from-on-primary dark:to-green-400 dark:brightness-[25%]
					`}
        ></div>
      </>

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
