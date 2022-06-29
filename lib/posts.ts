import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import { Post } from '../types/post';
import mdxPrism from 'mdx-prism';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const { text } = readingTime(fileContents);

    // Combine the data with the id
    return {
      ...(matterResult.data as Post),
      id,
      readingTime: text,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ order: a }, { order: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const { text } = readingTime(fileContents);

  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm], //remarkGfm allows us to use tables and checkboxes like github
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['blog__anchor'] },
          },
        ],
        rehypeCodeTitles,
        mdxPrism,
      ],
    },
  });

  // Combine the data with the id and contentHtml
  return {
    id,
    readingTime: text,
    mdxSource,
    ...matterResult.data,
  };
}
