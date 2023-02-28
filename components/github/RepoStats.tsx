import React from "react";

const repos = [
  { username: "lloydlobo", repo: "mausam" },
  { username: "lloydlobo", repo: "neura-driver" },
  { username: "lloydlobo", repo: "geomeasure" },
  { username: "lloydlobo", repo: "proxymate-bot" },
  { username: "lloydlobo", repo: "penny" },
  { username: "lloydlobo", repo: "okejoke" },
  { username: "lloydlobo", repo: "rssh" },
];

// In this implementation, we define an array of repo objects with the username and repo properties for each repo. We then map over this array and render a picture element for each repo. Inside the picture element, we define two source elements with the appropriate srcSet values for the dark and light themes, and an img element with the fallback image source. We also add an alt attribute to the img element to provide alternative text for screen readers.
const RepoStats = () => {
  return (
    <>
      {repos.map(({ username, repo }, index) => (
        <a href={`https://github.com/${username}/${repo}`}>
          <picture key={repo + index}>
            <source
              srcSet={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&show_icons=false&theme=dark&bg_color=00000000&hide_border=true&hide_title=true`}
              media="(prefers-color-scheme: dark)"
            />
            <source
              srcSet={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&show_icons=false&bg_color=00000000&hide_border=true&hide_title=true`}
              media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&show_icons=false&bg_color=00000000&hide_border=true&hide_title=true`}
              alt={`${username}/${repo}`}
            />
          </picture>
        </a>
      ))}
    </>
  );
};

export default RepoStats;
