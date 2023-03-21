import Link from "next/link";
import React, { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub, FaWpexplorer } from "react-icons/fa";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const WorkProjects = () => {
  const repos = PROJECTS;
  // useEffect(() => {
  //   const navProjects = document.getElementById("navProjects");
  //   let links = navProjects.getElementsByTagName("button");
  //   for (let i = 0; i < links.length; i++) {
  //     const link = links[i];
  //     link.onmousemove = (event) => {
  //       const rect = link.getBoundingClientRect();
  //       const img = link.querySelector("img");
  //       if (img !== null) {
  //         img.style.left = `${event.clientX - rect.left}px`;
  //         img.style.top = `${event.clientY - rect.top * 1.618}px`;
  //       }
  //     };
  //   }
  //   return () => { };
  // }, []);
  return (
    <>
      <>
        <nav
          id="navProjects"
          className="prose-sm grid grid-cols-2 gap-2 py-4 backdrop-blur-sm lg:grid-cols-2"
        >
          {repos.map(({ username, repo, tags, description, img, liveUrl }, idxRepos) => (
            <button
              key={`url-${username}-${repo}-${idxRepos}`}
              className={classNames("relative pt-2 px-4 after:hidden",
                "text-start",
                "transition-all delay-0 duration-500 ease-out ",
                "hover:bg-opacity-10 hover:shadow-white/10 hover:backdrop-brightness-[106%] prose-img:hover:opacity-40",
                "bg-gray1/30 shadow rounded",
                "cursor-crosshair",
                " dark:bg-on-primary/30 dark:shadow-gray7/60 dark:hover:backdrop-brightness-125",
              )}
            >
              <h3 className={`mt-0`}>{repo}</h3>
              <p className="">
                {repo === "hackernews-clone" ? "Coming soon..." : description}
              </p>
              <div className="grid grid-cols-5 items-baseline prose-a:after:hidden">
                {/* May need router as nested `a` elements aren't idiomatic. */}
                <div
                  className={`${repo === "hackernews-clone" ? "blur" : ""
                    } hover:z-20 z-20 hover:overflow-scroll col-span-4 pb-3 flex gap-x-2 text-[12px] truncate`}
                >
                  {tags.map((tag, index) => (
                    <div key={`tag-${repo}-${tag}-${index}`}>{tag}</div>
                  ))}
                </div>
                <div className="grid-flow-col col-start-5 grid gap-2 z-10">

                  <a title={`Source Code`} href={`https://github.com/${username}/${repo}/`}>
                    <FaGithub />
                  </a>
                  <a title={`Live Preview`} href={liveUrl}>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              {/* <img className="" src={`/img/projects/${img}`} /> */}
            </button>
          ))}
        </nav>
      </>

      <style jsx>{`
          nav {
            position: relative;
            // padding: clamp(1rem, 5vw, 6rem);
          }
          nav > button {
            position: relative;
          }
          nav > button > div {
            position: relative;
            z-index: 2/* ; */
            display: block;
            border-bottom: 1px solid transparent;
            border-top: 1px solid transparent;
          }
          nav > button:hover {
            // background: #111111;
          }
          nav > button > img {
            position: absolute;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
            transition: transform 250ms, opacity 250ms;
            pointer-events: none;
            width: 200px !important;
            --tw-grayscale: grayscale(30%);
            filter: var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
          }
          nav > button:hover > img {
            opacity: 0.95;
            transform: translate(-50%, -50%) scale(1);
          }
        `}</style>
    </>
  );
};

const PROJECTS = [
  {
    username: "lloydlobo",
    tags: ["development", "cli", "linux"],
    repo: "mausam",
    description: "A weather update desktop notifier made with Rust",
    img: "/mausam.jpg",
    liveUrl: "https://dictionary-web-app-vert.vercel.app/",
  },
  {
    username: "lloydlobo",
    tags: ["development", "Neural Network"],
    repo: "neura-driver",
    description: "A simple self-driving car application with a neural network",
    img: "/neura-driver.jpg",
    liveUrl: "https://dictionary-web-app-vert.vercel.app/",
  },
  {
    username: "lloydlobo",
    tags: ["development", "API"],
    repo: "geomeasure",
    description: "Geomeasure measures distance using GPS and that too without",
    img: "/geomeasure.jpg",
    liveUrl: "https://dictionary-web-app-vert.vercel.app/",
  },
  {
    username: "lloydlobo",
    tags: ["development", "python", "discord"],
    repo: "proxymate",
    description:
      "Generates phrases in the style of the author using Markov model",
    img: "/proxymate.jpg",
    liveUrl: "https://dictionary-web-app-vert.vercel.app/",
  },
  {
    username: "lloydlobo",
    tags: ["development", "discord", "python"],
    repo: "penny",
    description: "A no-nonsense budget tracking Discord bot",
    img: "/penny.jpg",
    liveUrl: "https://dictionary-web-app-vert.vercel.app/",
  },
  {
    username: "lloydlobo",
    tags: ["development", "CLI", "go"],
    repo: "okejoke",
    description: "okejoke gathers jokes on the fly in your CLI",
    img: "/okejoke.jpg",
    liveUrl: "https://dictionary-web-app-vert.vercel.app/",
  },
  {
    username: "lloydlobo",
    tags: ["development", "rust", "cli"],
    repo: "rssh",
    description: "rssh or Rust Shell allows keeping maintainable bash aliases",
    img: "/rssh.jpg",
    liveUrl: "https://dictionary-web-app-vert.vercel.app/",
  },
  {
    username: "lloydlobo",
    tags: ["development", "rust", "cli"],
    repo: "dictionary-web-app",
    description:
      "Integrate the Dictionary API to create a real-world dictionary web app.",
    img: "/penny.jpg",
    liveUrl: "https://dictionary-web-app-vert.vercel.app/",
  },
];

