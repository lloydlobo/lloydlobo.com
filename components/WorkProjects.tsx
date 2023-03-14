import React from "react";

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

  let hasBorders = false;
  let isCardLike = false;
  return (
    <>
      <>
        {repos.map(({ username, repo, tags, description, img }, index) => (
          <a
            key={`url-${username}-${repo}`}
            href={`https://github.com/${username}/${repo}/`}
            className="after:hidden hover:backdrop-brightness-125 hover:shadow-white/10 hover:bg-opacity-10 transition-all duration-500 delay-0 ease-out   dark:bg-on-primary/30 bg-gray1/30 shadow-gray7/60 px-4 p-2 pb-4 shadow rounded"
          >
            <h3 className={`mt-0`}>{repo}</h3>

            <div className="">
              {repo === "hackernews-clone" ? "Coming soon..." : description}
            </div>

            <div
              className={`hidden ${repo === "hackernews-clone" ? "blur" : ""
                } mt-2 flex gap-2 text-[12px]
              `}
            >
              {tags.map((tag, index) => (
                <div
                  key={`tag-${repo}-${tag}`}
                // className="rounded-full bg-on-primary/0 disabled:px-2 underline decoration-accent/40 underline-offset-8 "
                >
                  {tag}
                </div>
              ))}
            </div>
          </a>
        ))}
      </>
    </>
  );
};

/* <div className="mr-2  hidden flex-initial flex-shrink-0 origin-right scale-[.90] justify-center grayscale-[03%] sm:mr-3">
              <img
                src={img}
                width="128"
                height="128"
                alt={`${repo} - ${description}`}
                className={`
            ${repo === "hackernews-clone" ? "blur" : ""}
                aspect-square hidden scale-90 rounded-[2.2rem] object-cover disabled:brightness-[80%] saturate-150 sepia-[30%] sm:scale-100`}
              />
            </div> */
