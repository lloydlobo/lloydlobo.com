import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { EmailCopy } from "@/components/effects/EmailCopy";
import { WritingArrowDown } from "@/components/effects/WritingArrowDown";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const PROJECTS = [
  {
    username: "lloydlobo",
    tags: ["cli", "linux"],
    repo: "mausam",
    description: "A weather update desktop notifier made with Rust",
    img: "mausam.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["Neural Network"],
    repo: "neura-driver",
    description: "A simple self-driving car application with a neural network",
    img: "neura-driver.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["API"],
    repo: "geomeasure",
    description: "Geomeasure measures distance using GPS and that too without",
    img: "geomeasure.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["python", "discord"],
    repo: "proxymate",
    description:
      "Generates phrases in the style of the author using Markov model",
    img: "proxymate.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["discord", "python"],
    repo: "penny",
    description: "A no-nonsense budget tracking Discord bot",
    img: "penny.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["rust", "cli"],
    repo: "rssh",
    description: "rssh or Rust Shell allows keeping maintainable bash aliases",
    img: "rssh.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["rust", "cli"],
    repo: "hackernews-clone",
    description: "Coming soon...",
    img: "mausam-fibo.jpg",
  },
];
export default function WorkPage() {
  // let uuid = crypto.randomUUID();
  return (
    <Layout title="Work ">
      <main className="">
        <div className="grid">
          <Section>
            <article className="">
              <h1 className={`dark:text-primary`}>
                A <span className="">front-end developer,</span>
                <br />
                creating minimal and functional software
              </h1>
            </article>
          </Section>
        </div>

        <div className={`mx-auto mt-8 space-y-20 lg:space-y-28`}>
          <Section>
            <article>
              <div className="mx-auto w-full dark:text-secondary">
                <div className="relative mx-auto w-full space-y-6">
                  <div className="hidden w-48 border-b-[1px] dark:border-tertiary"></div>
                  {/* Better to put this in the about page */}
                  <p className="hidden">
                    If you're browsing this page it means you probably wish to
                    know more about me. Wish granted.
                  </p>
                  <span className="-right-[calc(192px_+_0.5rem)] w-full origin-left pt-[3px] text-sm opacity-0 brightness-50 hover:opacity-100 md:absolute md:max-w-[calc(192px_+_0vw)]">
                    TLDR for the impatient people...
                  </span>
                  <p className="relative w-fit">
                    <span className="-left-[calc(192px_+_0.5rem)]  hidden w-full origin-left pt-[3px] text-sm brightness-50 md:absolute md:max-w-[calc(192px_+_0vw)]">
                      (tldr){" "}
                    </span>
                    I'm <span className="dark:text-dim">Lloyd</span>, a software
                    developer who's passionate about{" "}
                    <em className="">
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
                    <span className="-left-[calc(192px_+_0.5rem)] w-full origin-left pt-[3px] text-sm dark:text-dim md:absolute md:max-w-[calc(192px_+_0vw)]">
                      Now...{" "}
                    </span>
                    Fearlessly exploring passions and interests with a drive to
                    hone my skills and deliver quality work. I assume{" "}
                    <em className="">
                      everything we encounter matters to someone
                    </em>
                    .
                  </p>
                  <p>
                    <Link href={"/resume"} className="">
                      Get résumé
                    </Link>
                  </p>

                  <div className="relative mx-auto hidden w-[100%] overflow-x-auto">
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
              <div className="relative w-full space-y-9 ">
                <h2 className="ml-auto flex w-48 items-baseline justify-between place-self-end border-b-[2px] border-tertiary/90 pb-2 text-end font-sans text-sm font-bold uppercase tracking-wider before:text-sm before:content-['01'] dark:text-tertiary">
                  Selected Projects
                </h2>

                <div className="relative mx-auto grid gap-4 backdrop-blur-[0px]">
                  {PROJECTS.map(
                    ({ username, repo, tags, description, img }, index) => (
                      <div key={`project-${repo}-${index}`}>
                        <a
                          href={`https://github.com/${username}/${repo}`}
                          className="relative inline-flex items-start rounded px-3 pb-3 opacity-[61%] transition-all delay-100 duration-300 ease-in-out after:opacity-0 hover:opacity-100 hover:blur-0 [&>.tags]:hover:opacity-75"
                        >
                          <p className="tags prose-sm absolute top-[1ch] flex w-full gap-2 lowercase opacity-0 brightness-90 transition-all delay-200 duration-300 ease-in">
                            {tags.map((tag, idx) => (
                              <span
                                key={`tag-${tag}-{${idx}}`}
                                className="tracking-wide"
                              >
                                {tag}
                              </span>
                            ))}
                          </p>
                          <div className="prose-base relative flex w-full items-center gap-x-2 dark:text-tertiary ">
                            {/* Make a component for this modal thingy img */}
                            <div className="flex flex-1 items-baseline gap-x-2">
                              <span className="prose-lg flex-shrink-0 dark:text-primary ">
                                {repo}
                              </span>
                              <span className="hidden flex-shrink-0 truncate text-clip text-tertiary brightness-75 lg:flex">
                                {description}
                              </span>
                              <span className="prose-sm flex max-w-[44vw] flex-shrink-0 truncate text-secondary brightness-75 lg:hidden">
                                {description}
                              </span>
                              <div className="relative -top-1 z-10 flex w-full min-w-[2vw] border-t-[0.1px] text-primary opacity-75 blur-[0.1px] brightness-50 backdrop-blur-[1px] after:relative after:ml-auto after:opacity-75 after:content-['']"></div>
                            </div>
                            <span className="text-secondary brightness-75 dark:text-current">
                              2023
                            </span>
                          </div>
                        </a>
                        <div className="absolute hidden h-full w-full [&>img]:hover:opacity-80">
                          <Image
                            // loader={myLoader}
                            src={`/img/projects/${img}`}
                            alt={`project image of ${repo}`}
                            width={500}
                            height={500}
                            className={`absolute right-[50vw] top-0 z-50 w-full opacity-0 brightness-50 grayscale-[90%] transition-none delay-300 duration-700 ease-in-out`}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </article>
          </Section>

          <Section>
            <article>
              <div className="relative mx-auto w-full">
                <h2 className="flex w-48 items-baseline justify-between place-self-start border-b-[2px] border-secondary/90 text-start font-sans text-sm font-bold uppercase tracking-wider after:text-sm after:content-['02']  dark:text-tertiary">
                  About
                </h2>

                <h3 className="text-4xl dark:text-primary">
                  Developer by trade,
                  <br />
                  creator by heart
                </h3>

                <div className="w-full dark:text-secondary">
                  <p>
                    Technology and ideas should blend seamlessly to create
                    excellent products. My projects reflect a unique blend of
                    technical expertise and artistic vision.{" "}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-[1ch]">
                  <div className="">
                    <h3 className="prose-base border-t border-tertiary font-sans font-bold uppercase tracking-wider dark:text-tertiary">
                      Expertise
                    </h3>
                    <div className={`[&>*]:prose-base dark:text-secondary`}>
                      <div className="">Front-end development</div>
                      <div className="">Web APIs - NodeJS, Actix Web</div>
                      <div className="">CLI Apps</div>
                    </div>
                  </div>
                  <div className="">
                    <h3 className="prose-base border-t border-tertiary font-sans font-bold uppercase tracking-wider dark:text-tertiary/80">
                      Tech Stacks
                    </h3>
                    <div className={`[&>*]:prose-base dark:text-secondary`}>
                      <div className="">NextJS React JamStack</div>
                      <div className="">
                        Rust, Go, Python, JavaScript, TypeScript
                      </div>
                      <div className="">Neovim, VS Code, bash</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Section>

          <Section>
            <article className="pb-12">
              <h2 className="ml-auto mb-16 flex w-48 items-baseline justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end font-sans text-sm font-medium uppercase tracking-wider before:text-sm before:content-['03'] dark:text-tertiary lg:mb-20">
                Connect
              </h2>
              <div className="relative flex w-full flex-col space-y-28 dark:text-secondary">
                <h3 className="mr-auto max-w-md text-4xl leading-9 dark:text-primary">
                  Let's talk about a project, collaboration or an idea you may
                  have
                </h3>
                <div className="relative ml-auto">
                  <div
                    className={`relative w-full -rotate-45 scale-75 md:scale-100 lg:-rotate-[55deg]`}
                  >
                    <div
                      className={`absolute bottom-40 left-[30%] h-1/2 -translate-x-1/2 text-green-400 brightness-50 saturate-50 dark:text-secondary dark:saturate-100 lg:bottom-56`}
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
