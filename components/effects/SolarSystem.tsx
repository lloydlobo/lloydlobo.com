import { useTheme } from "next-themes";
import styles from "@/components/effects/SolarSystem.module.css";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { ClockNav } from "@/pages";

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {
  return (
    <>
      <div
        className={`relative aspect-square`}>
        <div className="aspect-square -z-40">
          <div
            data-id="solar-system"
            className={`relative flex flex-col-reverse  border z-10 ${styles.solar} `}
          >
            {/* <ThemeToggleWrapper> </ThemeToggleWrapper> */}
            <ThemeToggleWrapper>
              <div className={`${styles.sun}`} />
            </ThemeToggleWrapper>

            {/* Start: Planets. */}
            <div className={`${styles.mercury}`} />
            <div className={`${styles.venus}`} />
            <div className={`${styles.earth}`} />
            <div className={`${styles.mars}`} />
            <div className={`${styles.jupiter}`} />
            <div className={`${styles.saturn}`} />
            <div className={`${styles.uranus}`} />
            <div className={`${styles.neptune}`} />
            {/* End: Planets. */}

            {/* <div className={styles.pluto} /> */}

            <div className={styles.asteroid_belt} />
          </div>
        </div>
      </div>
          <div className="relative z-50  mt-12">
          <SolarControls />
          </div>
    </>
  );
};

// <label
//   id="yearInSecondLabel"
//   htmlFor="yearInSecond"
//   data-hover={`${speed} seconds = ${30 / speed} Earth year`}
//   className={`text-neutral-700 dark:text-neutral-200 relative z-10 hidden cursor-help text-start text-xs after:relative after:left-3 after:w-[23ch] after:scale-110 after:bg-on-primary/40 after:opacity-100 hover:after:translate-x-[111%] hover:after:content-['30_seconds_=_1_Earth_year'] `}
// >
//   {speed}s
// </label>
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
      <div className="mx-auto grid w-[300px] min-w-[31vw] gap-y-2 font-sans text-sm font-bold opacity-30 transition-opacity delay-500 hover:opacity-80 hover:delay-[5ms]">
        <div className="grid h-full w-full">
          <input
            id="yearInSecond"
            className="transparent h-1.5 cursor-pointer appearance-none rounded-full border-transparent bg-gray3/50 transition-opacity hover:opacity-100 dark:bg-tertiary/30 dark:opacity-40"
            min="5.00"
            max="120.00"
            value={speed}
            onChange={(e) => useUpdateSpeed(e, e.currentTarget.value)}
            type="range"
          />
        </div>

        <div className="relative grid w-full grid-flow-col items-center font-sans">
          <span
            style={{ wordSpacing: 1 }}
            id="yearInSecondLabel"
            className="text-neutral-700 dark:text-neutral-200 relative mr-auto flex-grow origin-left text-start text-[9px] font-medium uppercase tracking-wide"
          >
            <span className="font-bold">{speed}</span> seconds{" /  "}
            <span className="font-bold">
              {(speed / 30).toPrecision(2)}
            </span>{" "}
            Earth year
          </span>

          <div className="ml-auto flex w-10 place-self-end">
            <button
              title="Reset"
              className="ml-auto scale-75"
              onClick={(e) => useUpdateSpeed(e, "30.0")}
            >
              <ResetIcon />
            </button>

            <button
              title="Stop"
              className="scale-75"
              onClick={(e) => useUpdateSpeed(e, "0.0")}
            >
              <StopIcon />
            </button>
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
