import React, { ReactNode } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Inter } from "next/font/google";
import Image from "next/image";

import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import RepoStats from "@/components/github/RepoStats";

const inter = Inter({ subsets: ["latin"] });

// const GRADIENT = {
//   violet: "h-full bg-gradient-to-b from-violet-500 to-fuchsia-500",
//   cyan: "h-full bg-gradient-to-b from-cyan-500 to-blue-500",
//   sky: "h-full bg-gradient-to-b from-sky-500 to-indigo-500",
//   green: "h-full bg-gradient-to-b from-emerald-500 to-green-500",
//   orange: "h-full bg-gradient-to-b from-rose-500 to-orange-500",
//   purple: "h-full bg-gradient-to-b from-purple-500 to-pink-500",
// };
//
// function GitLine({ gradientCss }: { gradientCss: String }) {
//   return (
//     <motion.div
//       className={`rounded absolute left-10 h-screen w-[1.5px] ${gradientCss}  `}
//       transition={{ duration: 2.5, delay: 1 }}
//       initial="hidden"
//       animate="visible"
//       style={{
//         transitionDelay: "500ms",
//       }}
//       data-build-delay="500"
//     ></motion.div>
//   );
// }

// https://github.com/anuraghazra/github-readme-stats

function Underline() {
  return (
    <div data-as-attach="underline" className="underlines-container">
      <div className="svg-lines w-embed">
        <svg
          data-as-style="lines"
          data-as-duration="0.4"
          data-as-stagger="0.1"
          data-as-order="1"
          data-as-position="-=0.15"
          viewBox="0 0 659 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.06055 13.428C9.06055 13.428 90.1028 13.4314 172.433 10.4525C223.539 8.60328 268.459 3.48823 315.061 2.92782C379.21 2.15641 469.06 5.1297 539.561 8.10689C607.765 10.9871 658.016 10.4525 658.016 10.4525"
            stroke="currentColor"
            stroke-width="4"
            style={{
              strokeDasharray: "649.32px, 649.32px",
              strokeDashoffset: "0px",
            }}
          ></path>
          <path
            d="M0.0605469 25.9277C0.0605469 25.9277 78.2413 25.2307 161.271 22.3581C227.405 20.0701 293.614 15.5764 347.561 14.9277C450.283 13.6924 554.767 19.9762 657.061 29.4277"
            stroke="currentColor"
            stroke-width="4"
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
      className={`m-0 p-0 -z-10`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={`${path}`}
        stroke="currentColor"
        stroke-width="4"
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
    <div className="arrows-container">
      <div className="arrow-placement arrow-01">
        <div className="arrow w-embed">
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
            key={index}
            className={`overflow-x-auto relative`}
            style={{ fontWeight: "normal" }}
          >
            {word}{" "}
            <span
              className={`bg-no-repeat z-0 -left-[0.5rem] -right-[0.5rem] h-[0.75rem] -bottom-[0.525rem] absolute`}
            >
              <HandwritingAnimation path={`${path_upper}`} />
              <HandwritingAnimation path={`${path_lower}`} />
            </span>
          </span>
        </>
      );
    } else {
      return (
        <span key={index} className={`z-10`}>
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
  gradientCss: keyof typeof GRADIENT_VAR;
}) {
  const [ref, inView] = useInView({
    threshold: 0.3, // when section is 50% visible
    triggerOnce: false, // only trigger once
  });
  return (
    <motion.div
      ref={ref}
      animate={{ opacity: inView ? 1.0 : 0.0 }}
      transition={{ duration: 2, delay: 0.0 }}
      className={`rounded absolute left-10 h-full w-[3px] blur-[1px] brightness-90 `}
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

export default function IndexPage() {
  return (
    <Layout title="Home | ">
      <div className={`space-y-[12rem] place-items-center grid`}>
        <div className={`min-h-screen w-screen`}>
          <GitLineVar gradientCss={GRADIENT_VAR.violet} />
          <Section>
            <div
              className={`space-y-1 justify-between md:space-y-12 place-items-center grid pt-40 pb-16`}
            >
              <h1 className={`${inter.className} font-normal`}>
                <div className="w-[10ch] md:w-full text-5xl md:text-[7rem] flex flex-wrap place-items-center text-center leading-[1.5ch] md:leading-[1.6ch] tracking-wide">
                  <div className={``}>
                    {styleHeading("We want to build great stuff", "stuff")}
                  </div>
                </div>
              </h1>
            </div>

            <div className={`relative`}>
              <div
                className={`absolute -translate-x-1/2 h-1/2 bottom-[10%] left-[50%]`}
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
          </Section>
        </div>

        <div className={`min-h-screen w-screen`}>
          <GitLineVar gradientCss={GRADIENT_VAR.cyan} />
          <Section>
            <p
              className={`uppercase text-5xl md:text-[7rem] italic text-amber-200 `}
            >
              And yet ...
            </p>
          </Section>
        </div>

        <div className={`min-h-screen w-screen`}>
          <GitLineVar gradientCss={GRADIENT_VAR.sky} />
          <Section>
            <div className="md:w-[12ch] text-5xl md:text-[7rem] flex flex-wrap place-items-center text-center leading-[1.5ch] md:leading-[1.6ch] tracking-wide">
              <div className={``}>
                {styleHeading("We all find good reasons not to", "not")}
              </div>
            </div>
          </Section>
        </div>

        <div className={`min-h-screen w-screen`}>
          <GitLineVar gradientCss={GRADIENT_VAR.green} />
          <Section>
            <div className="space-y-[12rem]">
              <div className="md:w-[19ch] text-5xl md:text-[5rem] flex flex-wrap place-items-center text-start leading-[1.5ch] md:leading-[1.6ch] tracking-wide">
                <div>
                  {styleHeading(
                    "... all good, logical reasons to settle.",
                    "settle."
                  )}
                </div>
              </div>

              <div className="grid relative max-w-[520px] ml-auto text-[1.35rem]">
                <div
                  className={`h-14 w-14 absolute text-amber-200 -left-20 -top-10 grid`}
                >
                  <svg
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
                </div>
                <div className={`text-amber-300 grid space-y-5 `}>
                  <p>
                    Unfortunately, the tendency to settle is self-reinforcing.
                    As time passes, we learn that avoiding excellence saves
                    trouble ("MVP or this would do"). This behavior often
                    persists into adulthood, where it can become a significant
                    obstacle to achieving success.
                  </p>
                  <p>
                    This is where we come in. We show leaders and their teams
                    how adopting creativity with design can be a quicker path to
                    finding solutions and achieving goals. Our approach is a
                    shortcut to getting difficult things done, and it works
                    quickly.
                  </p>
                  <p>
                    Our clients quickly begin to open up to new ideas and
                    approaches that they had previously avoided.
                  </p>
                  <p>
                    Soon, small examples of openness, innovation, and excellence
                    start to emerge within the group, leading to a positive and
                    productive work environment.
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </div>

        <div className={`min-h-screen w-screen`}>
          <GitLineVar gradientCss={GRADIENT_VAR.cyan} />
          <Section>
            <div className={`min-h-screen grid place-items-center w-screen`}>
              <h2
                className={`uppercase text-5xl md:text-[7rem]  italic text-amber-200 `}
              >
                And so ...
              </h2>
            </div>
          </Section>
        </div>

        <div className={`h-screen w-screen`}>
          <GitLineVar gradientCss={GRADIENT_VAR.green} />
          <Section>
            <div className="text-5xl md:text-[5rem] flex flex-wrap place-items-center text-start leading-[1.5ch] md:leading-[1.6ch] tracking-wide">
              It gets easier and
              <br />
              easier to ....
              <div className={``}>
                {styleHeading("Revelations build trust.", "trust.")}
              </div>
            </div>
          </Section>
        </div>

        <div>
        <Section>
        <div className={`text-start grid space-y-4 place-self-start mr-auto`}>
        <div className="hidden">
        <p>I'm a software developer who's passionate about building great stuff. My focus is on creating innovative solutions that exceed client expectations. </p>

        <p>At times, we all find good reasons to settle, but I believe that avoiding excellence is a self-reinforcing behavior that can hinder success. That's why I take a creative approach to design, using it as a shortcut to getting difficult things done.</p>

        <p>My goal is to help businesses and individuals achieve their goals by adopting new ideas and approaches that they may have previously avoided. By working together, we can build trust and create a positive and productive work environment.</p>

        </div>
        <h2 className={`text-5xl text-[#fbe094] font-bold `}>Highlights</h2>
        <ul className={`list text-lg text-[#fbe094]`}>
              <li>Expertise in front-end development, including HTML, CSS, and JavaScript</li>
              <li>Experience with popular front-end frameworks like React and Svelte</li>
              <li>Strong back-end development skills using languages like Rust, Go, Python, and Node.js</li>
              <li>Experience with cloud platforms like Docker. TODO: Azure and AWS</li>
              <li>Familiarity with Agile methodologies for software development</li>
        </ul>
        </div>
        </Section>
        </div>

        <div className={`min-h-screen w-screen`}>
          <Section>
            <div
              className={`w-screen h-[100vh] md:h-screen grid place-items-center`}
            >
              <h2
                className={`text-[#fbe094] text-5xl hover:text-[#f6ac9f] md:text-[5.3rem] tracking-tight font-bold`}
              >
                Let's
                <br />
                work
                <br />
                together
              </h2>
              <div
                className={`relative max-w-[660px] ml-auto w-full text-[#fbe094] -rotate-45`}
              >
                <div
                  className={`absolute -translate-x-1/2 h-1/2 bottom-[10%] left-[50%]`}
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
              <button class="rounded-full text-[#fbe094] text-xl text-end w-full">
                hello@lloydlobo.com
              </button>
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
}
