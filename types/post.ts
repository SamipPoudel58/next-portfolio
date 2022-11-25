export type Post = {
  title: string;
  slug: string;
  order: number;
  isBlog: boolean;
  description: string;
  cover: string;
  publishedDate: string;
  readingTime: string;
  colors: string[];
  mdxSource: { compiledSource: string };
};
