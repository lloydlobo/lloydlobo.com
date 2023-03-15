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
                  <h1 className={`pr-[5vw]`} >
                    <span className="">Passion projects</span>
                    {" and"} fun little experiments
                  </h1>
                </article>
              </Section>
            </div>

            <div className={`mx-auto space-y-20 lg:space-y-28 mt-8`}>
              <Section>
                <article>
                  <div className="grid prose-sm gap-2 py-4 grid-cols-2 lg:grid-cols-3" >
                    <WorkProjects />
                  </div>
                </article>
              </Section>
            </div>
          </main>
        </>
      </Layout>
    </>
  );
}

// <style jsx global>
//   {`
//     body {
//       --tw-bg-opacity: 1;
//       background-color: rgb(
//         251 207 232 / var(--tw-bg-opacity)
//       ) !important;
//     }
//
//     .logo {
//       background-color: rgb(248 113 113) !important;
//     }
//
//     header a {
//       --tw-bg-opacity: 1;
//       color: rgb(248 113 113 / var(--tw-bg-opacity)) !important;
//       font-weight: bolder !important;
//     }
//   `}
// </style>
