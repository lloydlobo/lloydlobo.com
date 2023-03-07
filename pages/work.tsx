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
                <h1
                  className={`text-6xl font-bold text-primary backdrop-blur-[1px] hover:text-accent md:text-7xl`}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/50 backdrop-filter to-primary backdrop-blur-[1px]">
                    <span className="relative brightness-90">
                      Design
                      <br />
                      Develop
                      <br />
                      Ship
                    </span>
                  </span>
                </h1>
              </div>
            </article>
          </Section>
        </div>

        <div className={`mx-auto space-y-12 font-sans lg:space-y-24 mt-16`}>
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
            <article>
              <div className="relative  space-y-9 grid w-full text-secondary">
                <h2
                  className="flex w-48 items-baseline justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end font-normal before:text-sm
                before:content-['01'] brightness-50
                "
                >
                  Projects
                </h2>

                <div className="text-sm mx-auto grid space-y-2 w-full">
                  {PROJECTS.map(
                    ({ username, repo, tags, description, img }, index) => (
                      <a
                        key={`$project-{repo}`}
                        href="/"
                        className="rounded-xl px-4 py-2 hover:bg-gray4/10  w-full 4xl:max-w-[60vw] mx-auto"
                      >
                        <div className="grid grid-flow-col items-center w-full justify-between gap-x-2">
                          <span className="font-medium">{repo}</span>
                          <span className="hidden text-clip brightness-75 truncate md:block">
                            {description}
                          </span>
                          <div className="line h-[0.1px] border-secondary/30 brightness-50 before:h-[1px] before:bg-white before:text-opacity-70 min-w-[20vw] before:content-[' '] border-t "></div>
                          <span className="brightness-75">2023</span>
                        </div>
                      </a>
                    )
                  )}
                </div>
                {/* <WorkProjects /> */}
              </div>
            </article>
          </Section>

          <Section>
            <article>
              <div className="relative text-secondary space-y-6 mx-auto w-full">
                <h2
                  className="w-48 flex items-baseline brightness-50 justify-between place-self-start border-b-[2px] border-secondary/90 pb-2 text-start font-normal after:text-sm
                after:content-['02']"
                >
                  About
                </h2>

                <div className="">
                  <h1
                    className={`text-4xl font-bold text-primary backdrop-blur-[0px] hover:text-accent md:text-5xl`}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/50 backdrop-filter to-primary backdrop-blur-[1px]">
                      <span className="relative brightness-90">
                        Developer by trade
                        <br />
                        Creator by heart
                      </span>
                    </span>
                  </h1>
                </div>
                <div className="w-full hidden space-y-6 text-secondary lg:place-items-center">
                  <div className="gap-12 grid-cols-2">
                    <p className="relative col-start-1">
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
                      <span className="text-xs">(like Apple)</span>. Each
                      project reflects my unique blend of technical expertise
                      and artistic vision — resulting in functional and visually
                      stunning work.
                    </p>
                  </div>
                </div>

                <div className="ml-auto text-base 4xl:w-[75vw] space-y-12 tracking-widest ">
                  <div className="lg:mt-12">
                    <h3
                      className="mb-4 text-sm flex items-baseline justify-between place-self-end
                  border-b-[2px] border-secondary/50 py-3 text-start font-medium uppercase text-secondary "
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
                    <h3 className="mb-4 text-sm flex items-baseline justify-between place-self-end border-b-[2px] border-secondary/50 py-3 text-start font-medium uppercase">
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
            </article>
          </Section>

          <Section>
            <article className="mb-24">
              <div className="relative mb-20 md:mb-36 space-y-6 grid w-full text-secondary  ">
                <h2 className="flex w-48 items-baseline justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end brightness-50 font-normal before:text-sm before:content-['03'] mb-8 lg:mb-12">
                  Connect
                </h2>
              </div>
              <div className="relative flex w-full flex-col space-y-28 text-secondary">
                <FooterCTAHero />
                <FooterCTABody />
              </div>
            </article>
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
        className={`relative w-full -rotate-45 scale-75 md:scale-100 lg:-rotate-[55deg]`}
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
        className={`text-4xl font-bold text-primary backdrop-blur-[0px] md:text-5xl`}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary/50 to-primary backdrop-blur-[1px]">
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
        className="absolute left-0 bottom-1 -z-10 origin-bottom-left scale-[68%] bg-blend-overlay brightness-[30%] grayscale-[30%] sepia-[50%] filter lg:scale-[100%]"
      >
        <img
          alt="Person drinking lots of coffee. Source: https://media.giphy.com/media/Mk1wQ8cH5TtsqafLiX/giphy.gif"
          src="/drita_arsela_coffee.webp"
          className="left-1 relative"
        />
      </div>
    </div>
  );
}
