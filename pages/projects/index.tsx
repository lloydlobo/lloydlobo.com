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
        <article className="mx-auto">
          <div>
            <h1>What I've been working on</h1>
            <p>I have picked the projects which get me excited to work with.</p>

            <div className="mx-auto">
              {heroProject && (
                <HeroProject
                  title={heroProject.title}
                  date={heroProject.date}
                  slug={heroProject.slug}
                  excerpt={heroProject.excerpt}
                  coverImage={heroProject.coverImage}
                  projectType={heroProject.projectType}
                  repository={heroProject.repository}
                  live={heroProject.live}
                  ogImage={heroProject.ogImage.url}
                />
              )}
            </div>
          </div>
        </article>
      </section>

      <section>
        <article className="mx-auto">
          {moreProjects.length > 0 && <MoreProjects projects={moreProjects} />}
        </article>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "excerpt",
    "coverImage",
    "ogImage",
    "live",
    "repository",
    "projectType",
  ]);

  return {
    props: { allProjects },
  };
};

type HeroProjectProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  projectType: string;
  ogImage: string;
  repository: string;
  live: string;
  slug: string;
};
const HeroProject = ({
  title,
  date,
  excerpt,
  projectType,
  coverImage,
  repository,
  live,
  slug,
}: HeroProjectProps) => {
  console.log({
    title,
    coverImage,
    date,
    projectType,
    live,
    excerpt,
    repository,
    slug,
  });
  return (
    <div className="flex flex-col gap-0">
      <div className="">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="">
        <h2 className="mt-0">{title}</h2>
        <span className="sr-only">{date}</span>
        <p className="flex line-clamp-2">{excerpt}</p>
        <Link href={`projects/${slug}`}>View project</Link>
      </div>
    </div>
  );
};

type MoreProjectsProps = {
  projects: Project[];
};

const MoreProjects = ({ projects }: MoreProjectsProps) => {
  console.log(projects);
  return (
    <div className="mb-8 md:mb-16">
      <div className="project mx-auto grid grid-cols-2 gap-x-8">
        {projects.length > 0 ? (
          projects.map(
            ({ title, coverImage, slug, date, excerpt }, idxProject) => (
              <div
                key={`project-${title}-${idxProject}-${slug}`}
                className="grid p-4 shadow"
              >
                <div className="flex flex-col gap-0">
                  <div className="">
                    <CoverImage title={title} src={coverImage} slug={slug} />
                  </div>
                  <div className="">
                    <h2 className="mt-0">{title}</h2>
                    <span className="sr-only">{date}</span>
                    <p className="flex line-clamp-2">{excerpt}</p>
                    <Link href={`projects/${slug}`}>View project</Link>
                  </div>
                </div>
              </div>
            )
          )
        ) : (
          <span>no projects found</span>
        )}
      </div>
    </div>
  );
};

////////////////////////////////////////////////////////////////////////////////

export function CoverImage({
  title,
  src,
  slug,
}: {
  title: string;
  src: string;
  slug: string;
}) {
  console.log(src);
  return (
    <>
      <Link className="after:hidden" href={`/projects/${slug}`}>
        <img
          src={src}
          className={`aspect-video  w-fit object-cover object-top`}
          alt={title}
        />
      </Link>
    </>
  );
}
