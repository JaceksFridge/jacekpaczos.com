

import React from 'react'
import BigCard from '../BigCard'
import DesktopCard from '../Home/DesktopCard'
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

const NewHome = ({ projects, links}) => {

    const isDesktoporLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })

    return (
        <div className="new-home">
            <div className="hero">
                <div className="hero-content">
                    <h2 className="name-thunder">Hi, I'm Jacek ⚡️</h2>
                    <h2 className="text">a guy with way to many ideas in his head. Now starting too make them into something more</h2>
                </div>
                <div className="scroll-down">
                    <a href="#main" id="hero-scroll">
                        <span></span><span></span><span></span>
                    </a>
                </div>
            </div>
            <main className="main" id="main">
                <div className="section-title">
                    <h3 className="title">projects</h3>
                    <div className="underline"></div>
                </div>
                { !isDesktoporLaptop ? (
                    <div className="content">
                    {projects.map((project, index) => {
                        return (
                            <div className="card-section">
                                <Link to={`/${project.link}`}>
                                    <BigCard 
                                        key={index}
                                        data={project}
                                    />
                                </Link>
                            </div>
                        )
                    })}
                </div>
                ) : (
                <div className="content-desktop">
                    {projects.map((project, index) => {
                    return (
                        <div className="card-section-desktop">
                            <Link to={`/${project.link}`}>
                                <DesktopCard 
                                    key={index} 
                                    data={project}
                                    index={index}
                                />
                            </Link>
                        </div>
                        )
                    })}
                    </div>
                )}

            </main>
        </div>
  )
}

export default NewHome
