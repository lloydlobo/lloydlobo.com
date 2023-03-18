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
				dark:[&>*]:bg-[#0e0d0e]
				[&>span]:m-[0.2vw] 
				md:[&>span]:m-[var(--square-margin)]`}
      >
        <>
          <div
            id="solarGlare"
            className="absolute -z-50 aspect-square blur-2xl"
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

          #solarGlare {
            left: 50%;
            top: 50%;
            right: 50%;
            bottom: 50%;
            margin-top: 33vh;
            position: absolute;
            height: clamp(200px, 40vw, 500px);
            aspect-ratio: 1;
            translate: -50% -50%;
            border-radius: 100%;
            --on-primary: rgb(17 16 17);
            --tw-bg-opacity: 1;
            --bg-green-300: rgb(134 239 172 / var(--tw-bg-opacity));
            --bg-green-400: rgb(74 222 128 / var(--tw-bg-opacity));
            background: linear-gradient(
              to right,
              pink,
              aquamarine,
              var(--bg-green-400)
            );
            animation: rotate var(--timing-mouse-duration, 30s) infinite;
          }

          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            50% {
              transform: scale(1.1, 1);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
}
