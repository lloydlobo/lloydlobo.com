import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "@/components/Layout";
import ProjectType from "@/interfaces/project";
import { getAllProjects, getProjectBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/components/projects/PostBody";
import Link from "next/link";
import { CoverImage } from "@/pages/projects/index";

type Props = {
  project: ProjectType;
  moreProjects: ProjectType[];
  preview?: boolean;
};

export default function Project({ project, moreProjects, preview }: Props) {
  const router = useRouter();
  const title = `${project.title} | Selected Projects | Lloyd Lobo`;

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview} title={title}>
      {router.isFallback ? (
        <span>Loading…</span>
      ) : (
        <div className="">
          <section>
            <article className="mx-auto">
              <h1 className=""> {project.title} </h1>
              <p>{project.excerpt}</p>
              <div className="prose-sm grid grid-cols-3 gap-2 prose-h2:text-base prose-h2:leading-6 md:max-w-[45vw]">
                <div className="">
                  <h2>Type</h2>
                  <div>{project.projectType}</div>
                </div>
                <div className="">
                  <h2>Stack</h2>
                  <div>{project.stack}</div>
                </div>
                <div className="">
                  <h2>Live</h2>
                  <a href={project.live}>View project</a>
                </div>
              </div>
              <CoverImage
                title={project.title}
                src={project.coverImage}
                slug={project.slug}
              />
            </article>
          </section>
          <section className="mx-auto">
            <PostBody content={project.content} />
          </section>
          <section>
            <article className="mx-auto my-12">
              <hr />
              <h2>Other Projects</h2>
              <div className="grid grid-flow-col-dense gap-x-8 overflow-y-hidden overflow-x-scroll">
                {moreProjects.length > 0 ? (
                  moreProjects.map(
                    (
                      { title, coverImage, slug, date, excerpt },
                      idxMoreProjects
                    ) => {
                      if (slug !== project.slug) {
                        return (
                          <MoreProjectsCard
                            key={`moreProjects-${title}-${idxMoreProjects}`}
                            title={title}
                            coverImage={coverImage}
                            slug={slug}
                            excerpt={excerpt}
                          />
                        );
                      }
                    }
                  )
                ) : (
                  <div>No more projects found</div>
                )}
              </div>
            </article>
          </section>
        </div>
      )}
    </Layout>
  );
}

const MoreProjectsCard = ({ title, coverImage, slug, excerpt }) => {
  return (
    <div
      className="
      prose-sm mt-0 grid px-4 py-2  
      hover:rounded-xl hover:shadow-xl hover:backdrop-brightness-125
      "
    >
      <Link className="m-0 after:hidden" href={`${slug}`}>
        <CoverImage title={title} src={`${coverImage}`} slug={slug} />
        <h2 className="mt-0">{title}</h2>
        <p className="line-clamp-2">{excerpt}</p>
      </Link>
    </div>
  );
};

type Params = {
  params: { slug: string };
};

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "ogImage",
    "excerpt",
    "coverImage",
    "live",
    "repository",
    "content",
    "projectType",
    "stack",
  ]);

  const content = await markdownToHtml(project.content || "");
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
    "stack",
  ]);

  // return {
  //   props: { allProjects },
  // };

  return {
    props: {
      project: {
        ...project,
        content,
      },
      moreProjects: allProjects,
      // preview:{ project.preview}
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}
