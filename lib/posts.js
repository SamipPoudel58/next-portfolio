import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// import remark from 'remark';
// import html from 'remark-html';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import rehypePrism from '@mapbox/rehype-prism';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const { text } = readingTime(fileContents);

    // Combine the data with the id
    return {
      id,
      readingTime: text,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
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

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const { text } = readingTime(fileContents);

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .use(require('remark-prism'))
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: { rehypePlugins: [rehypePrism] },
  });

  // Combine the data with the id and contentHtml
  return {
    id,
    readingTime: text,
    // contentHtml,
    mdxSource,
    ...matterResult.data,
  };
}
