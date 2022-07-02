import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MetaHead from '../components/MetaHead';
import Navigation from '../components/Navigation';
import { getSortedPostsData } from '../lib/posts';
import { Post } from '../types/post';

const Blog: NextPage<{ allPostsData: Post[] }> = ({
  allPostsData,
}: {
  allPostsData: Post[];
}) => (
  <div className="blog__wrapper">
    <MetaHead
      title="Blogs | Samip Poudel"
      ogtitle="Blogs by Samip Poudel"
      description="I write and share about programming and my journey as a software engineer. I like to write about web development, UI/UX and a bit about life as I experience it."
      url="https://samip.vercel.app/blog"
    />
    <Navigation />
    <div className="py-8"></div>
    <section className="blog limit-width-lg">
      <h1 className="heading-lg text-left">Blog</h1>
      <p className="paragraph">
        I write about web development and share my experiences as a developer.
      </p>
      <div className="blog__blogs">
        {[...allPostsData]
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((post) => {
            if (post.isBlog) {
              return (
                <Link key={post.slug} href={'/blog/' + post.slug}>
                  <a>
                    <div className="blog__blog">
                      <div className="blog__details">
                        <p className="blog__details-date">
                          {post.publishedDate} . {post.readingTime}
                        </p>
                        <h3 className="blog__details-title">{post.title}</h3>
                      </div>
                      <img
                        className="blog__cover"
                        src={post.cover}
                        alt="coverPhoto"
                      />
                    </div>
                  </a>
                </Link>
              );
            } else {
              return null;
            }
          })}
      </div>
    </section>
    <div className="py-3"></div>
    <Contact />
    <Footer />
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;
