import { useTheme } from "next-themes";
import styles from "@/components/effects/SolarSystem.module.css";
import React, { ReactNode, useEffect, useRef, useState } from "react";

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {

	return (
		<>
			<div className="relative top-40 inset-0 mx-auto" >
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
			</div>
			<>
				<div
					className="absolute hidden aspect-square overflow-visible h-[500px] bg-gradient-to-t from-gray1 to-yellow-500 dark:from-on-primary dark:to-green-400 left-1/2 top-1/3 disabled:top-1/2  -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-3xl dark:brightness-[25%] opacity-90 -z-50"
				></div>
			</>
		</>
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
				className=""
				onClick={(e) => switchTheme(e)}
			>
				{items.children}
			</button>
		</>
	)
}
