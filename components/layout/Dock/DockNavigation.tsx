import { useDarkMode } from "@/hooks/useDarkMode";
import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaDesktop,
} from "react-icons/fa";
import { useTheme } from "next-themes";

export function DockNavigation() {
  return <DockNav />;
}

const onHoverStyles = `hover:text-green-500 dark:hover:text-gray1`;

function DockNav() {
  return (
    <nav className="z-50 fixed bottom-5 left-0 right-0">
      <div className="border divider-gray6/40 divide-gray4/30 px-4 py-4 divide-x gap-2 border-opacity-10 rounded-full border-secondary/10 w-fit mx-auto bg-opacity-40 backdrop-blur-[1.5px]">
        <div className="dock relative grid grid-flow-col w-[200px] justify-between gap-4 place-items-center">
          <HomeIcon />
          <WorkIcon />
          <GithubIcon />
          <MailIcon />
        </div>
      </div>
    </nav>
  );
}

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const handleMode = (e) => {
    setTheme!(e.target.id);
  };

  // <div  onChange={e => setTheme(e.target.value)}> <option className="text-gray4 relative w-6 h-6" value="system"> <span className="absolute"><FaDesktop /></span> </option> <option className="text-gray4 relative w-6 h-6" value="dark">   <span className="absolute"><FaMoon /></span> </option> <option className="text-gray4 relative w-6 h-6" value="light">  <span className="absolute"><FaSun /></span> </option> </div>
  return (
    <>
      <div
        onClick={handleMode}
        className="flex brightness-75 cursor-pointer items-center font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
      >
        {mounted ? (
          <button
            className="w-6 z-10 flex items-center justify-center h-6 rounded bg-primary"
            id="dark"
          >
            <FaSun />
          </button>
        ) : (
          <div id="light">
            <FaMoon />
          </div>
        )}
      </div>
    </>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sun = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      style={{ transform: "rotate(90deg)" }}
      className="sc-a794b73f-1 cfurEx"
    >
      <mask id="moon-mask-main-nav">
        <rect x="0" y="0" width="18" height="18" fill="#FFF"></rect>
        <circle cx="25" cy="0" r="8" fill="currentColor"></circle>
      </mask>
      <circle
        cx="9"
        cy="9"
        fill="currentColor"
        mask="url(#moon-mask-main-nav)"
        r="5"
      ></circle>
      <g>
        <circle
          cx="17"
          cy="9"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
        <circle
          cx="13"
          cy="15.928203"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
        <circle
          cx="5"
          cy="15.928203"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
        <circle
          cx="1"
          cy="9"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
        <circle
          cx="5"
          cy="2.071797"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
        <circle
          cx="13"
          cy="2.071797"
          r="1.5"
          fill="currentColor"
          style={{ transformOrigin: "center center", transform: "scale(1)" }}
        ></circle>
      </g>
    </svg>
  );
};

const Moon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      style={{ transform: "rotate(40deg)" }}
      className=""
    >
      <mask id="moon-mask-main-nav">
        <rect x="0" y="0" width="18" height="18" fill="#FFF"></rect>
        <circle cx="10" cy="2" r="8" fill="currentColor"></circle>
      </mask>
      <circle
        cx="9"
        cy="9"
        fill="currentColor"
        mask="url(#moon-mask-main-nav)"
        r="8"
      ></circle>
      <g>
        <circle
          cx="17"
          cy="9"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
        <circle
          cx="13"
          cy="15.928203"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
        <circle
          cx="5"
          cy="15.928203"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
        <circle
          cx="1"
          cy="9"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
        <circle
          cx="5"
          cy="2.071797"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
        <circle
          cx="13"
          cy="2.071797"
          r="1.5"
          fill="currentColor"
          style={{
            transformOrigin: "center center 0px",
            transform: "scale(0)",
          }}
        ></circle>
      </g>
    </svg>
  );
};

export function ThemeDropdown() {
  const [mounted, setMounted] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  // e.target may select the svg or span too. e.currentTarget selects the parent button.
  const switchTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTheme(e.currentTarget.id);
    setDropdown(!dropdown);
  };
  const themeModes = [
    { name: "system", icon: <FaDesktop /> },
    { name: "light", icon: <Sun /> },
    {
      name: "dark",
      icon: (
        <span className="-rotate-[25deg]">
          <Moon />
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="grid">
        {/* Dropdown */}
        <div
          className={`${dropdown ? "opacity-100" : "opacity-0 left-[200vw]"
            } absolute top-8 z-10`}
        >
          <div className="py-0.5 divide-gray4/30 rounded-md grid h-fit divide-y text-start">
            {themeModes.map(({ name, icon }, index) => (
              <button
                onClick={(e) => switchTheme(e)}
                id={name}
                aria-label={`Activate ${name} mode`}
                key={`theme-${name}-${index}`}
                className="flex cursor-pointer hover:backdrop-brightness-150 dark:bg-transparent hover:bg-green-400 dark:hover:backdrop-brightness-200 dark:hover:bg-gray1/10 px-2 text-center py-2 divide-white gap-x-2 w-full"
              >
                <>
                  <div className="scale-100 brightness-75">{icon}</div>
                  <span className="text-xs brightness-90">{name}</span>
                </>
              </button>
            ))}
          </div>
        </div>

        {/* Current theme dock icon */}
        <div
          className={`${onHoverStyles} font-semibold underline underline-offset-8`}
        >
          {themeModes.map(({ name, icon }, index) => {
            if (theme === name) {
              return (
                <button
                  key={`theme-${name}-${index}-curr-${theme}`}
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                  className="text-base flex items-center cursor-pointer brightness-75"
                >
                  {icon}
                </button>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme!(!darkTheme);
  return (
    <>
      <span
        onClick={handleMode}
        className="flex brightness-75 cursor-pointer items-center font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
      >
        {darkTheme ? <FaSun /> : <FaMoon />}
      </span>
    </>
  );
};

const HomeIcon = () => {
  return (
    <Link
      href="/"
      className={`${onHoverStyles} font-semibold underline underline-offset-8`}
      data-te-toggle="tooltip"
      data-te-placement="top"
      data-te-ripple-init
      data-te-ripple-color="light"
      title="Home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    </Link>
  );
};
const WorkIcon = () => {
  return (
    <Link
      href="/work"
      className={`${onHoverStyles} font-semibold underline underline-offset-8`}
      data-te-toggle="tooltip"
      data-te-placement="top"
      data-te-ripple-init
      data-te-ripple-color="light"
      title="Work"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    </Link>
  );
};
const GithubIcon = () => {
  return (
    <a
      href="https://github.com/lloydlobo/"
      className={`${onHoverStyles} font-semibold underline underline-offset-8`}
      data-te-toggle="tooltip"
      data-te-placement="top"
      data-te-ripple-init
      data-te-ripple-color="light"
      title="Code"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
        ></path>
      </svg>
    </a>
  );
};

const MailIcon = () => {
  return (
    <a
      href="mailto:hello@lloydlobo.com"
      className={`${onHoverStyles} font-semibold underline underline-offset-8`}
      data-te-toggle="tooltip"
      data-te-placement="top"
      data-te-ripple-init
      data-te-ripple-color="light"
      title="Email"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    </a>
  );
};
