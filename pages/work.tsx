import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { WorkProjects } from "@/components/WorkProjects";
import { EmailCopy } from "@/components/effects/EmailCopy";
import { WritingArrowDown } from "@/components/effects/WritingArrowDown";
import { Hero } from "@/components/layout/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ClockNav, DockNav } from ".";

const PROJECTS = [
  {
    username: "lloydlobo",
    tags: ["development", "cli", "linux"],
    repo: "mausam",
    description: "A weather update desktop notifier made with Rust",
    img: "/mausam.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "Neural Network"],
    repo: "neura-driver",
    description: "A simple self-driving car application with a neural network",
    img: "/neura-driver.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "API"],
    repo: "geomeasure",
    description: "Geomeasure measures distance using GPS and that too without",
    img: "/geomeasure.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "python", "discord"],
    repo: "proxymate",
    description:
      "Generates phrases in the style of the author using Markov model",
    img: "/proxymate.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "discord", "python"],
    repo: "penny",
    description: "A no-nonsense budget tracking Discord bot",
    img: "/penny.jpg",
  },
  // {
  //   username: "lloydlobo",
  //   tags: ["development", "CLI", "go"],
  //   repo: "okejoke",
  //   description: "okejoke gathers jokes on the fly in your CLI",
  //   img: "/okejoke.jpg",
  // },
  {
    username: "lloydlobo",
    tags: ["development", "rust", "cli"],
    repo: "rssh",
    description: "rssh or Rust Shell allows keeping maintainable bash aliases",
    img: "/rssh.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "rust", "cli"],
    repo: "hackernews-clone",
    description: "Coming soon...",
    img: "/mausam-fibo.jpg",
  },
];
export default function WorkPage() {
  return (
    <Layout title="Work ">
      <main>
        <div className="">
          <Section>
            <article className="">
              <div className="bg-on-primary">
                <h1 className="grid md:hidden text-6xl lg:text-7xl font-semibold lg:font-bold text-primary ">
                  <span className="relative">
                    Design
                    <br />
                    Develop
                    <br />
                    Ship
                  </span>
                </h1>
                <h1 className="hidden md:grid text-6xl lg:text-7xl font-semibold lg:font-bold text-transparent bg-clip-text bg-gradient-to-b bg-primary from-on-primary/70">
                  <span className="relative">
                    Design
                    <br />
                    Develop
                    <br />
                    Ship
                  </span>
                </h1>
              </div>
            </article>
          </Section>
        </div>

        <div
          className={`mx-auto space-y-[6rem] font-sans lg:space-y-[12rem] mt-16`}
        >
          <Section>
            <article className="">
              <div className="mx-auto w-full text-secondary">
                <div className="relative space-y-6 mx-auto w-full">
                  <div className="w-48 border-b-[2px] border-secondary/90 pb-2">
                    <p className="font-medium text-start">Work</p>
                  </div>
                  {/* Better to put this in the about page */}
                  <p className="hidden">
                    If you're browsing this page it means you probably wish to
                    know more about me. Wish granted.
                  </p>
                  <span className="md:absolute hover:opacity-100 opacity-0 text-sm w-full pt-[3px] origin-left -right-[calc(192px_+_0.5rem)] md:max-w-[calc(192px_+_0vw)] brightness-50">
                    TLDR for the impatient people...
                  </span>
                  <p>
                    I'm <span className="brightness-50 font-medium">Lloyd</span>
                    , a software developer who's passionate about{" "}
                    <em className="font-serif font-bold">
                      building polished software and web experiences
                    </em>
                    .
                    <span className="hidden">
                      I focus on creating functional and innovative solutions
                      that exceed client's expectations.
                    </span>
                    <span>
                      {" "}
                      Tinkering with functional and aesthetically pleasing
                      interfaces.
                    </span>
                  </p>

                  <p>
                    <span className="md:absolute  text-sm w-full pt-[3px] origin-left -left-[calc(192px_+_0.5rem)] md:max-w-[calc(192px_+_0vw)] brightness-50">
                      Now...{" "}
                    </span>
                    Fearlessly exploring passions and interests with a drive to
                    hone my skills and deliver quality work. I assume{" "}
                    <em className="font-serif font-bold">
                      everything we encounter matters to someone
                    </em>
                    .
                  </p>
                  <div className="relative w-[100%] overflow-x-auto mx-auto hidden">
                    <div className="grid grid-flow-col gap-8 text-base [&>*]:w-48 [&>*]:shadow">
                      <ul className={`space-y-1 font-medium`}>
                        <li className="">
                          <Link href={`#work`}>Work</Link>
                        </li>
                        <li className="">
                          <Link href={`#work`}>About</Link>
                        </li>
                        <li className="">
                          <Link href={`#work`}>Connect</Link>
                        </li>
                      </ul>
                      <p className="">
                        I'm a software developer who's passionate about building
                        great stuff. My focus is on creating innovative
                        solutions that exceed client expectations.
                      </p>
                      <p className="">
                        My goal: Help businesses and individuals achieve goals
                        by adopting new ideas and approaches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Section>

          <Section>
            <div className="relative  space-y-6 grid w-full text-secondary">
              <h2
                className="flex w-48 items-baseline justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end font-normal before:text-sm
                before:content-['01'] brightness-50
                "
              >
                Projects
              </h2>

              <div className="text-sm mx-auto grid gap-2">
                {PROJECTS.map(
                  ({ username, repo, tags, description, img }, index) => (
                    <a
                      key={`$project-{repo}`}
                      href="/"
                      // className="flex flex-nowrap items-center rounded-xl px-4 py-2 hover:bg-gray4/10 gap-2 w-full max-w-[60vw] mx-auto"
                      className="rounded-xl px-4 py-2 hover:bg-gray4/10 gap-2 w-full max-w-[60vw] mx-auto"
                    >
                      <div className="grid grid-flow-col-dense items-center gap-x-2">
                        <span className="w-fit">{repo}</span>
                        <span className="hidden text-clip truncate  md:block">
                          {description}
                        </span>
                        <div className="relative h-[0.1px] border-secondary/40 before:h-[1px] before:bg-white before:text-opacity-70 z-30 w-full min-w-[20vw] before:content-[''] border "></div>
                        <span className="flex-1">2023</span>
                      </div>
                    </a>
                  )
                )}
              </div>
              {/* <WorkProjects /> */}
            </div>
          </Section>

          <Section>
            <div className="relative text-secondary space-y-6 mx-auto w-full">
              <h2
                className="w-48 flex items-baseline brightness-50 justify-between place-self-start border-b-[2px] border-secondary/90 pb-2 text-start font-normal after:text-sm
                after:content-['02']"
              >
                About
              </h2>
              <div className="w-full text-secondary lg:place-items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <h2
                    className={`relative text-left text-5xl font-semibold tracking-tighter text-primary lg:-left-10 lg:col-start-2 lg:col-end-4 `}
                  >
                    Developer by trade,
                    <br />
                    creator by heart
                  </h2>
                </div>
                <div className="grid space-y-12 text-lg leading-normal tracking-wide md:grid-cols-2 lg:grid-cols-3">
                  <div className="ghost"></div>
                  <p className="relative col-start-1 lg:-left-10 lg:col-start-2 lg:pr-12">
                    As a developer, I am also a creator. This{" "}
                    <span className="font-bold font-serif italic">
                      term encapsulates the full spectrum{"... "}
                    </span>
                    of my creative endeavors — from designing software and
                    building apps to producing digital art and music for fun.
                  </p>
                  <p className="lg:pr-12">
                    Thoroughly understanding your medium is crucial. When
                    technology and ideas blend, products excel{" "}
                    <span className="text-xs">(like Apple)</span>. Each project
                    reflects my unique blend of technical expertise and artistic
                    vision — resulting in functional and visually stunning work.
                  </p>
                </div>
              </div>

              <div className="ml-auto w-[75vw]  space-y-20 tracking-widest ">
                <div className="mt-32">
                  <h3
                    className="mb-8 flex items-baseline justify-between place-self-end
                  border-b-[2px] border-secondary py-3 text-start text-base font-bold uppercase text-secondary "
                  >
                    Expertise
                  </h3>
                  <ul className={`uppercase text-secondary`}>
                    <li className="">
                      <Link href={`#work`}>Front-end development</Link>
                    </li>
                    <li className="">
                      <Link href={`#work`}>Web APIs - NodeJS, Actix Web</Link>
                    </li>
                    <li className="">
                      <Link href={`#work`}>CLI Apps</Link>
                    </li>
                  </ul>
                </div>

                <div className=" ">
                  <h3
                    className="mb-10 flex items-baseline justify-between place-self-end
                  border-b-[2px] border-secondary py-3 text-start text-base font-bold uppercase text-secondary "
                  >
                    Stacks
                  </h3>
                  <ul className={`uppercase text-secondary`}>
                    <li className="">
                      <Link href={`#work`}>NextJS React JamStack</Link>
                    </li>
                    <li className="">
                      <Link href={`#work`}>
                        Rust, Go, Python, JavaScript, TypeScript
                      </Link>
                    </li>
                    <li className="">
                      <Link href={`#work`}>Neovim, VS Code, bash</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>

          <Section>
            <div className="relative space-y-6 grid w-full text-secondary  ">
              <h2 className="flex w-48 items-baseline justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end brightness-50 font-normal before:text-sm before:content-['03'] mb-12 lg:mb-48">
                Connect
              </h2>
            </div>
            <div className="relative flex w-full  flex-col space-y-28 text-secondary lg:-left-10 lg:items-center">
              <FooterCTAHero />
              <FooterCTABody />
            </div>
          </Section>
        </div>
      </main>
    </Layout>
  );
}

function FooterCTABody() {
  return (
    <div className="relative ml-auto">
      <div
        className={`relative w-full -rotate-45 scale-75 text-primary md:scale-100 lg:-rotate-[55deg]`}
      >
        <div
          className={`absolute bottom-40 left-[30%] h-1/2 -translate-x-1/2 lg:bottom-56`}
        >
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              duration: 1.5,
              // yoyo: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <WritingArrowDown />
          </motion.div>
        </div>
      </div>
      <EmailCopy />
    </div>
  );
}

function FooterCTAHero() {
  return (
    <div className="relative w-fit">
      <h3
        className={` text-6xl font-bold text-primary backdrop-blur-[1px] hover:text-accent md:text-7xl`}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/50 backdrop-filter to-primary backdrop-blur-[1px]">
          <span className="relative brightness-90">
            Let's
            <br />
            work
            <br />
            together
          </span>
        </span>
      </h3>

      <div
        style={{
          opacity: 1,
          clipPath: "inset(11.15rem 0 0 0)",
          height: "clamp(28rem, 35vw, 31.3rem)",
          width: "clamp(18rem, 35vw, 31.3rem)",
        }}
        className="absolute left-0 bottom-1 -z-10 origin-bottom-left scale-[68%] bg-blend-overlay brightness-[30%] grayscale-[30%] sepia-[50%] filter lg:scale-[121%]"
      >
        <img
          alt="Person drinking lots of coffee. Source: https://media.giphy.com/media/Mk1wQ8cH5TtsqafLiX/giphy.gif"
          src="/drita_arsela_coffee.webp"
        />
      </div>
    </div>
  );
}
