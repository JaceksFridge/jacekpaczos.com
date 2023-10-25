import React, { useState, useEffect } from 'react'
import HomeHero from '../components/Home/HomeHero'
import Projects from '../components/Home/Projects'
import ProjectsDesktop from '../components/Home/ProjectsDesktop'

import { useMediaQuery } from 'react-responsive'


const Home = () => {

  const isDesktoporLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })


  const [data, setData] = useState({ projects: [], trainings: [] });


  const scrollToProjects = () => { 
    const projectsElement = document.querySelector('#notsure')
    const scrollContainer = document.querySelector('.projects-desk-container')
    if (projectsElement && scrollContainer) {
      const top = projectsElement.offsetTop
      scrollContainer.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth',
      })
    }
  }
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/HomeData.json');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();

    setTimeout(() => {
      scrollToProjects();
    }, 2000)
  }, []);
  

  const { projects, trainings } = data;


  return (
    <div className="home">
      <HomeHero />
      { isDesktoporLaptop ? (
        <ProjectsDesktop projects={projects} trainings={trainings}/>
      ) : (
        <>
          <div className="placeholder"></div>
          <Projects projects={projects} trainings={trainings}/>
        </>
      )}
    </div>
  )
}

export default Home
