import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import React from "react";
import styles from "@/styles/Resume.module.css";

const ResumePage = () => {
  return (
    <>
      <Layout>
        <main
          className={`my-6  ${styles.resume} 
shadow-2xl shadow-dim 
dark:shadow-on-tertiary dark:[&_ul]:text-dim 
dark:text-tertiary [&>section>ul]:text-dim dark:bg-on-tertiary `}
        >
          <div className="space-y-6">
            {/* Lobo résumé — page 1 of 2 */}

            <div
              className={`font-serif [&>*]:text-sm px-6  mx-auto divide-y space-y-6 dark:divide-[var(--dim)]`}
            >
              <section className="font-sans uppercase text-center grid w-fit mx-auto">
                <h1 className="text-2xl font-medium tracking-[0.2em]">
                  Lloyd Lobo
                </h1>
                <p className=" tracking-[0.11em] text-xs">
                  1234 Penny Lane, Earth City 1111111
                </p>
                <div className="md:flex text-[0.7rem] mx-auto items-center gap-x-4">
                  <p className=" tracking-[0.10em]">(091) 111-1111</p>
                  <p className=" tracking-[0.16em] flex flex-nowrap gap-x-[4px]">
                    <span>hello</span>@<span>lloydlobo.com</span>
                  </p>
                </div>
              </section>
              <section>
                <h2
                  className={`${styles.h2} uppercase font-bold tracking-widest`}
                >
                  Education
                </h2>
                <div className="space-y-6 mt-2">
                  <div>
                    <h3 className={`${styles.h3} text-xl relative`}>
                      <span className="after:content-['2018–2019'] after:right-0 after:absolute ">
                        Sri Aurobindo Centre for Communication and Arts
                      </span>
                    </h3>
                    <ul className={`${styles.ul} list-inside list-disc`}>
                      <li className="before:content-[''] before:pl-4">
                        Cumulative GPA: 4.0
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        Academic interests: audio recording and engineering,
                        music production, audio synthesis.
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        Top of the batch
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className={`${styles.h3} text-xl relative`}>
                      <span className="after:content-['2010–2014'] after:right-0 after:absolute">
                        SRM University
                      </span>
                    </h3>
                    <ul className="list-inside list-disc">
                      <li className="before:content-[''] before:pl-4">
                        BTech, Mechanical Engineering
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        Extensive coursework in mechanical and robotic
                        automation.
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        SEC club
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <h2
                  className={`${styles.h2} uppercase font-bold tracking-widest`}
                >
                  Business Experience
                </h2>
                <div className="space-y-6 mt-2">
                  <div>
                    <h3 className="text-xl font-medium after:content-['2014–2018'] after:right-0 relative after:absolute">
                      Heat Master
                    </h3>
                    <h4 className="italic text-[0.9rem] mb-1">
                      Front-end Engineer & Accounts Manager
                    </h4>
                    <ul className="list-inside list-disc">
                      <li className="before:content-[''] before:pl-4">
                        Performed independent research on numerous industries,
                        created new line of products
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        General operations and electric power panels
                        manufacturing{" "}
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        Led company through reform with upgrades and standards
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <h2
                  className={`${styles.h2} uppercase font-bold tracking-widest`}
                >
                  Other Work Experience
                </h2>
                <div className="space-y-6 mt-2">
                  <div>
                    <h3 className="text-xl font-medium after:content-['2019–2020'] after:right-0 relative after:absolute">
                      Noisy Gates Studios
                    </h3>
                    <h4 className="italic text-[0.9rem] mb-1">
                      Assistant Audio Engineer
                    </h4>
                    <ul className="list-inside list-disc">
                      <li className="before:content-[''] before:pl-4">
                        Setup brand design and created website to reach clients
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        Helped devise setting up for this music studio
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        Handled general errands
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <p className="text-center pt-6 brightness-75 font-sans tracking-widest uppercase">
                  Lobo résumé — page 1 of 2
                </p>
              </section>
            </div>

            {/* Lobo résumé — page 2 of 2 */}

            <div
              className={`font-serif [&>*]:text-sm px-6 divide mx-auto divide-y space-y-6`}
            >
              <div></div>
              <section>
                <h2
                  className={`${styles.h2} uppercase font-bold tracking-widest`}
                >
                  Expertise
                </h2>
                <div className="space-y-6 mt-2">
                  <div>
                    <h3 className="text-xl font-medium after:content-[''] after:right-0 relative after:absolute">
                      {" "}
                    </h3>
                    <h4 className="italic text-[0.9rem] mb-1"> </h4>
                    <ul className="list-inside list-disc">
                      <li className="before:content-[''] before:pl-4">
                        Front-end development
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        Web APIs - NodeJS, Actix Web
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        CLI Apps
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <h2
                  className={`${styles.h2} uppercase font-bold tracking-widest`}
                >
                  Tech stacks
                </h2>
                <div className="space-y-6 mt-2">
                  <div>
                    <h3 className="text-xl font-medium after:content-[''] after:right-0 relative after:absolute">
                      {" "}
                    </h3>
                    <h4 className="italic text-[0.9rem] mb-1"> </h4>
                    <ul className="list-inside list-disc">
                      <li className="before:content-[''] before:pl-4">
                        NextJS React JamStack
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        Rust, Go, Python, JavaScript, TypeScript
                      </li>
                      <li className="before:content-[''] before:pl-4">
                        Neovim, VS Code, bash
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <p className="text-center brightness-75 py-6 font-sans tracking-widest uppercase">
                  Lobo résumé — page 2 of 2
                </p>
              </section>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};
export default ResumePage;
