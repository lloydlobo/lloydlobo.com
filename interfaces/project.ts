type ProjectType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  projectType: string;
  repository: string;
  live: string;
  stack?: string;
  content: string;
  isFeatured: boolean;
  showInProjects: boolean;
};

export default ProjectType;
