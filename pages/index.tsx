import Link from "next/link";
import Layout from "../components/Layout";
import { Inter } from "next/font/google";
import RepoStats from "../components/github/RepoStats";

import Image from "next/image";

import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const SQLBackground = () => {
  const repos = [
    { username: "lloydlobo", repo: "mausam" },
    { username: "lloydlobo", repo: "neura-driver" },
    { username: "lloydlobo", repo: "geomeasure" },
    { username: "lloydlobo", repo: "proxymate-bot" },
    { username: "lloydlobo", repo: "penny" },
    { username: "lloydlobo", repo: "okejoke" },
    { username: "lloydlobo", repo: "rssh" },
  ];

  let numberOfLists = 32;
  return (
    <>
      <div class="flex space-x-8">
        {Array.from({ length: numberOfLists }).map((_, index) => (
          <ul className="space-y-8">
            {repos.map(({ username, repo }, index) => (
              <li key={index}>{repo}</li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <main className={`${styles.main} space-y-[10rem]`}>
      <section>
        <div className="grid place-items-center space-y-8">
          <h1 className={`${inter.className} text-5xl font-bold`}>
            <div className="flex place-items-center">
              <Link href="/about">Lloyd Lobo</Link>
              <span className={styles.thirteen}>👋</span>
            </div>
          </h1>
          <p className="text-start w-2/3">
            Hey, I'm Lloyd. Full-Time software developer.
          </p>
          <div className="flex place-items-center">
            <div>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
            <picture>
              <source
                srcSet="https://github-readme-stats.vercel.app/api?username=lloydlobo&show_icons=false&theme=dark&bg_color=00000000&hide_border=true&hide_title=true"
                media="(prefers-color-scheme: dark)"
              />
              <source
                srcSet="https://github-readme-stats.vercel.app/api?username=lloydlobo&show_icons=false&hide_border=true&hide_title=true"
                media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
              />
              <img src="https://github-readme-stats.vercel.app/api?username=lloydlobo&show_icons=false&hide_border=true&hide_title=true" />
            </picture>
          </div>
        </div>
      </section>

      <section>
        <div className="grid place-items-center space-y-8">
          <p className={`${inter.className} w-2/3 text-2xl`}>
            Focuses on Rust, Python & JavaScript/TypeScript. Makes apps, CLI
            tools, Discord bots, and novel websites. Likes ☀, dogs, and cats.
          </p>
        </div>
      </section>

      <section>
        <div className="relative">
          <div className="w-[100vw] backdrop-blur-sm bg-white/01 px-12 grid py-8 space-y-8">
            <p
              className={`${inter.className} font-semibold text-2xl margin-block-auto`}
            >
              SELECT clients
              <br />
              FROM clients
              <br />
              INNER JOIN invoices
              <br />
              ON invoices client_id = clients.id
              <br />
              WHERE invoices is paid = true
              <br />
              ORDER BY name;
              <br />
            </p>
          </div>
          <div className="absolute text-[7px] w-full blur-[0.6px] top-0 left-0 right-0 ">
            <SQLBackground />
          </div>
        </div>
      </section>

      <section>
        <div className="grid place-items-center space-y-[4rem]">
          <h2 className="text-center text-4xl font-bold">Projects</h2>
          <div className="grid grid-cols-2 grid-rows-3">
            <RepoStats />
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

// https://github.com/anuraghazra/github-readme-stats
export default IndexPage;
