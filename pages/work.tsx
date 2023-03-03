import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { WorkProjects } from "@/components/WorkProjects";
import { EmailCopy } from "@/components/effects/EmailCopy";
import { WritingArrowDown } from "@/components/effects/WritingArrowDown";
import { Hero } from "@/components/layout/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function IndexPage() {
  return (
    <Layout title="Home | ">
      <div className="relative">
        <Section>
          <Hero />
        </Section>
      </div>

      <div className={`mx-auto space-y-[6rem] font-sans lg:space-y-[12rem]`}>
        {/* <HeroCopilot/> */}
        <Section>
          <div className="mx-auto hidden w-full space-y-3 ">
            <h1
              className={`max-[320px]:text-5xl m-0 mx-auto text-center text-9xl font-extrabold leading-[1] -tracking-[0.1ch] text-primary
              shadow lg:text-[44vw] `}
            >
              hello
            </h1>
            <h2
              className={`text-2xl font-extrabold tracking-tighter text-primary lg:text-center lg:text-5xl `}
            >
              <div className="subtitle max-[427px]:grid place-content-center text-center md:flex md:space-x-1">
                <span>Design.</span>
                <span>Develop.</span>
                <span>Ship.</span>
              </div>
            </h2>
            <div className="mt-10 hidden grid-cols-2 items-center justify-center space-x-6 place-self-center lg:max-w-[50vw]">
              <a
                href="#"
                className="rounded-md  py-2.5 text-sm font-semibold uppercase text-primary underline underline-offset-8 shadow-sm hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Deploying <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="#"
                className="text-sm font-semibold uppercase text-primary underline underline-offset-8 hover:text-accent"
              >
                Works <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <p
              className={`mx-auto text-center text-lg text-secondary lg:max-w-[66vw] `}
            >
              Empowering innovators to create at the speed of inspiration.
              <br />
              <br />
              As a software developer, I use open source and AI tools to
              architect efficient code and tackle complex problems with ease.
            </p>
          </div>

          {/* <div className="bg-on-primary py-24 sm:py-32"> */}
          <div className="hidden bg-on-primary pt-12 sm:pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-8 text-primary">
                Trusted by the world's most innovative teams
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 blur-[0.4px] brightness-[400%] invert sepia sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="mx-auto w-full text-secondary">
            <div className="relative mx-auto w-full">
              <p className="mb-20 w-[25vw] border-b-[6px] border-secondary py-4 text-start text-xl font-normal">
                Lloyd Lobo
              </p>
              <div className="grid grid-cols-1 gap-12 text-xl sm:grid-cols-2 lg:grid-cols-3">
                <ul className={`hidden space-y-1 lg:block`}>
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
                <p>
                  I'm a software developer who's passionate about building great
                  stuff. My focus is on creating innovative solutions that
                  exceed client expectations.
                </p>
                <p>
                  My goal is to help businesses and individuals achieve their
                  goals by adopting new ideas and approaches that they may have
                  previously avoided. By working together, we can build trust
                  and create a positive and productive work environment.
                </p>
              </div>
            </div>
          </div>
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
                <span className="font-bold italic">
                  term encapsulates the full spectrum{"... "}
                </span>
                of my creative endeavors — from designing software and building
                apps to producing digital art and music for fun.
              </p>
              <p className="lg:pr-12">
                Thoroughly understanding your medium is crucial. When technology
                and ideas blend, products excel{" "}
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
