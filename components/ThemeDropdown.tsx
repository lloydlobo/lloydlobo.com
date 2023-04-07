import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FaMoon, FaSun, FaDesktop } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Sun } from "@/components/icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const onHoverStyles = `hover:text-green-500 dark:hover:text-accent`;
export function ThemeDropdown() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [dropdown, setDropdown] = useState(false);
  const { forcedTheme } = useTheme();
  // Theme is forced, we shouldn't allow user to change the theme
  const disabled = !!forcedTheme;

  useEffect(() => {
    setMounted(true);
  }, []);

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
          <FaMoon />
        </span>
      ),
    },
  ];

  if (!mounted) {
    return (
      <button className="">
        <FaMoon />
      </button>
    );
  }

  return (
    <div className="relative">
      {/* Dropdown */}
      <div className={`${dropdown ? "block" : "hidden"}`}>
        <div className="absolute right-0 top-8 grid max-h-[100px] divide-y divide-gray4/30 rounded-md bg-white/30 py-0.5 text-start backdrop-blur-xl dark:bg-on-primary/30 dark:text-primary">
          {themeModes.map(({ name, icon }, index) => (
            <button
              onClick={(e) => switchTheme(e)}
              id={name}
              aria-label={`Activate ${name} mode`}
              key={`theme-${name}-${index}`}
              disabled={disabled}
              className="flex w-full cursor-pointer gap-x-2 divide-white px-2 py-2 text-center hover:bg-green-400 hover:backdrop-brightness-150 dark:bg-transparent dark:hover:bg-gray1/10 dark:hover:backdrop-brightness-200"
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
      <div className={`${onHoverStyles} ${disabled ? "hidden" : "block"}`}>
        {themeModes.map(({ name, icon }, index) => {
          if (theme === name) {
            return (
              <button
                key={`theme-${name}-${index}-curr-${theme}`}
                disabled={disabled}
                onClick={() => {
                  setDropdown(!dropdown);
                }}
              >
                {icon}
              </button>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
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
        className="flex cursor-pointer items-center font-semibold underline decoration-accent underline-offset-8 brightness-75 hover:text-accent"
      >
        {mounted ? (
          <button
            className="z-10 flex h-6 w-6 items-center justify-center rounded bg-primary"
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
