import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import MetaHead from '../components/MetaHead';
import Project from '../components/Project';
import Skills from '../components/Skills';
import projectsData from '../data/projects.json';
import { getSortedPostsData } from '../lib/posts';
import { Post } from '../types/post';

const Home: NextPage<{ allPostsData: Post[] }> = ({
  allPostsData,
}: {
  allPostsData: Post[];
}) => {
  return (
    <div>
      <MetaHead />

      <Intro />

      <section className="projects limit-width-lg">
        <h2 className="text-left heading-lg">Projects</h2>
        <p className="paragraph mb-3">
          These are some of the projects that I have built over the years that
          reflect my passion in software and design.
        </p>
        {projectsData.map((project, index) => {
          if (index >= 3) return null;
          return (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              stacks={project.stacks}
              link={project.link}
              index={index}
              github={project.github}
            />
          );
        })}
        <div className="projects__allProjects">
          <Link href="/projects" aria-label="see more projects by Samip Poudel">
            <a>
              <span>More Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
      </section>

      <section className="blog limit-width-lg">
        <h2 className="heading-lg text-left">Articles</h2>
        <p className="paragraph">
          I write about web development and share my experiences as a developer.
        </p>
        <div className="blog__blogs">
          {[...allPostsData]
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((edge: Post, index: number) => {
              if (edge.isBlog && index < 2) {
                return (
                  <Link
                    key={index}
                    href={`/blog/${edge.slug}`}
                    // href={`/blog/${edge.id}`}
                    aria-label={`read article by Samip Poudel on the topic '${edge.title}'`}
                  >
                    <a>
                      <div className="blog__blog">
                        <div className="blog__details">
                          <p className="blog__details-date">
                            {edge.publishedDate} . {edge.readingTime}
                          </p>
                          <h3 className="blog__details-title">{edge.title}</h3>
                        </div>
                        <img
                          className="blog__cover"
                          src={edge.cover}
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
        <div className="projects__allProjects">
          <Link aria-label="see more articles by Samip Poudel" href="/blog">
            <a>
              <span>More Articles</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                ></path>
              </svg>
            </a>
          </Link>
        </div>
        <div className="py-3"></div>
        <div className="py-2"></div>
      </section>

      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
