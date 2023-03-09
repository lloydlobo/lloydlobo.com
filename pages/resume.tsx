import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import React from "react";

const styles = `
h2 {
  padding: 2px 0 0;
  font-family: sans-serif;
  font-size: 0.77rem;
  font-weight: 900 !important;
}

h3 {
  font-weight: 600 !important;
}

h3::after{
font-size: 1.0rem;
}
`;

const ResumePage = () => {
  return (
    <>
      <style jsx global>
        {`
          ${styles}
        `}
      </style>
      <Layout>
        <div
          className={`font-serif [&>*]:text-sm px-6 divide mx-auto divide-y space-y-6`}
        >
          <section className="font-sans uppercase text-center grid w-fit mx-auto">
            <h1 className="text-2xl font-medium tracking-[0.2em]">
              Lloyd Lobo
            </h1>
            <p className=" tracking-[0.11em] text-xs">
              1234 Penny Lane, Earth City 1111111
            </p>
            <div className="flex text-[0.7rem] mx-auto items-center gap-4">
              <p className=" tracking-[0.10em]">(091) 111-1111</p>
              <p className=" tracking-[0.16em] flex flex-nowrap gap-[4px]">
                <span>hello</span>@<span>lloydlobo.com</span>
              </p>
            </div>
          </section>
          <section>
            <h2 className="uppercase font-bold tracking-widest">Education</h2>
            <div className="space-y-6 mt-2">
              <div>
                <h3 className="text-xl font-medium after:content-['2018–2019'] after:right-0 relative after:absolute">
                  Sri Aurobindo Centre for Communication and Arts
                </h3>
                <ul className="list-inside list-disc">
                  <li className="before:content-[''] before:pl-4">
                    Cumulative GPA: 4.0
                  </li>
                  <li className="before:content-[''] before:pl-4">
                    Academic interests: audio recording and engineering, music
                    production, audio synthesis.
                  </li>
                  <li className="before:content-[''] before:pl-4">
                    Top of the batch
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-xl font-medium
 after:content-['2010–2014'] after:right-0 relative after:absolute
                "
                >
                  SRM University
                </h3>
                <ul className="list-inside list-disc">
                  <li className="before:content-[''] before:pl-4">
                    BTech, Mechanical Engineering
                  </li>
                  <li className="before:content-[''] before:pl-4">
                    Extensive coursework in mechanical and robotic automation.
                  </li>
                  <li className="before:content-[''] before:pl-4">SEC club</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="uppercase font-bold tracking-widest">
              Business Experience
            </h2>
            <div className="space-y-6 mt-2">
              <div>
                <h3
                  className="text-xl font-medium
 after:content-['2014–2018'] after:right-0 relative after:absolute
                "
                >
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
                    General operations and electric power panels manufacturing{" "}
                  </li>
                  <li className="before:content-[''] before:pl-4">
                    Led company through reform with upgrades and standards
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="uppercase font-bold tracking-widest">
              Other Work Experience
            </h2>
            <div className="space-y-6 mt-2">
              <div>
                <h3
                  className="text-xl font-medium

 after:content-['2019–2020'] after:right-0 relative after:absolute
                "
                >
                  Noisy Gates Studios
                </h3>
                <h4 className="italic text-[0.9rem] mb-1">
                  Assistant Audio Engineer
                </h4>
                <ul className="list-inside list-disc">
                  <li className="before:content-[''] before:pl-4">
                    Helped devise setting up for this innovative music studio
                  </li>
                  <li className="before:content-[''] before:pl-4">
                    Handled general errands
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <p className="text-center font-sans tracking-widest uppercase">
              Lobo résumé — page 1 of 2
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
};
export default ResumePage;
