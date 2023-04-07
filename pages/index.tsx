import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { EmailCopy } from "@/components/effects/EmailCopy";
import { WritingArrowDown } from "@/components/effects/WritingArrowDown";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HomePage() {
  // let uuid = crypto.randomUUID();
  return (
    <Layout title="Work ">
      <main className="">
        <div className="grid">
          <Section>
            <article className="md:pt-8">
              <h1 className={`dark:text-primary`}>
                Hi there, I&apos;m Lloyd.
                <br />
                Front End{" "}
                <span className="text-green-400 dark:text-green-300">
                  Developer
                </span>
                , creating minimal and functional software
              </h1>
            </article>
          </Section>
        </div>

        <div className={`mx-auto mt-8 space-y-20 lg:space-y-28`}>
          <Section>
            <article>
              <div className="mx-auto w-full dark:text-secondary">
                <div className="relative mx-auto w-full space-y-6">
                  <p className="relative w-fit">
                    I deeply enjoy building polished software and web
                    experiences. Tinkering with functional and aesthetically
                    pleasing interfaces.
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
                        I&apos;m a software developer who&apos;s
                        passionate about building great stuff. My focus is on
                        creating innovative solutions that exceed client
                        expectations.
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

                <div className="relative mx-auto  grid gap-4 backdrop-blur-[0px]">
                  {PROJECTS.map(
                    (
                      { username, repo, tags, description, img, year },
                      index
                    ) => (
                      <div key={`project-${repo}-${index}`}>
                        <Link
                          href={`/projects/${repo}`}
                          // href={`https://github.com/${username}/${repo}`}
                          className="relative inline-flex w-full items-start rounded px-3 pb-3 transition-all delay-100 duration-300 ease-in-out after:opacity-0 hover:opacity-100 hover:blur-0 [&>.tags]:hover:opacity-75"
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
                              {year}
                            </span>
                          </div>
                        </Link>
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

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h3 className="prose-base border-t border-tertiary/50 pt-0.5 font-sans font-bold uppercase tracking-wider text-gray5 dark:text-tertiary/60">
                      Expertise
                    </h3>
                    <div className={`[&>*]:prose-base `}>
                      <div className="">Front-end development</div>
                      <div className="">Web APIs - NodeJS, Actix Web</div>
                      <div className="">CLI Apps</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="prose-base border-t border-tertiary/50 pt-0.5 font-sans font-bold uppercase tracking-wider text-gray5 dark:text-tertiary/60">
                      Tech Stacks
                    </h3>
                    <div className={`[&>*]:prose-base`}>
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
              <h2 className="mb-16 ml-auto flex w-48 items-baseline justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end font-sans text-sm font-medium uppercase tracking-wider before:text-sm before:content-['03'] dark:text-tertiary lg:mb-20">
                Connect
              </h2>
              <div className="relative flex w-full flex-col space-y-28 dark:text-secondary">
                <h3 className="mr-auto max-w-md text-4xl leading-9 dark:text-primary">
                  Let&apos;s talk about a project, collaboration or an idea
                  you may have
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

const PROJECTS = [
  {
    username: "lloydlobo",
    tags: ["api", "audio"],
    repo: "dictionary-web-app",
    description: "Dictionary web app using the Dictionary API",
    img: "neura-driver.jpg",
    year: "2023",
  },
  {
    username: "lloydlobo",
    tags: ["api", "markdown"],
    repo: "markdown-editor",
    description:
      "Fully-functional in-browser markdown editor application with a light/dark mode toggle",
    img: "neura-driver.jpg",
    year: "2023",
  },
  {
    username: "lloydlobo",
    tags: ["cli", "linux"],
    repo: "mausam",
    description: "A weather update desktop notifier made with Rust",
    img: "mausam.jpg",
    year: "2023",
  },
  {
    username: "lloydlobo",
    tags: ["python", "discord"],
    repo: "proxymate",
    description:
      "Generates phrases in the style of the author using Markov model",
    img: "proxymate.jpg",
    year: "2023",
  },
  // { username: "lloydlobo", tags: ["discord", "python"], repo: "penny", description: "A no-nonsense budget tracking Discord bot", img: "penny.jpg", year: "2023", },
  // { username: "lloydlobo", tags: ["rust", "cli"], repo: "hackernews-clone", description: "Coming soon...", img: "mausam-fibo.jpg", year: "2023", },
];
