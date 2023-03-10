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
              <div className="">
                <h1
                  className={`text-[7vw] font-bold dark:text-primary max-w-screen-md md:max-w-screen-xl backdrop-blur-[0px] hover:text-accent md:text-[4vw] lg:max-w-screen-sm leading-none lg:text-5xl`}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-primary/[70%] from-on-primary/[83%] to-on-primary/[99%] dark:to-primary backdrop-blur-[0px]">
                    a front-end developer,<br />creating minimal and functional software
                  </span>
                </h1>
              </div>
            </article>
          </Section>
        </div>

        <div className={`mx-auto space-y-12 font-sans lg:space-y-24 mt-16`}>
          <Section>
            <article className="">
              <div className="mx-auto w-full dark:text-secondary">
                <div className="relative
                space-y-6 mx-auto w-full">
                  <div className="w-48 border-b-[2px] dark:border-secondary/90 pb-2">
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
                  <p className="relative w-fit">

                    <span className="md:absolute  text-sm w-full pt-[3px] origin-left -left-[calc(192px_+_0.5rem)] md:max-w-[calc(192px_+_0vw)] brightness-50">
                      (tldr){" "}
                    </span>
                    I'm Lloyd, a software developer who's passionate about{" "}
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
              <div className="relative  space-y-9 grid w-full dark:text-secondary">
                <h2
                  className="flex w-48 items-baseline justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end font-medium before:text-sm
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
              <div className="relative dark:text-secondary space-y-6 mx-auto w-full">
                <h2
                  className="w-48 font-medium flex items-baseline brightness-50 justify-between place-self-start border-b-[2px] border-secondary/90 pb-2 text-start after:text-sm
                after:content-['02']"
                >
                  About
                </h2>

                <div className="">
                  <h1 className={`text-4xl font-bold dark:text-primary backdrop-blur-[0px] hover:text-accent md:text-5xl pt-4`} >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r dark:from-primary/50 from-on-primary/[80%] to-on-primary/[95%] dark:to-primary backdrop-blur-[0px]">
                      <span className="relative brightness-90">
                        Developer by trade
                        <br />
                        Creator by heart
                      </span>
                    </span>
                  </h1>
                </div>
                <div className="w-full dark:text-secondary lg:place-items-center">
                  <p>
                    Technology and ideas should blend seamlessly
                    <span className="font-serif font-bold italic"> (like Apple){" "} </span>
                    to create excellent products.
                    My projects reflect a unique blend of technical
                    expertise and artistic vision.
                    {" "}
                    <Link href={"/resume"} className="w-fit">
                      Request résumé
                    </Link>
                  </p>
                </div>

                <div className="ml-auto text-sm 4xl:w-[75vw] space-y-12">
                  <div className="lg:mt-12">
                    <h3 className="mb-4 text-sm flex items-baseline justify-between place-self-end border-b-[1px] border-secondary/30 py-3 text-start font-normal brightness-75">
                      Expertise
                    </h3>
                    <ul className={`space-y-3`}>
                      <li className="">Front-end development</li>
                      <li className="">Web APIs - NodeJS, Actix Web</li>
                      <li className="">CLI Apps</li>
                    </ul>
                  </div>

                  <div className=" ">
                    <h3 className="mb-4 text-sm brightness-75 flex items-baseline justify-between place-self-end border-b-[1px] border-secondary/30 py-3 text-start font-normal">
                      Tech Stacks
                    </h3>
                    <ul className={`space-y-3`}>
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
            <article className="mb-24">
              <div className="relative mb-20 md:mb-36 space-y-6 grid w-full dark:text-secondary  ">
                <h2 className="flex w-48 items-baseline justify-between place-self-end border-b-[2px] border-secondary/90 pb-2 text-end brightness-50 font-medium before:text-sm before:content-['03'] mb-8 lg:mb-12">
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
    <div className="relative w-fit">
      <h3
        className={`text-4xl font-bold dark:text-primary backdrop-blur-[0px] md:text-5xl`}
      >
        <span
          className="bg-clip-text text-transparent bg-gradient-to-r hue-rotate-0
        dark:from-primary/50 from-gray2 to-gray1 dark:invert-0  dark:to-primary backdrop-blur-[0px]"
        >
          <span className="relative brightness-105">
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
        className="absolute rounded-md left-0 bottom-[5px] -z-10 origin-bottom-left scale-[68%] bg-blend-overlay brightness-[70%] grayscale-[30%] sepia-[50%] filter md:scale-[100%]"
      >
        <img
          alt="Person drinking lots of coffee. Source: https://media.giphy.com/media/Mk1wQ8cH5TtsqafLiX/giphy.gif"
          src="/drita_arsela_coffee.webp"
          className="left-1 brightness-75 opacity-90 relative"
        />
      </div>
    </div>
  );
}
