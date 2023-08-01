import React from 'react'
import CardDesktop from '../CardDesktop'

import { Link } from 'react-router-dom';

const ProjectsDesktop = ({ projects }) => {
  return (

    <div className="projects-desk">
        <div className="projects-desk-container">
            {projects.map((project, index) => (
                <div 
                    className="project-desk-sec"
                    pages={projects.length}
                    key={index}
                >
                    <div
                        className="project-desk-text"
                        // offset={index}
                        // speed={2.5}
                    >
                        <h4 className="project-desk-title">{project.title}</h4>
                        <h3 className="project-desk-large">{project.text}</h3>
                        <Link to={`/${project.link}`} className="project-link">
                            <h4 className="project-desk-link">{project.open}</h4>
                        </Link>
                    </div>
                    <div 
                        // offset={index} 
                        // speed={2.5}
                        className="project-desk-image"
                    >
                        <Link to={`/${project.link}`} className="project-link">
                            <CardDesktop key={index} data={project}/>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsDesktop
