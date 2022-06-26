import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { MDXRemote } from 'next-mdx-remote';
import Navigation from '../../components/Navigation';
import MetaHead from '../../components/MetaHead';

const components = {};

export default function Blog({ postData }) {
  return (
    <div className="blogTemplate__wrapper">
      <MetaHead
        title={postData.title}
        ogtitle={postData.title}
        description={postData.description}
        image={`https:${postData.cover}`}
        url={`https://www.samippoudel.com.np/blog/${postData.title}`}
        typeOfContent="article"
      />

      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
      <Navigation />
      <a href="#blogTemplate__cover">
        <div className="navigateUp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            />
          </svg>
        </div>
      </a>
      <div className="py-3"></div>
      <section className="blogTemplate limit-width-blog">
        <img
          id="blogTemplate__cover"
          className="blogTemplate__cover"
          src={postData.cover}
          alt="coverPhoto"
        />
        <h1 className="blogTemplate__title">{postData.title}</h1>
        <p className="blogTemplate__date">
          {postData.publishedDate} . {postData.readingTime}
        </p>

        <div className="blogTemplate__content">
          <MDXRemote {...postData.mdxSource} components={components} />
        </div>

        <hr className="blogTemplate__hr" />
        <a className="backToBlog-link" href="/blog">
          <span>&larr;</span> Back to the blog
        </a>
      </section>
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
