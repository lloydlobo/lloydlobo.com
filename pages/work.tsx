import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { EmailCopy } from "@/components/effects/EmailCopy";
import { WritingArrowDown } from "@/components/effects/WritingArrowDown";
import Link from "next/link";
import React from "react";

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
  // let uuid = crypto.randomUUID();
  return (
    <Layout title="Work ">
      <main>
        <div className="">
          <Section>
            <article className="">
              <h1 className={`dark:text-primary`}>
                a <span className="">front-end developer,</span>
                <br />
                creating minimal and functional software
              </h1>
            </article>
          </Section>
        </div>

        <div className={`mx-auto space-y-12 lg:space-y-24 mt-16`}>
          <Section>
            <article>
              <div className="mx-auto w-full dark:text-secondary">
                <div
                  className="relative
                space-y-6 mx-auto w-full"
                >
                  <div className="w-48 border-b-[2px] dark:border-secondary/90 pb-2">
                    <h2 className="font-medium dark:text-secondary text-start">
                      Work
                    </h2>
                  </div>
                  {/* Better to put this in the about page */}
                  <p className="hidden">
                    If you're browsing this page it means you probably wish to
                    know more about me. Wish granted.
                  </p>
                  <span className="md:absolute hover:opacity-100 opacity-0 text-sm w-full pt-[3px] origin-left -right-[calc(192px_+_0.5rem)] md:max-w-[calc(192px_+_0vw)] brightness-50">
                    TLDR for the impatient people...
                  </span>
                  <p className="relative w-fit">
                    <span className="md:absolute  text-sm w-full pt-[3px] origin-left -left-[calc(192px_+_0.5rem)] md:max-w-[calc(192px_+_0vw)] brightness-50 hidden">
                      (tldr){" "}
                    </span>
                    I'm <span className="dark:text-dim">Lloyd</span>, a software
                    developer who's passionate about{" "}
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
                    <span className="md:absolute text-sm w-full pt-[3px] dark:text-dim origin-left -left-[calc(192px_+_0.5rem)] md:max-w-[calc(192px_+_0vw)]">
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
              <div className="relative  space-y-9 grid w-full ">
                <h2
                  className="flex w-48 dark:text-secondary items-baseline justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end font-medium before:text-sm
                before:content-['01'] brightness-50
                "
                >
                  Projects
                </h2>

                <div className="text-sm mx-auto grid space-y-2 w-full">
                  {PROJECTS.map(
                    ({ username, repo, tags, description, img }, index) => (
                      <a
                        key={`project-${repo}-${index}`}
                        href="/"
                        className="rounded-xl after:hidden px-4 py-2 w-full 4xl:max-w-[60vw] mx-auto"
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
              <div className="relative space-y-6 mx-auto w-full">
                <h2
                  className="w-48 font-medium dark:text-secondary flex items-baseline brightness-50 justify-between place-self-start border-b-[2px] border-secondary/90 pb-2 text-start after:text-sm
                after:content-['02']"
                >
                  About
                </h2>

                <div className="">
                  <h3
                    className="dark:text-secondary"
                  // className={`text-xl font-bold dark:text-primary backdrop-blur-[0px] hover:text-accent md:text-2xl lowercase pt-4 mb-2`}
                  >
                    <span
                    // className="bg-clip-text text-transparent bg-gradient-to-r dark:from-primary/70 from-on-primary/[80%] to-on-primary/[95%] dark:to-primary backdrop-blur-[0px]"
                    >
                      <span className="">
                        developer by trade
                        <br />
                        creator by heart
                      </span>
                    </span>
                  </h3>
                </div>
                <div className="w-full dark:text-secondary lg:place-items-center">
                  <p>
                    Technology and ideas should blend seamlessly
                    <span className="font-serif font-bold italic">
                      {" "}
                      (like Apple){" "}
                    </span>
                    to create excellent products. My projects reflect a unique
                    blend of technical expertise and artistic vision.{" "}
                  </p>
                  <Link href={"/resume"} className="w-fit">
                    Request résumé
                  </Link>
                </div>

                <div className="ml-auto text-sm 4xl:w-[75vw] space-y-12">
                  <div className="lg:mt-12">
                    <h3 className="text-sm brightness-75 text-secondary flex items-baseline justify-between place-self-end border-b-[1px] border-secondary/30 py-3 text-start font-normal">
                      Expertise
                    </h3>
                    <ul className={`space-y-3 dark:text-secondary`}>
                      <li className="">Front-end development</li>
                      <li className="">Web APIs - NodeJS, Actix Web</li>
                      <li className="">CLI Apps</li>
                    </ul>
                  </div>

                  <div className=" ">
                    <h3 className="text-sm brightness-75 text-secondary flex items-baseline justify-between place-self-end border-b-[1px] border-secondary/30 py-3 text-start font-normal">
                      Tech Stacks
                    </h3>
                    <ul className={`space-y-3 dark:text-secondary`}>
                      <li className="">NextJS React JamStack</li>
                      <li className="">
                        Rust, Go, Python, JavaScript, TypeScript
                      </li>
                      <li className="">Neovim, VS Code, bash</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Section>

          <Section>
            <article>
              <div className="relative space-y-6 grid w-full">
                <h2 className="flex w-48 items-baseline dark:text-secondary justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end brightness-50 font-medium before:text-sm before:content-['03'] mb-8 lg:mb-12">
                  Connect
                </h2>
              </div>
              <div className="relative flex w-full flex-col space-y-28 dark:text-secondary">
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
          className={`absolute bottom-40 left-[30%] h-1/2 brightness-50 saturate-50 dark:saturate-100 text-green-400 dark:text-accent -translate-x-1/2 lg:bottom-56`}
        >
          <WritingArrowDown />
        </div>
      </div>

      <EmailCopy />
    </div>
  );
}

function FooterCTAHero() {
  return (
    <div className="flex justify-center w-full">
      <h3 className="text-4xl leading-9 dark:text-secondary">
        Let's
        <br />
        work
        <br />
        together
      </h3>
    </div>
  );
}
