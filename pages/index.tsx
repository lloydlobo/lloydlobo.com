import Link from "next/link";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Section } from "@/components/Section";
import Layout from "@/components/Layout";
import { SolarSystem } from "@/components/effects/SolarSystem";
import { MouseBlob } from "@/components/effects/MouseBlob";

export function ClockNav() {
	const [currentTime, setCurrentTime] = useState(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date().toLocaleTimeString());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="text-xs text-center font-semibold bg-opacity-50 backdrop-blur-[2px] ">
			<span className="h-full relative dark:text-secondary brightness-75 text-opacity-70">
				{currentTime ? (
					<span>{currentTime}</span>
				) : (
					<span className="blur-[0.5px]"> 0:00:00 AM</span>
				)}
			</span>
		</div>
	);
}

export default function IndexPage() {
	return (
		<>
			<div className="">
				<Layout title="Home">
					<main className="lg:top-0 z-10 relative -top-16">
						<Section>
							<article className=" py-0 disabled:lg:py-12 space-y-8">
								<p className="prose-xl md:prose-2xl disabled:[word-spacing:0.45ch] tracking-tight leading-8 md:leading-9 lowercase text-justify mx-auto font-medium gap-1">
									<Link
										href="/about"
										className="tracking-wider dark:text-secondary"
									>
										lloyd lobo.
									</Link>

									<span className="dark:text-primary">
										{" "}
										creating{" "}
										<span className="inline-flex">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-6 h-6"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
												/>
											</svg>
										</span>{" "}
										software with the focus on innovative experiences that
										exceed client expectations.{" "}
										<em className="dark:text-secondary">software developer</em>{" "}
										with an <span id="roughblock">eye</span> for design and
										motion. deeply curious about functional and beautiful{" "}
										<svg
											// https://primer.style/design/foundations/icons/git-compare-24
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-5 h-5 inline-flex"
										>
											<path d="M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z" />
										</svg>{" "}
										apps. tend to use{" "}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={1.5}
											className="w-5 h-5 inline-flex"
										>
											<path d="M16.5 19.25a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm3.25-1.75a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z"></path>
											<path d="M13.905 1.72a.75.75 0 0 1 0 1.06L12.685 4h4.065a3.75 3.75 0 0 1 3.75 3.75v8.75a.75.75 0 0 1-1.5 0V7.75a2.25 2.25 0 0 0-2.25-2.25h-4.064l1.22 1.22a.75.75 0 0 1-1.061 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM7.5 4.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0ZM4.25 6.5a1.75 1.75 0 1 0-.001-3.501A1.75 1.75 0 0 0 4.25 6.5Z"></path>
											<path d="M10.095 22.28a.75.75 0 0 1 0-1.06l1.22-1.22H7.25a3.75 3.75 0 0 1-3.75-3.75V7.5a.75.75 0 0 1 1.5 0v8.75a2.25 2.25 0 0 0 2.25 2.25h4.064l-1.22-1.22a.748.748 0 0 1 .332-1.265.75.75 0 0 1 .729.205l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0Z"></path>
										</svg>{" "}
										open source and machine learning tools to architect
										efficient{" "}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6 inline-flex"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
											/>
										</svg>{" "}
										code and tackle complex problems with{" "}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-5 h-5 inline-flex"
										>
											<path d="M17.28 9.28a.75.75 0 0 0-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6.5-6.5Z"></path>
											<path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path>
										</svg>{" "}
										ease.
									</span>
								</p>
							</article>
						</Section>
					</main>
				</Layout>
			</div>

			<div className="overflow-visible aspect-square top-[61.8%] lg:top-[61.8%] lg:w-[61.8vw] mx-auto fixed inset-0">
				<SolarSystem />
			</div>

			<div className="-z-10">
				<BackdropGridLines />
			</div>

			{/*
							<div className="absolute inset-0 w-screen h-screen">
								<RotateOriginTracker />
							</div>
				 */}
		</>
	);
}

const BackdropGridLines = () => {
	return (
		<>
			<div
				id="modeMatrix"
				className="inline-grid 
				my-auto 
				top-8 
				[&>span]:m-[0.2vw]
				md:[&>span]:m-[var(--square-margin)]
				grid-cols-4
				grid-rows-9
				md:grid-cols-6
				md:grid-rows-8
				dark:brightness-[80%] 
				inset-0 
				dark:[&>*]:bg-on-primary
				-z-40 
				absolute 
				overflow-hidden
				max-w-screen 
				max-h-screen"
			>
				<>
					<div id="solarGlare" className="absolute aspect-square blur-2xl -z-50" />
				</>
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
			</div>

			<div
				id="modeChess"
				className="hidden  disabled:inline-flex bg-gradient-to-r from-green-800/50 via-yellow-800/50 to-green-800/50 gap-[1px] my-auto top-8 flex-wrap  [&>*]:h-[16.43vw] md:[&>*]:h-[16.54vw] brightness-[80%] [&>*]:aspect-square w-screen inset-0 [&>*]:outline-green-50/10  dark:[&>*]:outline-green-400/10 grayscale-[30%] [&>*]:outline [&>*]:outline-[0.01px] -z-40 absolute h-fit"
			>
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
				<span className="square" />
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

          #modeMatrix > .square {
            scale: 1;
            aspect-ratio: 1 !important;
            animation: perimeter
              calc(
                var(--earth-days) * var(--year-in-second) /
                  var(--years-relative) * 0.5s
              )
              ease-in-out infinite;
              outline: 1px dotted #00ff0010;
          }


          @keyframes perimeter {
            from,
            35%,
            65%,
            to {
              scale: 1.01;
              border-radius: 1%; /* 2% works */
              outline: 1px dotted #00ff0010;
              border: var(--square-margin) dotted #11111190;
            }
            50% {
              scale: 0.97;
              border-radius: 1%;
              outline: 0px solid #00ff0005;
              // border: calc(var(--square-margin) * 4px) ridge #11aa1140;
              border: calc(var(--square-margin) * 4px) ridge #11101170;
            }
          }

          #solarGlare{
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
              rotate: 0deg;
            }
            50% {
              --golden-ratio: 1.618;
              --pi: 3.14;
              // scale: 1 calc((sin(var(--golden-ratio) / var(--pi))));
              scale: 1.1 1;
            }
            to {
              rotate: 360deg;
            }
          }
        `}
			</style>
		</>
	);
};

export function DockNav() {
	return (
		<div className="z-50 hidden fixed bottom-5 left-0 right-0 gird  mx-auto">
			<div className="border border-opacity-10 rounded-full border-secondary/10 w-fit mx-auto bg-opacity-40 backdrop-blur-[1.5px]">
				<nav className="dock grid grid-flow-col justify-between p-2 overflow-x-scroll overflow-y-hidden gap-1 rounded-full  place-items-center">
					<Link
						href="/"
						className="font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
						data-te-toggle="tooltip"
						data-te-placement="top"
						data-te-ripple-init
						data-te-ripple-color="light"
						title="Home"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							/>
						</svg>
					</Link>

					<Link
						href="/work"
						className="flex items-center font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
						data-te-toggle="tooltip"
						data-te-placement="top"
						data-te-ripple-init
						data-te-ripple-color="light"
						title="Work"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
							/>
						</svg>
					</Link>

					<a
						href="https://github.com/lloydlobo/"
						className="font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
						data-te-toggle="tooltip"
						data-te-placement="top"
						data-te-ripple-init
						data-te-ripple-color="light"
						title="Code"
					>
						<svg viewBox="0 0 24 24" className="h-6 w-6">
							<path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
							></path>
						</svg>
					</a>

					<a
						href="mailto:hello@lloydlobo.com"
						className="flex items-center font-semibold underline decoration-accent underline-offset-8 hover:text-accent"
						data-te-toggle="tooltip"
						data-te-placement="top"
						data-te-ripple-init
						data-te-ripple-color="light"
						title="Email"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
							/>
						</svg>
					</a>
				</nav>
			</div>
		</div>
	);
}

// RotateOriginTracker
//
// Rotate an element to face its origin #
// The atan2() function calculates the relative angle from one point to another. The function accepts two comma-separated values as its parameters: the y and x position of the other point, relative to the originating point which sits at origin 0,0.
// With the calculated value it’s possible to rotate elements so that they face each other, by using the Individual Transform Properties.
// In the example below, the boxes are rotated so that they face the location of the mouse. The mouse position is synced to a custom property through JavaScript.
//
// https://web.dev/css-trig-functions/
//
const RotateOriginTracker = () => {
	useEffect(() => {
		// Track mouse position over .origin
		const origin = document.getElementById("origin");

		document.body.onpointermove = (event) => {
			// origin.addEventListener("pointermove", (event) => {
			const { clientX, clientY } = event;
			// let x = evt.offsetX;
			// let y = evt.offsetY;

			origin.style.setProperty("--mouse-x", Math.round(clientX).toString());
			origin.style.setProperty("--mouse-y", Math.round(clientY).toString());
		};
		return () => { };
	}, []);

	return (
		<>
			<div>
				<p>
					<em>
						💡 With atan2, you can calculate the rotation for an object so that
						it points back to a specific point
					</em>
				</p>

				<div className="no-support" data-support="css-trig-fns">
					<p>
						🚨 Your browser does not support the CSS Trigonometric Functions.
						Therefore, this demo will not work properly. Please try Safari 15.4,
						Firefox 108, or Chrome 111.
					</p>
				</div>

				<div id="origin" className="origin">
					<div className="box"></div>
					<div className="box"></div>
				</div>

				<footer>
					<p>
						Demo for{" "}
						<a href="https://web.dev/css-trig-functions/" target="_top">
							https://web.dev/css-trig-functions/
						</a>
					</p>
				</footer>
			</div>

			<style jsx>
				{`
          div.box {
            --my-x: 200;
            --my-y: 300;

            /* Position the box inside its parent */
            position: absolute;
            width: 50px;
            aspect-ratio: 1;
            translate: calc((var(--my-x) * 1px)) calc(var(--my-y) * 1px);

            /* Rotate so that the box faces the mouse position */
            /* For this, take the box its own position and size (25 = half the width) into account */
            rotate: atan2(
              calc((var(--mouse-x) - var(--my-x) - 25) * 1),
              calc((var(--mouse-y) - var(--my-y) - 25) * -1)
            );
          }

          .origin {
            position: relative;
            width: 600px;
            height: 400px;
            border: 1px solid #333;
            --mouse-x: 0;
            --mouse-y: 0;
            // overflow: hidden;
            border-radius: 0.5em;
            touch-action: none;
          }

          .origin::before {
            content: "";
            height: 20px;
            width: 20px;
            translate: calc((var(--mouse-x) * 1px) - 50%)
              calc((var(--mouse-y) * 1px) - 50%);
            background: black;
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
          }

          div.box {
            --my-x: 50;
            --my-y: 300;

            width: 50px;
            height: 50px;

            background: linear-gradient(orange, red);
            border-top: 2px solid lime;
            transform-origin: 50% 50%;
            pointer-events: none;
            position: absolute;

            /* Position of the box inside its parent */
            translate: calc((var(--my-x) * 1px)) calc(var(--my-y) * 1px);

            /* Rotate so that the box faces the mouse position */
            /* For this, take the box’s own position and size (25 = half the width) into account */
            rotate: atan2(
              calc((var(--mouse-x) - var(--my-x) - 25) * 1),
              calc((var(--mouse-y) - var(--my-y) - 25) * -1)
            );
          }

          div.box:nth-child(2) {
            --my-x: 500;
            --my-y: 50;
          }

          div.box::before {
            content: "";
            display: block;
            width: 2px;
            height: 1000px;
            background: black;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 100%;
          }

          /* Non-demo styles below */
          @layer base {
            @layer reset {
              * {
                box-sizing: border-box;
              }
              body {
                margin: 0;
                padding: 0;
              }
              html,
              body {
                min-height: 100%;
              }
            }
            @layer layout {
              html {
                max-width: 84ch;
                padding: 3rem 2rem;
                margin: auto;
              }
              body {
                display: grid;
                place-content: safe center;
                gap: 1em;
              }

              html {
                --font-sans: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
                  Cantarell, Noto Sans, sans-serif, Segoe UI, Roboto, Ubuntu,
                  Cantarell, Noto Sans, sans-serif;
                --font-serif: ui-serif, serif;
                --font-mono: Dank Mono, Operator Mono, Inconsolata, Fira Mono,
                  ui-monospace, SF Mono, Monaco, Droid Sans Mono,
                  Source Code Pro, monospace;
              }
              body {
                font-family: var(--font-sans);
              }
              pre,
              code {
                font-family: var(--font-mono);
                font-size: 0.8rem;
              }
              input,
              button {
                font-family: inherit;
              }

              a,
              a:visited {
                color: blue;
              }

              h2 {
                margin-top: 2em;
              }

              summary {
                cursor: pointer;
              }

              dd + dt {
                margin-top: 0.5em;
              }

              footer {
                text-align: center;
                font-style: italic;
              }
            }

            @layer code {
              pre {
                border: 1px solid #dedede;
                padding: 1em;
                background: #f7f7f7;
                font-family: "Courier 10 Pitch", Courier, monospace;
                overflow-x: auto;
                border-left: 0.4em solid cornflowerblue;
                tab-size: 4;
              }

              code:not(pre code),
              output:not(code:has(output) output) {
                background: #f7f7f7;
                border: 1px solid rgb(0 0 0 / 0.2);
                padding: 0.1rem 0.3rem;
                margin: 0.1rem 0;
                border-radius: 0.2rem;
                display: inline-block;
              }
            }

            @layer support {
              .no-support,
              .has-support {
                margin: 1em 0;
                padding: 1em;
                border: 1px solid #ccc;
              }

              .no-support {
                background-color: #ff00002b;
                display: block;
              }
              .no-support[data-level="warn"] {
                background-color: #ffff002b;
              }
              .has-support {
                background-color: #00ff002b;
                display: none;
              }
              :is(.has-support, .no-support) > :first-child {
                margin-top: 0;
              }
              :is(.has-support, .no-support) > :last-child {
                margin-bottom: 0;
              }

              @supports (transform: scaleX(cos(360deg))) {
                .no-support[data-support="css-trig-fns"] {
                  display: none;
                }
                .has-support[data-support="css-trig-fns"] {
                  display: block;
                }
              }
            }
          }
        `}
			</style>
		</>
	);
};
