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
            <article className="pt-12">
              <h1 className={`dark:text-primary`}>
                A <span className="">front-end developer,</span>
                <br />
                creating minimal and functional software
              </h1>
            </article>
          </Section>
        </div>

        <div className={`mx-auto space-y-20 lg:space-y-28 mt-8`}>
          <Section>
            <article>
              <div className="mx-auto w-full dark:text-secondary">
                <div className="relative space-y-6 mx-auto w-full">
                  <div className="w-48 hidden border-b-[1px] dark:border-tertiary"></div>
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
                    <span className="md:absolute text-sm w-full pt-[3px] dark:text-dim origin-left -left-[calc(192px_+_0.5rem)] md:max-w-[calc(192px_+_0vw)]">
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
                <h2 className="flex w-48 ml-auto dark:text-tertiary uppercase text-sm items-baseline justify-between place-self-end border-b-[2px] border-tertiary/90 pb-2 text-end font-bold font-sans before:text-sm before:content-['01'] tracking-wider">
                  Projects
                </h2>

                <div className="mx-auto gap-4 grid backdrop-blur-[0px] relative">
                  {PROJECTS.map(
                    ({ username, repo, tags, description, img }, index) => (
                      <>
                        <a
                          key={`project-${repo}-${index}`}
                          href={`https://github.com/${username}/${repo}`}
                          className="rounded opacity-[61%] px-3 hover:blur-0 hover:opacity-100 [&>.tags]:hover:opacity-75 after:opacity-0 inline-flex pb-3 items-start relative transition-all duration-300 ease-in-out delay-100"
                        >
                          <p className="tags flex gap-2 absolute lowercase transition-all w-full delay-200 duration-300 ease-in opacity-0 top-[1ch] brightness-90 prose-sm">
                            {tags.map((tag, idx) => (
                              <span
                                key={`tag-${tag}-{${idx}}`}
                                className="tracking-wide"
                              >
                                {tag}
                              </span>
                            ))}
                          </p>
                          <div className="flex gap-x-2 dark:text-tertiary relative w-full prose-base items-center ">
                            {/* Make a component for this modal thingy img */}
                            <div className="flex flex-1 items-baseline gap-x-2">
                              <span className="flex-shrink-0 dark:text-primary prose-lg ">
                                {repo}
                              </span>
                              <span className="hidden text-tertiary lg:flex text-clip brightness-75 flex-shrink-0 truncate">
                                {description}
                              </span>
                              <span className="lg:hidden text-secondary prose-sm max-w-[44vw] flex brightness-75 flex-shrink-0 truncate">
                                {description}
                              </span>
                              <div className="after:content-[''] text-primary min-w-[2vw] after:relative after:ml-auto w-full opacity-75 after:opacity-75 relative border-t-[0.1px] blur-[0.1px] z-10 backdrop-blur-[1px] -top-1 brightness-50 flex"></div>
                            </div>
                            <span className="brightness-75 text-secondary dark:text-current">
                              2023
                            </span>
                          </div>
                        </a>
                        <div className="w-full hidden [&>img]:hover:opacity-80 h-full absolute">
                          <Image
                            // loader={myLoader}
                            src={`/img/projects/${img}`}
                            alt={`project image of ${repo}`}
                            width={500}
                            height={500}
                            className={`absolute opacity-0 right-[50vw] top-0 transition-none duration-700 delay-300 ease-in-out w-full brightness-50 grayscale-[90%] z-50`}
                          />
                        </div>
                      </>
                    )
                  )}
                </div>
              </div>
            </article>
          </Section>

          <Section>
            <article>
              <div className="relative mx-auto w-full">
                <h2 className="dark:text-tertiary text-sm w-48 uppercase font-sans font-bold flex items-baseline justify-between place-self-start border-b-[2px] border-secondary/90 text-start after:text-sm after:content-['02']  tracking-wider">
                  About
                </h2>

                <h3 className="dark:text-primary text-4xl">
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
                    <h3 className="prose-base border-t tracking-wider font-bold border-tertiary uppercase dark:text-tertiary font-sans">
                      Expertise
                    </h3>
                    <div className={`[&>*]:prose-base dark:text-secondary`}>
                      <div className="">Front-end development</div>
                      <div className="">Web APIs - NodeJS, Actix Web</div>
                      <div className="">CLI Apps</div>
                    </div>
                  </div>
                  <div className="">
                    <h3 className="prose-base tracking-wider uppercase border-t border-tertiary dark:text-tertiary/80 font-bold font-sans">
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
              <h2 className="flex ml-auto w-48 items-baseline dark:text-tertiary text-sm uppercase font-sans justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end font-medium before:text-sm before:content-['03'] mb-16 lg:mb-20 tracking-wider">
                Connect
              </h2>
              <div className="relative flex w-full flex-col space-y-28 dark:text-secondary">
                <h3 className="text-4xl max-w-md mr-auto leading-9 dark:text-primary">
                  Let's talk about a project, collaboration or an idea you may
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
