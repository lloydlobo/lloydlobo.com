import React from "react";
import styles from "@/components/effects/SolarSystem.module.css";

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {
	return (
		<div
			// className={`${styles.body} disabled:rounded-t-[200px] disabled:lg:rounded-t-[1000px] opacity-90 mix-blend-color-burn blur-[0.5px] bg-on-primary saturate-[95%] `}
			className={`${styles.body} disabled:top-16 h-full relative opacity-100 mix-blend-color-burn bg-gray2 dark:bg-on-primary saturate-[95%] grayscale-[10%] `}
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
