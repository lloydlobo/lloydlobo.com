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

  console.log(moreProjects);

  // const { slug } = router.query;

  // <PostTitle>Loading…</PostTitle>
  return (
    <Layout preview={preview} title={title}>
      {router.isFallback ? (
        <span>Loading…</span>
      ) : (
        <>
          <section>
            <article className="mx-auto">
              <h1> {project.title} </h1>
              <img src={project.coverImage} alt={project.slug} />
            </article>
          </section>
          <section>
            <PostBody content={project.content} />
          </section>
          <section>
            <article className="mx-auto my-12">
              <hr />
              <div className="grid grid-flow-col-dense gap-x-8 overflow-y-hidden overflow-x-scroll">
                {moreProjects.length > 0 ? (
                  moreProjects.map(
                    (
                      { title, coverImage, slug, date, excerpt },
                      idxMoreProjects
                    ) => {
                      if (slug !== project.slug) {
                        return (
                          <div
                            key={`moreProjects-${title}-${idxMoreProjects}`}
                            className="prose-sm mt-0 grid rounded-xl px-4  py-2 shadow-xl backdrop-brightness-125"
                          >
                            <Link
                              className="m-0 after:hidden"
                              href={`projects/${slug}`}
                            >
                              <h2 className="mt-0">{title}</h2>
                              <p className="line-clamp-2">{excerpt}</p>
                            </Link>
                          </div>
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
        </>
      )}
    </Layout>
  );
}

type Params = {
  params: { slug: string };
};

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "ogImage",
    "coverImage",
    "live",
    "repository",
    "content",
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
