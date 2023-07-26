import React from 'react'

import { Link } from 'react-router-dom';

const ProjectsDesktop = ({ projects }) => {
  return (

    <div className="projects-desk">
        {projects.map((project, index) => (
            <div className="project-desk-sec">
                <div className="project-desk-text">
                    <h4 className="project-desk-title">{project.title}</h4>
                    <h3 className="project-desk-large">{project.text}</h3>
                    <Link to={`/${project.link}`} class="project-link">open</Link>
                </div>
                <div className="project-desk-image">

                </div>
            </div>
        ))}
    </div>
  )
}

export default ProjectsDesktop
