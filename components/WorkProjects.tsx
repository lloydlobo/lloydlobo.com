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
  // {
  //   username: "lloydlobo",
  //   tags: ["development", "CLI", "go"],
  //   repo: "okejoke",
  //   description: "okejoke gathers jokes on the fly in your CLI",
  //   img: "/okejoke.jpg",
  // },
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
    repo: "hackernews-clone",
    description: "Coming soon...",
    img: "/mausam-fibo.jpg",
  },
];

export const WorkProjects = () => {
  const repos = PROJECTS;

  let hasBorders = false;
  let isCardLike = false;
  return (
    <>
      <section className="mx-auto my-12 grid w-fit grid-cols-1 bg-on-primary dark:text-secondary sm:gap-12 lg:grid-cols-2">
        {repos.map(({ username, repo, tags, description, img }, index) => (
          <a
            key={`url-${username}-${repo}`}
            href={`https://github.com/${username}/${repo}/`}
            className={` ${hasBorders ? "dark:border-accent  dark:sm:border  " : ""
              } ${isCardLike
                ? "bg-white shadow-md  hover:shadow-xl dark:bg-black/20 dark:shadow-lg dark:sm:border"
                : ""
              } flex py-6 transition duration-500 sm:rounded-xl sm:p-6 dark:hover:sm:shadow-accent/20 `}
          >
            <div className="mr-2 flex-initial flex-shrink-0 origin-right scale-[.90] justify-center grayscale-[03%] sm:mr-3">
              <img
                src={img}
                width="128"
                height="128"
                alt={`${repo} - ${description}`}
                className={`
            ${repo === "hackernews-clone" ? "blur" : ""}
                aspect-square scale-90 rounded-[2.2rem] object-cover brightness-[80%] saturate-150 sepia-[30%] sm:scale-100`}
              />
            </div>

            <div className="my-3 ml-4 flex-col justify-center sm:mt-[-1px] xl:flex">
              <h3
                className={`text-2xl font-extrabold uppercase tracking-tighter text-primary lg:text-5xl`}
              >
                {repo}
              </h3>

              <h4 className="max-w-[50vw] text-lg font-thin">
                {repo === "hackernews-clone" ? "Coming soon..." : description}
              </h4>

              <div
                className={` ${repo === "hackernews-clone" ? "blur" : ""
                  } mt-2 flex gap-2 text-[12px]
              `}
              >
                {tags.map((tag, index) => (
                  <div
                    key={`tag-${repo}-${tag}`}
                    className="rounded-full bg-on-primary/0 px-2 underline decoration-accent/40 underline-offset-8 "
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </section>
    </>
  );
};
