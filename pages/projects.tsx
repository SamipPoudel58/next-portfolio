import { NextPage } from 'next';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Project from '../components/Project';
import data from '../data/projects.json';

const Projects: NextPage = () => (
  <div>
    <Navigation />
    <div className="py-3"></div>

    <section className="projects limit-width-lg ">
      <h2 className="heading-lg text-left">Projects</h2>
      <p className="paragraph mb-2">
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
