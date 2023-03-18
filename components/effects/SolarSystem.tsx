import { useTheme } from "next-themes";
import styles from "@/components/effects/SolarSystem.module.css";
import React, { ReactNode, useEffect, useRef, useState } from "react";

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {
  return (
    <>
      <div className={`relative -z-50 ${styles.body}`}>
        <div className="-z-10">
          <div className="relative inset-0 z-50 hover:opacity-100 transition-opacity opacity-40">
            <SolarControls />
          </div>

          <div
            data-id="solar-system"
            className={`relative -z-50 ${styles.solar} `}
          >
            {/* <ThemeToggleWrapper> </ThemeToggleWrapper> */}
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
            <div className={styles.uranus} />
            <div className={styles.neptune} />
            {/* End: Planets. */}

            {/* <div className={styles.pluto} /> */}

            <div className={styles.asteroid_belt} />
          </div>

        </div>
      </div>
    </>
  );
};

// https://davidwalsh.name/css-variables-javascript
// TODO: use animate to delay the effect
export const SolarControls = (props: {}) => {
  const [speed, setSpeed] = useState(30); // --year-in-second: 30; /* 30 seconds = 1 Earth year. */
  const useUpdateSpeed = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    e.preventDefault();
    document.documentElement.style.setProperty("--year-in-second", value);
    setSpeed(Number(value));
  };

  return (
    <>
      {/* https://tailwind-elements.com/docs/standard/forms/range/ */}
      <div className="absolute left-[85%] md:left-[90%] mt-20 ">
        <div className="relative flex h-fit w-fit flex-col items-center gap-0 px-3 font-sans  text-sm font-bold">
          <div className="absolute -top-3 left-1/2 mx-auto origin-left -rotate-90 place-self-center">
            <input
              id="yearInSecond"
              className="transparent transition-opacity bg-gray3/50 dark:bg-on-tertiary cursor-pointer appearance-none rounded-full border-transparent dark:opacity-40 hover:opacity-100"
              min="5.00"
              max="120.00"
              value={speed}
              onChange={(e) => useUpdateSpeed(e, e.currentTarget.value)}
              type="range"
            />
          </div>
          <div className="scale-75">
            <div className="relative grid gap-2 font-sans">
              <label
                id="yearInSecondLabel"
                htmlFor="yearInSecond"
                data-hover={`${speed} seconds = ${30 / speed} Earth year`}
                className={`text-neutral-700 dark:text-neutral-200 relative text-end text-sm before:bg-on-primary/40  cursor-help font-bold before:absolute hover:before:-translate-x-[111%] before:opacity-100 before:scale-110 before:w-[23ch] hover:before:content-['30_seconds_=_1_Earth_year'] `}
              >
                {speed}s
              </label>
              <span
                id="yearInSecondLabel"
                className="text-neutral-700 dark:text-neutral-200 text-right text-xs absolute top-[100%] right-[1%] pt-2 -z-10 min-w-[12ch] font-bold "
              >
                {speed} seconds<br/>{(speed/30).toPrecision(2)} Earth year
              </span>
              <button title="Reset" className="scale-90" onClick={(e) => useUpdateSpeed(e, "30.0")}>
                <ResetIcon />
              </button>
              <button title="Stop" onClick={(e) => useUpdateSpeed(e, "0.0")}>
                <StopIcon />
              </button>
            </div>
          </div>
        </div>
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

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
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
      <button className="absolute" onClick={(e) => switchTheme(e)}>
        {items.children}
      </button>
    </>
  );
};

const ResetIcon = () => {
  return (
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
  );
};

const StopIcon = () => {
  return (
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
        d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
      />
    </svg>
  );
};
