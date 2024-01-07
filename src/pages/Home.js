

import React, { useState, useEffect } from 'react'
import HomeHero from '../components/Home/HomeHero'
import Projects from '../components/Home/Projects'
import ProjectsDesktop from '../components/Home/ProjectsDesktop'
import NewHome from '../components/Home/NewHome'
import Footer from '../components/Footer'


import { useMediaQuery } from 'react-responsive'


const Home = () => {

  const isDesktoporLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })


  const [data, setData] = useState({ projects: [], trainings: [] });



  const scrollToProjects = () => { 

    let scrollContainer
    const projectsElement = document.querySelector('#notsure')

    if (isDesktoporLaptop) {
      scrollContainer = document.querySelector('.projects-desk-container')
    } else {
      scrollContainer = document.querySelector('.projects-section')
    }
    
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
        scrollToProjects()
    }, 2000)
  }, [])
  

  const { projects, media } = data;


  return (
    <div className="home">
      <NewHome projects={projects} media={media} />
      {/* <HomeHero />
      { isDesktoporLaptop ? (
        <ProjectsDesktop projects={projects} media={media}/>
      ) : (
        <>
          <div className="placeholder"></div>
          <Projects projects={projects} media={media}/>
        </>
      )} */}
      <Footer />
    </div>
  )
}

export default Home



