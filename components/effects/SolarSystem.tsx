import React from "react";
import styles from "@/components/effects/SolarSystem.module.css";

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {
	return (
		<div
			className={`${styles.body} disabled:top-16 absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t backdrop-blur-sm from-black/95 saturate-100 brightness-100 dark:brightness-100 h-full to-green-400/90 dark:from-black/90  dark:to-green-400/50
			`}
		>
			<div data-id="solar-system" className={`${styles.solar}`}>
				<div className={styles.sun} />
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

//
