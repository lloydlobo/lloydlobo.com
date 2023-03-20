import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import React, { Suspense } from "react";
import styles from "@/styles/Resume.module.css";
import Loading from "./loading";

const ResumePage = () => {
  return (
    <>
      <Layout>
        <main
        // style={{width: "83vw"}}
          className={`container isolate ${styles.resume} mx-auto my-6 pt-8 shadow-2xl shadow-dim 
         dark:text-tertiary lg:w-[82vw]  dark:shadow-on-tertiary disabled:md:px-4 md:pt-16 [&_ul]:text-gray7 
dark:[&_ul]:text-dim  
`}
        >
          <Suspense fallback={<Loading />}>
            <div className="origin-top scale-[75%] space-y-6 lg:scale-100 lg:px-28  ">
              {/* Lobo résumé — page 1 of 2 */}
              <div
                className={`mx-auto space-y-6 divide-y-2  divide-dim font-serif lg:px-8 [&>*]:text-sm`}
              >
                <section className="mx-auto grid w-fit text-center font-sans uppercase">
                  <h1 className="text-2xl font-medium tracking-[0.2em]">
                    Lloyd Lobo
                  </h1>
                  <p className=" text-xs tracking-[0.11em]">
                    1234 Penny Lane, Earth City 1111111
                  </p>
                  <div className="mx-auto items-center gap-x-4 text-[0.7rem] md:flex">
                    <p className=" tracking-[0.10em]">(091) 111-1111</p>
                    <p className=" flex flex-nowrap gap-x-[4px] tracking-[0.16em]">
                      <span>hello</span>@<span>lloydlobo.com</span>
                    </p>
                  </div>
                </section>
                <section>
                  <h2
                    className={`${styles.h2} font-bold uppercase tracking-widest`}
                  >
                    Education
                  </h2>
                  <div className="mt-2 space-y-6">
                    <div>
                      <h3 className={`${styles.h3} relative text-xl`}>
                        <span className="after:absolute after:right-0 after:content-['2018–2019'] ">
                          Sri Aurobindo Centre for Communication and Arts
                        </span>
                      </h3>
                      <ul className={`${styles.ul} list-inside list-disc`}>
                        <li className="before:pl-4 before:content-['']">
                          Cumulative GPA: 4.0
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          Academic interests: audio recording and engineering,
                          music production, audio synthesis.
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          Top of the batch
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className={`${styles.h3} relative text-xl`}>
                        <span className="after:absolute after:right-0 after:content-['2010–2014']">
                          SRM University
                        </span>
                      </h3>
                      <ul className={`${styles.ul} list-inside list-disc`}>
                        <li className="before:pl-4 before:content-['']">
                          BTech, Mechanical Engineering
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          Extensive coursework in mechanical and robotic
                          automation.
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          SEC club
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <h2
                    className={`${styles.h2} font-bold uppercase tracking-widest`}
                  >
                    Business Experience
                  </h2>
                  <div className="mt-2 space-y-6">
                    <div>
                      <h3 className={`${styles.h3} relative text-xl`}>
                        <span className="after:absolute after:right-0 after:content-['2014-2018']">
                          Heat Master
                        </span>
                      </h3>
                      <h4 className="mb-1 text-[0.9rem] italic">
                        Front-end Engineer & Accounts Manager
                      </h4>
                      <ul className={`${styles.ul} list-inside list-disc`}>
                        <li className="before:pl-4 before:content-['']">
                          Performed independent research on numerous industries,
                          created new line of products
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          General operations and electric power panels
                          manufacturing{" "}
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          Led company through reform with upgrades and standards
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <h2
                    className={`${styles.h2} font-bold uppercase tracking-widest`}
                  >
                    Other Work Experience
                  </h2>
                  <div className="mt-2 space-y-6">
                    <div>
                      <h3 className={`${styles.h3} relative text-xl`}>
                        <span className="after:absolute after:right-0 after:content-['2019-2020']">
                          Noisy Gates Studios
                        </span>
                      </h3>
                      <h4 className="mb-1 text-[0.9rem] italic">
                        Assistant Audio Engineer
                      </h4>
                      <ul className={`${styles.ul} list-inside list-disc`}>
                        <li className="before:pl-4 before:content-['']">
                          Setup brand design and created website to reach
                          clients
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          Helped devise setting up for this music studio
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          Handled general errands
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <p className="pt-6 text-center font-sans uppercase tracking-widest brightness-75">
                    Lobo résumé — page 1 of 2
                  </p>
                </section>
              </div>

              {/* Lobo résumé — page 2 of 2 */}

              <div
                className={`divide mx-auto space-y-6 divide-y font-serif lg:px-6 [&>*]:text-sm`}
              >
                <div></div>
                <section>
                  <h2
                    className={`${styles.h2} font-bold uppercase tracking-widest`}
                  >
                    Expertise
                  </h2>
                  <div className="mt-2 space-y-6">
                    <div>
                      <h3 className="relative text-xl font-medium after:absolute after:right-0 after:content-['']">
                        {" "}
                      </h3>
                      <h4 className="mb-1 text-[0.9rem] italic"> </h4>
                      <ul className={`${styles.ul} list-inside list-disc`}>
                        <li className="before:pl-4 before:content-['']">
                          Front-end development
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          Web APIs - NodeJS, Actix Web
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          CLI Apps
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <h2
                    className={`${styles.h2} font-bold uppercase tracking-widest`}
                  >
                    Tech stacks
                  </h2>
                  <div className="mt-2 space-y-6">
                    <div>
                      <h3 className={`${styles.h3} relative text-xl`}>
                        <span className="after:absolute after:right-0 after:content-['']">
                          {" "}
                        </span>
                      </h3>
                      <h4 className="mb-1 text-[0.9rem] italic"> </h4>
                      <ul className={`${styles.ul} list-inside list-disc`}>
                        <li className="before:pl-4 before:content-['']">
                          NextJS React JamStack
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          Rust, Go, Python, JavaScript, TypeScript
                        </li>
                        <li className="before:pl-4 before:content-['']">
                          Neovim, VS Code, bash
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <section>
                  <p className="py-6 text-center font-sans uppercase tracking-widest brightness-75">
                    Lobo résumé — page 2 of 2
                  </p>
                </section>
              </div>
            </div>
          </Suspense>
        </main>
      </Layout>
    </>
  );
};

ResumePage.theme = "light";
export default ResumePage;
