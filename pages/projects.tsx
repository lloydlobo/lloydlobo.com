import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { WorkProjects } from "@/components/WorkProjects";
import React from "react";

export default function Projects(props: {}) {
  return (
    <Layout>
      <>
        <div className="bg-[#650310] fixed -z-10 inset-0 w-screen h-screen "></div>
        <main className="">
          <div className="grid">
            <Section>
              <article className="w-full">
                <h1 className={`dark:text-primary pr-[5vw]`}>
                  <span className="">Passion projects</span> and fun little
                  experiments
                </h1>
              </article>
            </Section>
          </div>

          <div className={`mx-auto space-y-20 lg:space-y-28 mt-8`}>
            <Section>
              <article>
                <div className="grid prose-sm gap-x-8 gap-y-0 grid-cols-2 lg:grid-cols-3">
                  <WorkProjects />
                </div>
              </article>
            </Section>
          </div>
        </main>
      </>
    </Layout>
  );
}
