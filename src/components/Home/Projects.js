
import React from 'react';
import Card from '../Card';

// import styling files
import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
  return (
    <div className="projects" id="projects-section">
      {projects.map((project, index) => (
        <Link to={`/${project.link}`}>
          <Card key={index} data={project} />
        </Link>
      ))}
    </div>
  );
};

export default Projects;
