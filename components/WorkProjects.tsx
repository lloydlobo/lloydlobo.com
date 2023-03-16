import React, { useEffect } from "react";

const PROJECTS = [
  {
    username: "lloydlobo",
    tags: ["development", "cli", "linux"],
    repo: "mausam",
    description: "A weather update desktop notifier made with Rust",
    img: "/mausam.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "Neural Network"],
    repo: "neura-driver",
    description: "A simple self-driving car application with a neural network",
    img: "/neura-driver.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "API"],
    repo: "geomeasure",
    description: "Geomeasure measures distance using GPS and that too without",
    img: "/geomeasure.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "python", "discord"],
    repo: "proxymate",
    description:
      "Generates phrases in the style of the author using Markov model",
    img: "/proxymate.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "discord", "python"],
    repo: "penny",
    description: "A no-nonsense budget tracking Discord bot",
    img: "/penny.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "CLI", "go"],
    repo: "okejoke",
    description: "okejoke gathers jokes on the fly in your CLI",
    img: "/okejoke.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "rust", "cli"],
    repo: "rssh",
    description: "rssh or Rust Shell allows keeping maintainable bash aliases",
    img: "/rssh.jpg",
  },
  {
    username: "lloydlobo",
    tags: ["development", "rust", "cli"],
    repo: "dictionary-web-app",
    description:
      "Integrate the Dictionary API to create a real-world dictionary web app.",
    img: "/dictionary-web-app.jpg",
  },
];

export const WorkProjects = () => {
  const repos = PROJECTS;

  useEffect(() => {
    const navProjects = document.getElementById("navProjects");
    let links = navProjects.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      link.onmousemove = (event) => {
        const rect = link.getBoundingClientRect();
        const img = link.querySelector("img");
        img.style.left = `${event.clientX - rect.left}px`;
        img.style.top = `${event.clientY - (rect.top * 1.618)}px`;
      };
    }
    return () => { };
  }, []);

  let hasBorders = false;
  let isCardLike = false;
  return (
    <>
      <>
        <style jsx>{`
          nav {
            position: relative;
            // padding: clamp(1rem, 5vw, 6rem);
          }
          nav > a {
            position: relative;
          }
          nav > a > div {
            position: relative;
            z-index: 2/* ; */
            display: block;
            border-bottom: 1px solid transparent;
            border-top: 1px solid transparent;
          }

          nav > a:hover {
            // background: #111111;
          }

          nav > a > img {
            position: absolute;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
            transition: transform 250ms, opacity 250ms;
            pointer-events: none;
            width: 200px !important;
            --tw-grayscale: grayscale(30%);
            filter: var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
          }

          nav > a:hover > img {
            opacity: 0.95;
            transform: translate(-50%, -50%) scale(1);
          }

        `}</style>

        <nav
          id="navProjects"
          // className="grid backdrop-blur-sm prose-sm gap-2 py-4 grid-cols-2 lg:grid-cols-3"
          className="grid backdrop-blur-sm prose-sm gap-2 py-4 grid-cols-2 lg:grid-cols-2"
        >
          {repos.map(({ username, repo, tags, description, img }, index) => (
            <a
              key={`url-${username}-${repo}`}
              href={`https://github.com/${username}/${repo}/`}
              className="after:hidden relative prose-img:hover:opacity-40 hover:backdrop-brightness-[106%] dark:hover:backdrop-brightness-125 hover:shadow-white/10 hover:bg-opacity-10 transition-all duration-500 delay-0 ease-out  dark:bg-on-primary/30 bg-gray1/30 shadow dark:shadow-gray7/60 px-4 p-2 disabled:lg:pb-4 rounded"
            >
              <div>
                <h3 className={`mt-0`}>{repo}</h3>
                <p className="">
                  {repo === "hackernews-clone" ? "Coming soon..." : description}
                </p>
                <div
                  className={`hidden ${repo === "hackernews-clone" ? "blur" : ""
                    } mt-2 flex gap-2 text-[12px] `}
                >
                  {tags.map((tag, index) => (
                    <div key={`tag-${repo}-${tag}-${index}`}>{tag}</div>
                  ))}
                </div>
              </div>
              <img className="hidden" src={`/img/projects/${img}`} />
            </a>
          ))}
        </nav>
      </>
    </>
  );
};
