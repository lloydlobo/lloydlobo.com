import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Section } from "@/components/Section";
import Layout from "@/components/Layout";
import { SolarSystem } from "@/components/effects/SolarSystem";

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
			<div className="w-[100%]  fixed aspect-square  lg:w-[61.8vw] inset-0 rounded-t-[1000px] top-[61.8%] mx-auto  grid overflow-hidden  -z-10 bottom-0">
				<SolarSystem />
			</div>
			<div className="relative">

				<Layout title="Home">
					<main className="">
						<Section>
							<article className="py-0 lg:py-12 space-y-8">
								<div className="backdrop-blur-[1px] md:tracking-tight leading-7 md:leading-9 lowercase w-full  mx-auto font-medium gap-1">
									<Link
										href="/about"
										className="tracking-wider dark:text-primary"
									>
										lloyd lobo.
									</Link>

									<span className="dark:text-secondary">
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
										<span className="inline-flex">
											<em className="dark:text-secondary">
												software developer
											</em>
										</span>{" "}
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
								</div>
							</article>
						</Section>
					</main>
				</Layout>
			</div>

			<style jsx>{`
span.square {
  --earth-days: 365.2563;
	// background: #111011;
  animation: perimeter 
  	calc(var(--earth-days) * var(--year-in-second) / var(--years-relative) * 1s)
  	 linear infinite;
} 


@keyframes perimeter {
  from {
		box-shadow: 0px 0px 1px 0.00px #003300;
    scale: 100%;
		
  }
  to {
		box-shadow: 0px 0px 1px 0.00px #006650;
    scale: 100.5%;
  }
}

`}</style>
			<div
				className=" bg-gradient-to-b hidden opacity-50 from-on-primary to-green-300/50 w-screen h-screen absolute inset-0 -z-50"></div>
			<div className="flex my-auto top-8 flex-wrap [&>*]:h-[16.6vw] brightness-[57%] [&>*]:aspect-square transition-all duration-300 delay-75 ease-linear blur-[0.2px] w-screen inset-0 [&>*]:outline-green-50/10  dark:[&>*]:outline-green-900/50 [&>*]:outline [&>*]:outline-[0.01px] -z-40 opacity-95 absolute disabled:[&>*]:bg-transparent h-fit">
				<span className="square hidden"> </span>
				<span className="square hidden"> </span>
				<span className="square hidden"> </span>
				<span className="square hidden"> </span>
				<span className="square hidden"> </span>
				<span className="square hidden"> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
				<span className="square "> </span>
			</div>
		</>
	);
}

export function DockNav() {
	return (
		<div className="z-50 fixed bottom-5 left-0 right-0 gird  mx-auto">
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
