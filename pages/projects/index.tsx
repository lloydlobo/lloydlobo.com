import Layout from "@/components/Layout";
import { getAllProjects } from "@/lib/api";
import React from "react";
import Project from "@/interfaces/project";
import Link from "next/link";

type Props = {
  allProjects: Project[];
};

export default function ProjectsPage({ allProjects }: Props) {
  const heroProject = allProjects[0];
  const moreProjects = allProjects.slice(1);

  return (
    <Layout title="Projects">
      <section>
        <h1>Selected Projects</h1>

        {heroProject && (
          <HeroProject
            title={heroProject.title}
            date={heroProject.date}
            slug={heroProject.slug}
            excerpt={heroProject.excerpt}
          />
        )}
      </section>

      <section>
        {moreProjects.length > 0 && <MoreProjects projects={moreProjects} />}
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects(["title", "date", "slug", "excerpt"]);

  return {
    props: { allProjects },
  };
};

type HeroProjectProps = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};
const HeroProject = ({ title, date, excerpt, slug }: HeroProjectProps) => {
  console.log(title, date, excerpt, slug);
  return <>
    <div className="grid p-4 shadow">
      <ul>
        <li>{title}</li>
        <li>{date}</li>
        <li>{excerpt}</li>
        <li><Link href={`projects/${slug}`}>Live</Link></li>
      </ul>
    </div>
  </>;
};

type MoreProjectsProps = {
  projects: Project[];
};

const MoreProjects = ({ projects }: MoreProjectsProps) => {
  console.log(projects);
  return <>
    <div className="grid md:grid-cols-2 ">
      <div className="card">
        {projects.length > 0 ? projects.map((project, idxProject) => (
          <div key={`project-${project}-${idxProject}`} className="grid p-4 shadow">
            <ul>
              <li>{project.title}</li>
              <li>{project.date}</li>
              <li>{project.excerpt}</li>
              <li><Link href={`projects/${project.slug}`}>Live</Link></li>
            </ul>
          </div>

        )
        ) :

          <span>no projects found</span>
        }
      </div>
    </div>
  </>;
};
