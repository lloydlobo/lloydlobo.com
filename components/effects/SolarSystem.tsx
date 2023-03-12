import React from "react";
import styles from "@/components/effects/SolarSystem.module.css";

// Code modified and utilized from: https://codepen.io/kowlor/pen/ZYYQoy?editors=0100
export const SolarSystem = (props: {}) => {
	return (
		<div className={`${styles.body} rounded-t-[200px] lg:rounded-t-[1000px]`}>
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
