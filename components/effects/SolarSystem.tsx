import React from "react";
import styles from "@/components/effects/SolarSystem.module.css";

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {
	return (
		<div
			className={`${styles.body} disabled:top-16 h-full bg-gradient-to-t from-black to-green-300/80 dark:from-black/90  dark:to-green-400/40 `}
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
