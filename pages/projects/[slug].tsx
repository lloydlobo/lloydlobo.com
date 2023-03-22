import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Layout from "@/components/Layout";
import ProjectType from "@/interfaces/project";
import { getAllProjects, getProjectBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";

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

  // const { slug } = router.query;

  // <PostTitle>Loading…</PostTitle>
  return (
    <Layout preview={preview} title={title}>
      {router.isFallback ? (
        <span>Loading…</span>
      ) : (
        <>
          <section>
            <article>
              {project.title}
              {project.excerpt}
              {project.date}
              {project.slug}
              {project.coverImage}
              {project.ogImage}
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
    "excerpt",
  ]);

  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
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
