import styles from "@/components/effects/BackdropGridLines.module.css";

export function BackdropGridLines() {
  return (
    <>

      <div
        id="modeMatrix"
        style={
          {
            // willChange: "transform",
          }
        }
        className={` ${styles.component} grid-rows-9 
				md:grid-rows-8 
				max-w-screen 
				absolute
				inset-0
				top-8
				-z-40
				my-auto
				inline-grid
				max-h-screen 
				grid-cols-4 
				overflow-hidden
				md:grid-cols-6 
				[&>*]:bg-white
				isolate
				dark:[&>*]:bg-[#0e0d0e]
				[&>span]:m-[0.2vw] 
				md:[&>span]:m-[var(--square-margin)]`}
      >
        <>
          <div
            id="solarGlare"
            className={`${styles.solar_glare} dark:bg-gradient-to-r from-pink-200 via-green-300 to-purple-600 `}
          />
        </>
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
        <span className={`${styles.square} square`} />
      </div>

      <style jsx global>
        {`
          :root {
            --square-margin: clamp(
              0.328px,
              1vw,
              1.618px
            ); /* automate to open the portal */
            --earth-days: 365.2563;
          }

          #modeMatrix {
            gap: 1.132px;
          }

        `}
      </style>
    </>
  );
}
