import React from 'react'

import CardDesktop from '../CardDesktop'
import SectionIntro from '../SectionIntro'
import Trainings from './Trainings'
import TrainingsDesktop from './TrainingsDesktop'


import { Link } from 'react-router-dom';

const ProjectsDesktop = ({ projects, trainings }) => {


    console.log(trainings)
  return (

    <div className="projects-desk" id="projects-section">
        <div className="projects-desk-container">
            {projects.map((project, index) => (
                <div 
                    className="project-desk-sec"
                    pages={projects.length}
                    key={index}
                >
                    <div
                        className="project-desk-text"
                    >
                        <h4 className="project-desk-title">{project.title}</h4>
                        <h3 className="project-desk-large">{project.text}</h3>
                        <Link to={`/${project.link}`} className="project-link">
                            <h4 className="project-desk-link">{project.open}</h4>
                        </Link>
                    </div>
                    <div 
                        className="project-desk-image"
                    >
                        <Link to={`/${project.link}`} className="project-link">
                            <CardDesktop key={index} data={project}/>
                        </Link>
                    </div>
                </div>
            ))}
            <SectionIntro name={"Trainings"}/>
            {trainings.map((training, index) => (
                <div className="training-desk-sec" key={index}>
                    <div className="training-desk-text">
                        <h4 className="training-desk-title">{training.title}</h4>
                        <h3 className="training-desk-large">{training.text}</h3>
                        <Link to={`/${training.link}`} class="training-link">
                            <h4 className="training-desk-link">{training.open}</h4>
                        </Link>
                    </div>
                    <div className="training-desk-image">
                        <Link to={`/${training.link}`} >
                            <CardDesktop key={index} data={training} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsDesktop
