import { NextPage } from 'next';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MetaHead from '../components/MetaHead';
import Navigation from '../components/Navigation';
import Project from '../components/Project';
import data from '../data/projects.json';

const Projects: NextPage = () => (
  <div>
    <MetaHead
      title="Projects | Samip Poudel"
      ogtitle="Projects made by Samip Poudel"
      description="These are some of the projects that I have built over the years. These project reflect my passion in software and design. My most used tools are Javascript, React, Node and MongoDB."
      url="https://samip.vercel.app/projects"
    />
    <Navigation />
    <div className="py-8"></div>

    <section className="projects limit-width-lg">
      <h2 className="heading-lg text-left">Projects</h2>
      <p className="paragraph mb-8">
        These are some of the projects that I have built over the years that
        reflect my passion in software and design.
      </p>

      {data.map((project, index) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          stacks={project.stacks}
          link={project.link}
          github={project.github}
          index={index}
        />
      ))}
    </section>

    <Contact />
    <Footer />
  </div>
);

export default Projects;
