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
      <main className="">
        <div className="grid">
          <Section>
            <article className="py-6">
              <h1 className={`dark:text-primary`}>
                a <span className="">front-end developer,</span>
                <br />
                creating minimal and functional software
              </h1>
            </article>
          </Section>
        </div>

        <div className={`mx-auto space-y-12 lg:space-y-28 mt-16`}>
          <Section>
            <article>
              <div className="mx-auto w-full dark:text-secondary">
                <div className="relative space-y-6 mx-auto w-full">
                  <div className="w-48 border-b-[1px] dark:border-tertiary"></div>
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
              <div className="relative space-y-9 w-full ">
                <h2 className="flex w-48 ml-auto dark:text-tertiary uppercase text-sm items-baseline justify-between place-self-end border-b-[2px] border-tertiary/90 pb-2 text-end font-bold font-sans before:text-sm before:content-['01']">
                  Projects
                </h2>

                <div className="mx-auto gap-4 grid w-full">
                  {PROJECTS.map(
                    ({ username, repo, tags, description, img }, index) => (
                      <a
                        key={`project-${repo}-${index}`}
                        href="/"
                        className="rounded after:hidden lg:max-w-screen-lg w-full mx-auto"
                      >
                        <div className="flex gap-x-2 text-tertiary prose-base items-center ">
                          <div className="flex flex-1 items-baseline gap-x-2">
                            <span className="flex-shrink-0 text-primary prose-lg ">
                              {repo}
                            </span>
                            <span className="hidden md:flex  text-clip brightness-75 flex-shrink-0 truncate">
                              {description}
                            </span>
                            <span className="md:hidden text-clip overflow-clip max-w-[24ch] flex brightness-75 flex-shrink-0 truncate">
                              {description}
                            </span>
                            <div className="after:content-[''] after:relative after:ml-auto w-full relative border-t-[0.5px] blur-[0.7px]  -top-1 brightness-50 flex"></div>
                          </div>
                          <span className="brightness-75">2023</span>
                        </div>
                      </a>
                    )
                  )}
                </div>
              </div>
            </article>
          </Section>

          <Section>
            <article>
              <div className="relative space-y-6 mx-auto w-full">
                <h2 className="dark:text-tertiary text-sm w-48 uppercase font-sans font-bold  flex items-baseline justify-between place-self-start border-b-[2px] border-secondary/90 pb-2 text-start after:text-sm after:content-['02']">
                  About
                </h2>

                <h3 className="dark:text-primary text-4xl">
                  developer by trade
                  <br />
                  creator by heart
                </h3>
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
                    Get résumé
                  </Link>
                </div>

                <div className="ml-auto text-sm 4xl:w-[75vw] space-y-12">
                  <div className="lg:mt-12">
                    <h3 className="text-xs uppercase font-sans dark:text-tertiary flex items-baseline justify-between place-self-end border-t-[1px] dark:border-tertiary/30 py-2 text-start font-bold">
                      Expertise
                    </h3>
                    <ul className={`space-y-3 dark:text-secondary`}>
                      <li className="">Front-end development</li>
                      <li className="">Web APIs - NodeJS, Actix Web</li>
                      <li className="">CLI Apps</li>
                    </ul>
                  </div>

                  <div className=" ">
                    <h3 className="text-xs uppercase font-sans dark:text-tertiary flex items-baseline justify-between place-self-end border-t-[1px] dark:border-tertiary/30 py-2 text-start font-bold">
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
            <article className="pb-12">
              <h2 className="flex ml-auto w-48 items-baseline dark:text-tertiary text-sm uppercase font-sans justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end font-medium before:text-sm before:content-['03'] mb-8 lg:mb-8">
                Connect
              </h2>
              <div className="relative flex w-full flex-col space-y-28 dark:text-secondary">
                <h3 className="text-4xl lowercase max-w-md mr-auto leading-9 dark:text-primary font-sans">
                  let's talk about a project, collaboration or an idea you may
                  have
                </h3>
                <div className="relative ml-auto">
                  <div
                    className={`relative w-full -rotate-45 scale-75 md:scale-100 lg:-rotate-[55deg]`}
                  >
                    <div
                      className={`absolute bottom-40 left-[30%] h-1/2 brightness-50 saturate-50 dark:saturate-100 text-green-400 dark:text-secondary -translate-x-1/2 lg:bottom-56`}
                    >
                      <WritingArrowDown />
                    </div>
                  </div>
                  <EmailCopy />
                </div>
              </div>
            </article>
          </Section>
        </div>
      </main>
    </Layout>
  );
}
