import React, { ReactNode } from "react";

import { Fragment } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Inter } from "next/font/google";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import RepoStats from "@/components/github/RepoStats";
import RandomizedText from "@/components/effects/RandomizedText";

const inter = Inter({ subsets: ["latin"] });
// https://github.com/anuraghazra/github-readme-stats

function AsteriskDecor() {
  return (
    <svg
      className="h-12 w-12"
      data-as-style="lines"
      data-as-duration="0.4"
      data-as-stagger="0.1"
      data-as-order="3"
      data-as-position="-=0.6"
      viewBox="0 0 84 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.1521 6.65771C34.1497 13 36.1497 22.5 40.6497 33.5C44.8083 50.3792 47.2583 67.6791 50.6619 84.6969"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        style={{
          strokeDasharray: "80.6619px, 80.6619px",
          strokeDashoffset: "0px",
        }}
      />
      <path
        d="M3.10669 52.9936C13.0749 60.9681 37.8477 49.1558 48.1554 46.3548C58.4631 43.5536 64.6497 42.0002 76.2685 39.5806"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        style={{
          strokeDasharray: "75.9052px, 75.9052px",
          strokeDashoffset: "0px",
        }}
      />
      <path
        d="M61.6364 3C53.974 25.9871 43.22 47.332 33.3201 69.3876C29.7305 77.3845 26.3813 85.4882 23.1587 93.6394"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        style={{
          strokeDasharray: "98.5087px, 98.5087px",
          strokeDashoffset: "0px",
        }}
      />
      <path
        d="M16.5198 22.5098C37.5174 43.5074 60.1804 62.5123 81.146 83.4779"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        style={{
          strokeDasharray: "88.8538px, 88.8538px",
          strokeDashoffset: "0px",
        }}
      />
    </svg>
  );
}

function Underline() {
  return (
    <div className="">
      <div className="">
        <svg
          data-as-style="lines"
          data-as-duration="0.4"
          data-as-stagger="0.1"
          data-as-order="1"
          data-as-position="-=0.15"
          viewBox="0 0 659 32"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.06055 13.428C9.06055 13.428 90.1028 13.4314 172.433 10.4525C223.539 8.60328 268.459 3.48823 315.061 2.92782C379.21 2.15641 469.06 5.1297 539.561 8.10689C607.765 10.9871 658.016 10.4525 658.016 10.4525"
            stroke="currentColor"
            strokeWidth="4"
            style={{
              strokeDasharray: "649.32px, 649.32px",
              strokeDashoffset: "0px",
            }}
          ></path>
          <path
            d="M0.0605469 25.9277C0.0605469 25.9277 78.2413 25.2307 161.271 22.3581C227.405 20.0701 293.614 15.5764 347.561 14.9277C450.283 13.6924 554.767 19.9762 657.061 29.4277"
            stroke="currentColor"
            strokeWidth="4"
            style={{
              strokeDasharray: "657.678px, 657.678px",
              strokeDashoffset: "0px",
            }}
          ></path>
        </svg>
      </div>
    </div>
  );
}

const path_upper =
  "M0.0605469 25.9277C0.0605469 25.9277 78.2413 25.2307 161.271 22.3581C227.405 20.0701 293.614 15.5764 347.561 14.9277C450.283 13.6924 554.767 19.9762 657.061 29.4277";
const path_lower =
  "M9.06055 13.428C9.06055 13.428 90.1028 13.4314 172.433 10.4525C223.539 8.60328 268.459 3.48823 315.061 2.92782C379.21 2.15641 469.06 5.1297 539.561 8.10689C607.765 10.9871 658.016 10.4525 658.016 10.4525";

// https://framer.com/m/framer/Animator.js

const pathVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(0, 0, 0, 1)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

type PropsHandwriting = {
  children?: ReactNode;
  path?: string;
};

const HandwritingAnimation = ({ children, path }: PropsHandwriting) => {
  return (
    <svg
      viewBox="0 0 659 32"
      className={`-z-10 m-0 p-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={`${path}`}
        stroke="currentColor"
        strokeWidth="6"
        className={``}
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1.5, delay:1 }}
      />
    </svg>
  );
};

export const WritingArrowDown = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="99"
            viewBox="0 0 29 99"
            fill="none"
            data-as-style="lines"
            data-as-duration="0.25"
            data-as-order="2"
            data-as-position="+=1"
          >
            <path
              d="M11.5442 1C14.0746 11.7544 14.4653 86.4839 14.4656 91.5637"
              stroke="currentColor"
              strokeWidth="4"
              style={{
                strokeDasharray: "90.6602px, 90.6602px",
                strokeDashoffset: "0px",
              }}
            />
            <path
              d="M26.6594 61.4839C24.1594 67.4839 18.6594 84.4839 14.1594 93.4839C10.6594 83.9839 9.65942 75 1.99998 61.4839"
              stroke="currentColor"
              strokeWidth="4"
              style={{
                strokeDasharray: "68.6899px, 68.6899px",
                strokeDashoffset: "0px",
              }}
            />
          </svg>
        </div>
      </div>
      <div className="arrow-placement arrow-05 hidden">
        <div className="arrow w-embed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="66"
            viewBox="0 0 20 66"
            fill="none"
            data-as-style="lines"
            data-as-duration="0.2"
            data-as-order="3"
            data-as-position="-=0.1"
          >
            <path
              d="M8.1422 1C9.77062 7.92078 10.0221 56.0114 10.0222 59.2804"
              stroke="currentColor"
              strokeWidth="4"
              style={{
                strokeDasharray: "58.3425px, 58.3425px",
                strokeDashoffset: "0px",
              }}
            />
            <path
              d="M17.8691 39.9233C16.2603 43.7845 12.7209 54.7245 9.82502 60.5163C7.57267 54.4028 4.26707 46.3465 2.00006 39.9233"
              stroke="currentColor"
              strokeWidth="4"
              style={{
                strokeDasharray: "44.1477px, 44.1477px",
                strokeDashoffset: "0px",
              }}
            />
          </svg>
        </div>
      </div>
      <div className="arrow-placement arrow-08 hidden">
        <div className="arrow w-embed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="47"
            viewBox="0 0 14 47"
            fill="none"
            data-as-style="lines"
            data-as-duration="0.15"
            data-as-order="4"
            data-as-position="-=0.1"
          >
            <path
              d="M6 1C6.86617 5.63124 6.99992 37.8124 7 40"
              stroke="currentColor"
              strokeWidth="4"
              style={{
                strokeDasharray: "39.0263px, 39.0263px",
                strokeDashoffset: "0px",
              }}
            />
            <path
              d="M12 27C10.9862 29.625 8.75581 37.0625 6.93095 41C5.51161 36.8438 3.42857 31.3668 2 27"
              stroke="currentColor"
              strokeWidth="4"
              style={{
                strokeDasharray: "29.7383px, 29.7383px",
                strokeDashoffset: "0px",
              }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

function styleHeading(heroTitle: String, wordToStyle: String) {
  return heroTitle.split(" ").map((word, index) => {
    if (word === wordToStyle) {
      return (
        <>
          <span
            key={word + index}
            className={`relative overflow-x-auto`}
            style={{ fontWeight: "normal" }}
          >
            {word}{" "}
            <span
              className={`absolute -left-[0.5rem] -right-[0.5rem] -bottom-[0.525rem] z-0 h-[0.75rem] bg-no-repeat text-primary`}
            >
              <HandwritingAnimation path={`${path_upper}`} />
              <HandwritingAnimation path={`${path_lower}`} />
            </span>
          </span>
        </>
      );
    } else {
      return (
        <span key={word + index} className={`z-10`}>
          {word}{" "}
        </span>
      );
    }
  });
}

const GRADIENT_VAR = {
  violet: "linear-gradient(to bottom, #7F00FF, #E100FF)",
  cyan: "linear-gradient(to bottom, #00F6FF, #0087FF)",
  sky: "linear-gradient(to bottom, #00A1FF, #5E32FF)",
  green: "linear-gradient(to bottom, #00F280, #057D40)",
  orange: "linear-gradient(to bottom, #FF5E5E, #FF2A2A)",
  purple: "linear-gradient(to bottom, #8E00FF, #1B00FF)",
};

function GitLineVar({
  gradientCss,
}: {
  gradientCss: string;
  // gradientCss: keyof typeof GRADIENT_VAR;
}) {
  const [ref, inView] = useInView({
    threshold: 0.3, // when section is 50% visible
    triggerOnce: false, // only trigger once
  });
  return (
    <motion.div
      ref={ref}
      animate={{ opacity: inView ? 1.0 : 0.0 }}
      transition={{ duration: 1, delay: 0.0 }}
      className={`absolute hidden h-[300vh] w-[1px] rounded-full bg-blend-overlay blur-[3px] brightness-[99%] saturate-[99%] `}
      // className={`absolute left-10 h-full w-[3px] rounded blur brightness-90 `}
      // className={`absolute left-1/2 h-[200vh] min-h-screen w-[2px] rounded blur-lg brightness-90 `}
      // className={`absolute right-0 h-[150vh] min-h-screen w-[2px] rounded blur-[2px] brightness-[100.0%] saturate-[100.0%] sepia-[100%] `}
      // className={`absolute left-0  h-full w-[3px] rounded blur brightness-90 `}
      style={{
        backgroundImage: `${gradientCss}, linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1))`,
        backgroundSize: "100% 100%, 100% calc(100% - 20px)",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 0 20px 10px rgba(0,0,0,0.1)",
      }}
    ></motion.div>
  );
}

type PropsSection = {
  children?: ReactNode;
  // title?: string;
};

// In this example, the useInView hook returns a ref that you can attach to the motion.section element and a boolean value inView that indicates whether the section is currently in view based on the threshold parameter. The animate prop of the motion.section element uses a ternary operator to set the opacity and y properties based on the inView value, which creates a fade-in and slide-up animation effect when the section enters the viewport. The transition prop sets the duration of the animation.
const Section = ({ children }: PropsSection) => {
  const [ref, inView] = useInView({
    threshold: 0.45, // when section is 45% visible
    triggerOnce: true, // only trigger once
  });

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`grid place-items-center border border-red-400/0`}>
        {children}
      </div>
    </motion.div>
  );
};

export const EmailCopy = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "ivanjbdesign@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
  };

  return (
    <div>
      <div>Email</div>
      <div>
        <div>{email}</div>
        <div onClick={copyToClipboard}>
          {isCopied ? "Copied!" : "Copy to clipboard"}
        </div>
      </div>
    </div>
  );
};

// function Hero() {
//   const [isPositiveText, setIsPositiveText] = useState(false);
//
//   async function isPositive(text) {
//     const response = await fetch("http://text-processing.com/api/sentiment/", {
//       method: "POST",
//       body: `text=${text}`,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });
//     alert!(response);
//     const json = await response.json();
//     setIsPositiveText(json.label === "pos");
//   }
//
//   useEffect(() => {
//     isPositive("Some text to check sentiment");
//   }, []);
//
//   return (
//     <div>
//       <h1>Hero section</h1>
//       <p>{isPositiveText ? "Positive sentiment" : "Negative sentiment"}</p>
//     </div>
//   );
// }

/*

              <code>
                {`
                // Determine whether the sentiment of text is positive
async function isPositive(text) {
  const response = await fetch("http://text-processing.com/api/sentiment/", {
    method: "POST",
    body: \`text=\${text}\`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const json = await response.json();
  return json.label === "pos";
}`}
              </code>
*/

// function HeroCopilot() {
//   return <div className={`min-h-screen w-screen`}>
//     <div className="my-8 grid h-screen place-content-center space-y-6">
//       <h1
//         className={`text-center text-7xl font-extrabold leading-tight tracking-tighter text-primary shadow ${inter.className}`}
//       >
//         Your AI pair programmer
//       </h1>
//       {/* <p className="w-fit max-w-[66ch] place-self-center text-center text-lg text-accent/70">
//           GitHub Copilot uses the OpenAI Codex to suggest code and entire
//           functions in real-time, right from your editor.
//         </p> */}
//       <p className="w-fit max-w-[66ch] place-self-center text-center text-lg text-accent/70">
//         As a software developer, I take advantage of open source and
//         AI-powered tools that utilizes the power of ... to help me write
//         code faster and with greater efficiency.{" "}
//       </p>
//       <p className="w-fit max-w-[66ch] place-self-center text-center text-lg text-accent/70">
//         By suggesting code and entire functions in real-time, right from
//         my favorite code editor,
// I am able to focus on the big picture and
//         tackle complex problems with ease.
//         <br />
//         But that does leave one factor in the open...
//       </p>
//     </div>
//   </div>;
// }

// <span className="easter_egg hidden">
//   Empowering innovators to create at the speed of inspiration is my forte.
//   As a frontend developer, I harness the power of open source and
//   AI-driven tools to write code faster and more efficiently, allowing me
//   to focus on the big picture and effortlessly tackle complex problems.
// </span>
export default function IndexPage() {
  return (
    <Layout title="Home | ">
      <div className={`grid place-items-center space-y-[12rem] font-sans`}>
        {/* <HeroCopilot/> */}
        <div className={`min-h-screen w-screen`}>
          <Section>
            <div className="grid w-full place-content-evenly space-y-3 ">
              <h1
                className={`m-0 w-[100vw] pr-4 text-center text-[43vw] font-extrabold leading-[1]
              -tracking-[0.1ch] text-primary shadow ${inter.className}`}
              >
                hello
              </h1>
              <h2
                className={`text-center text-5xl  font-extrabold tracking-tighter text-primary ${inter.className}`}
              >
                Design. Develop. Ship.
              </h2>
              <div className="mt-10 hidden max-w-[50vw] grid-cols-2 items-center justify-center space-x-6 place-self-center">
                <a
                  href="#"
                  className="rounded-md  py-2.5 text-sm font-semibold uppercase text-primary underline underline-offset-8 shadow-sm hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Deploying <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold uppercase text-primary underline underline-offset-8 hover:text-accent"
                >
                  Works <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <p
                className={`max-w-[66vw] place-self-center text-center text-lg text-secondary `}
              >
                Empowering innovators to create at the speed of inspiration.{" "}
                <br />
                As a software developer, I use open source and AI tools to
                architect efficient code and tackle complex problems with ease.
              </p>

              <Section>
                <div className="grid place-items-center place-self-center py-24 text-secondary sm:pt-32">
                  <div className="relative grid w-full">
                    <p className="mb-20 w-[25vw] border-b-[6px] border-secondary py-4 text-start text-xl font-normal">
                      Lloyd Lobo
                    </p>
                    <div className="grid grid-cols-3 gap-12 text-xl">
                      <ul className={`space-y-1`}>
                        <li className="">
                          <Link href={`#work`}>Work</Link>
                        </li>
                        <li className="">
                          <Link href={`#work`}>About</Link>
                        </li>
                        <li className="">
                          <Link href={`#work`}>Contact</Link>
                        </li>
                      </ul>
                      <p>
                        I'm a software developer who's passionate about building
                        great stuff. My focus is on creating innovative
                        solutions that exceed client expectations.
                      </p>
                      <p>
                        My goal is to help businesses and individuals achieve
                        their goals by adopting new ideas and approaches that
                        they may have previously avoided. By working together,
                        we can build trust and create a positive and productive
                        work environment.
                      </p>
                    </div>
                  </div>
                </div>
              </Section>
            </div>
          </Section>
        </div>

        <div className={`min-h-screen w-screen`}>
          <div className="relative grid w-full">
            <h2
              className="mb-60 flex w-[25vw] items-baseline justify-between place-self-end border-b-[6px] border-secondary py-3 text-end text-xl font-normal
                before:text-sm before:content-['01']
                "
            >
              Work
            </h2>
          </div>
          <div className="text-secondary">
            <WorkProjects />
          </div>
        </div>

        <div className={`min-h-screen w-screen`}>
          <Section>
            <div
              className={`grid h-[100vh] w-screen place-items-center md:h-screen`}
            >
              <h2
                className={`text-5xl font-bold tracking-tight text-primary hover:text-accent md:text-[5.3rem]`}
              >
                Let's
                <br />
                work
                <br />
                together
              </h2>
              <div className={`relative w-full -rotate-45 text-primary`}>
                <div
                  className={`absolute bottom-[10%] left-[50%] h-1/2 -translate-x-1/2`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: [0, -10, 0] }}
                    transition={{
                      duration: 1.5,
                      yoyo: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <WritingArrowDown />
                  </motion.div>
                </div>
              </div>
              <button className="w-full rounded-full text-end text-xl text-primary">
                hello@lloydlobo.com
              </button>
              <EmailCopy />
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

const WorkProjects = () => {
  const repos = [
    { username: "lloydlobo", tag: "development", repo: "mausam" },
    { username: "lloydlobo", tag: "development", repo: "neura-driver" },
    { username: "lloydlobo", tag: "development", repo: "geomeasure" },
    { username: "lloydlobo", tag: "development", repo: "proxymate-bot" },
    { username: "lloydlobo", tag: "development", repo: "penny" },
    { username: "lloydlobo", tag: "development", repo: "okejoke" },
    { username: "lloydlobo", tag: "development", repo: "rssh" },
  ];

  let numberOfLists = 1;
  return (
    <>
      <div className="col-start-2 col-end-3 min-h-[300vh] w-screen space-y-60 place-self-center text-center">
        {repos.map(({ username, repo, tag }, index) => (
          <div key={index + repo} className="project grid space-y-20">
            <div>
              <h2 className="mb-6 text-7xl font-bold">{repo}</h2>
              <h3 className="text-xl font-thin uppercase">{tag}</h3>
            </div>

            <a
              href="#"
              className="text-base font-semibold uppercase tracking-wide underline decoration-accent underline-offset-[10px] hover:text-accent"
            >
              View Project{" "}
              <span className="hidden" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
