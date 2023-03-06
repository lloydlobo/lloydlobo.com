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

export default function WorkPage() {
  return (
    <Layout title="Work ">
      <main>
        <div className="">
          <Section>
            <article className="">
              <div className="bg-on-primary">
                <h1 className="grid text-6xl lg:text-7xl font-semibold lg:font-bold text-transparent bg-clip-text bg-gradient-to-b bg-primary from-on-primary/80">
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
          className={`mx-auto space-y-[6rem] font-sans lg:space-y-[12rem] mt-20`}
        >
          <Section>
            <article className="">
              <div className="mx-auto w-full text-secondary">
                <div className="relative mx-auto w-full">
                  <p className="mb-20 w-fit pr-44 border-b-[4px] border-secondary pb-4 text-start text-lg font-normal">
                    Lloyd Lobo
                  </p>
                  <div className="grid grid-cols-1 gap-10 text-base sm:grid-cols-2 lg:grid-cols-3">
                    <ul className={`hidden space-y-1 font-medium lg:block`}>
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
                    <p className="">
                      I'm a software developer who's passionate about building
                      great stuff. My focus is on creating innovative solutions
                      that exceed client expectations.
                    </p>
                    <p>
                      My goal is to help businesses and individuals achieve
                      their goals by adopting new ideas and approaches that they
                      may have previously avoided. By working together, we can
                      build trust and create a positive and productive work
                      environment.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Section>

          <Section>
            <div className="relative grid w-full">
              <h2
                className="mb-20 flex w-[25vw] items-baseline justify-between place-self-end border-b-[6px] border-secondary py-3 text-end text-xl font-normal text-secondary before:text-sm
                before:content-['01'] lg:mb-48
                "
              >
                Work
              </h2>
            </div>
            <WorkProjects />
          </Section>

          <Section>
            <div className="relative mx-auto w-full">
              <h2
                className="mb-24 flex w-[25vw] items-baseline justify-between place-self-start border-b-[6px] border-secondary py-3 text-start text-xl font-normal text-secondary after:text-sm
                after:content-['02'] lg:mb-40
                "
              >
                About
              </h2>
            </div>
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
            <div className="relative grid w-full">
              <h2 className="mb-24 flex w-[25vw] items-baseline justify-between place-self-end border-b-[6px] border-secondary py-3 text-end text-xl font-normal text-secondary before:text-sm before:content-['03'] lg:mb-48">
                Contact
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
              yoyo: Infinity,
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
        className={` text-5xl font-bold leading-[1.2ch] tracking-tight text-primary backdrop-blur-[1px] hover:text-accent md:text-[5.3rem]`}
      >
        Let's
        <br />
        work
        <br />
        together
      </h3>

      <div
        style={{
          opacity: 1,
          clipPath: "inset(11.15rem 0 0 0)",
          height: "clamp(28rem, 35vw, 31.3rem)",
          width: "clamp(18rem, 35vw, 31.3rem)",
        }}
        className="absolute left-1 bottom-0 -z-10 origin-bottom-left scale-[68%] bg-blend-overlay brightness-[30%] grayscale-[30%] sepia-[50%] filter lg:scale-[121%]"
      >
        <img
          alt="Person drinking lots of coffee. Source: https://media.giphy.com/media/Mk1wQ8cH5TtsqafLiX/giphy.gif"
          src="/drita_arsela_coffee.webp"
        />
      </div>
    </div>
  );
}
