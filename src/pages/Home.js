import React, { useState, useEffect } from 'react'
import HomeHero from '../components/Home/HomeHero'
import Projects from '../components/Home/Projects'
import ProjectsDesktop from '../components/Home/ProjectsDesktop'
import Trainings from '../components/Home/Trainings'
import TrainingsDesktop from '../components/Home/TrainingsDesktop'
import SectionIntro from '../components/SectionIntro.js'
import Footer from '../components/Footer'

import { useMediaQuery } from 'react-responsive'


const Home = () => {

  const isDesktoporLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })


  const [data, setData] = useState({ projects: [], trainings: [] });


  const scrollToProjects = () => { 
    const projectsElement = document.querySelector('#projects-section');
    if (projectsElement) {
      const top = projectsElement.offsetTop;
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth',
      });
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
      <div className="placeholder"></div>
        <SectionIntro name={"Projects"} />
      { isDesktoporLaptop ? (
        <ProjectsDesktop projects={projects} trainings={trainings}/>
      ) : (
        <Projects projects={projects} trainings={trainings}/>
      )}

      {/* <SectionIntro name={"Trainings"}/> */}
      <Footer />
    </div>
  )
}

export default Home
