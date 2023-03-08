import { useEffect, useState } from "react";

// https://tailwindcss.com/docs/dark-mode
// https://github.com/fireship-io/tailwind-dashboard/blob/main/src/hooks/useDarkMode.jsx

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    };

  };
  return [storedValue, setValue];
};

// const checkPreference = () => { if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) { return true; } return false; }

const checkWindow = (action) => {
  return typeof window !== undefined ? action : null;
};

export const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme', false);
  console.log({ enabled });

  const isEnabled = typeof enabled === 'undefined' && enabled;
  console.log({ isEnabled });


  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;
    // let isPref = checkWindow(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
    // isPref ? bodyClass.add(className) : bodyClass.remove(className);
    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
    return () => { }
  }, [enabled, isEnabled])
  return [enabled, setEnabled];
}
