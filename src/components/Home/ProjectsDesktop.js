import React from 'react'

import CardDesktop from '../CardDesktop'
import SectionIntro from '../SectionIntro'
import Footer from '../../components/Footer'


import { Link } from 'react-router-dom';

const ProjectsDesktop = ({ projects, trainings }) => {


    console.log(trainings)
    let counter = 0
  return (

    <div className="projects-desk" id="projects-section">
        <div className="projects-desk-container">
            <div className="placeholder"></div>
            < SectionIntro 
                name="Coding"
                sectionClass="sectionIntro no-scroll-snap" 
            />

            {projects.map((project, index) => {
                const isSectionIntro = project.type === "section"

                if (!isSectionIntro) {
                    counter++
                }
                
                const className = counter % 2 === 0 ? "project-desk-sec" : "project-desk-sec odd"

                return isSectionIntro ? (
                    <SectionIntro name={"Design"} />
                ) : (
                    <div 
                        id={project.id}
                        className={className}
                        pages={projects.length}
                        key={index}
                    >
                        <div className="project-desk-text">
                             {/* <h4 className="project-desk-title">{project.title}</h4> */}
                            <h3 className="project-desk-large">{project.subtitle}</h3>
                            {/* <Link to={`/${project.link}`} className="project-link">
                                <h4 className="project-desk-link">{project.open}</h4>
                            </Link> */}
                        </div>
                        <div className="project-desk-image">
                            <Link to={`/${project.link}`} className="project-link">
                                <CardDesktop key={index} data={project}/>
                            </Link>
                        </div>
                    </div>
                )
            })}
            <Footer />
        </div>
    </div>
  )
}

export default ProjectsDesktop
