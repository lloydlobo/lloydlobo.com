import { useTheme } from "next-themes";
import styles from "@/components/effects/SolarSystem.module.css";
import React, { ReactNode, useEffect, useRef, useState } from "react";

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {
	return (
		<div
			className={`${styles.body} disabled:top-16 absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t backdrop-blur-xl from-black/95 saturate-100 brightness-100 dark:brightness-100 h-full to-green-400/90 dark:from-black/90 dark:to-green-400/50
			`}
		>
			<div data-id="solar-system" className={`${styles.solar}`}>
				<div className={`${styles.sun}`} />
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
		</div>
	);
};

type Props = {
	children: ReactNode
}
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
			<button
				className="cursor-pointer absolute flex items-center bg-white w-full"
				onClick={(e) => switchTheme(e)}
			>
				{items.children}
			</button>
		</>
	)
}
