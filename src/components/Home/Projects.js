
import React from 'react';
import Card from '../Card';
import BigCard from '../BigCard';
import SectionIntro from '../SectionIntro';

import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {


  return (
    <div className="projects" id="projects-section">
      <SectionIntro 
        name="Coding"
        sectionClass="sectionIntro"
      />
      {projects.map((project, index) => {
        
        const isSectionIntro = project.type == "section"

        return isSectionIntro ? (
          <SectionIntro 
            name="Design"
            sectionClass="sectionIntro"
          />
        ) : (
          <Link to={`/${project.link}`}>
            {/* <Card key={index} data={project} /> */}
            <BigCard 
              key={index} 
              data={project}
            />
          </Link>
        )
      })}
    </div>
  );
};

export default Projects;
