import React, { useEffect } from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface ProjectProps {
  title: string;
  description: string;
  github: string;
  index: number;
  link: string;
  image: string;
  stacks: string[];
}

const Project = ({
  title,
  description,
  github,
  index,
  image,
  link,
  stacks,
}: ProjectProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const image = entry.target.querySelector('.projects__image');
        if (entry.isIntersecting) {
          image?.classList.add('projects__image-animate');
        } else {
          // We're not intersecting, so remove the class!
          image?.classList.remove('projects__image-animate');
        }
      });
    });
    const projectEntries = document.querySelectorAll('.projects__project');
    projectEntries.forEach((entry) => {
      observer.observe(entry);
    });
  }, []);

  return (
    <div className="projects__project py-8">
      <div>
        <img
          className="projects__image"
          src={image}
          alt={`cover photo for project "${title}"`}
        />
      </div>
      <div className="projects__detail">
        <h3 className="projects__title">{title}</h3>
        <p className="projects__description">{`${description.substring(0, 50)}${
          description.length >= 50 ? '...' : ''
        }`}</p>
        <div className="projects__stacks">
          {stacks.map((stack, index) => (
            <div key={index} className="projects__stack">
              {stack}
            </div>
          ))}
        </div>
        <div className="projects__links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="projects__links-live"
            aria-label={`visit the live version of Samip Poudel's project named '${title}'`}
          >
            View Live
          </a>
          <a
            href={github}
            className="projects__links-more"
            aria-label={`learn more about Samip Poudel's project named '${title}'`}
          >
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
