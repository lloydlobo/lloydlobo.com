import { MouseBlob } from "@/components/effects/MouseBlob";
import Layout from "@/components/Layout";
import { Section } from "@/components/Section";
import { WorkProjects } from "@/components/WorkProjects";
import React, { useEffect } from "react";

export default function Projects(props: {}) {
  return (
    <>
      <MouseBlob />
      <Layout>
        <>
          <main className="">
            <div className="grid">
              <Section>
                <article className="w-full">
                  <h1 className={`pr-[5vw]`}>
                    <span className="">Passion projects</span>
                    {" and"} fun little experiments
                  </h1>
                </article>
              </Section>
            </div>

            <div className={`mx-auto mt-8 space-y-20 lg:space-y-28`}>
              <Section>
                <article>
                  <WorkProjects />
                </article>
              </Section>
            </div>
          </main>
        </>
      </Layout>
    </>
  );
}
