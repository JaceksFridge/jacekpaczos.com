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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/HomeData.json');
      const jsonData = await response.json();
      setData(jsonData);
    };
  
    const scrollDown = () => { 
      const top = window.innerHeight;
      window.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth',
      });
    }; // Added closing bracket
  
    fetchData();

    setTimeout(() => {
      scrollDown();
    }, 1500)
    // if (sessionStorage.getItem('beenBefore') !== 'true') {
    //   setTimeout(() => {
    //     scrollDown();
    //   }, 1500)

    //   sessionStorage.setItem('beenBefore', 'true')
    // }
  }, []);
  

  const { projects, trainings } = data;

  return (
    <div className="home">
      <HomeHero />
      <div className="placeholder"></div>
        <SectionIntro name={"Projects"} />
      { isDesktoporLaptop ? (
        <ProjectsDesktop projects={projects}/>
      ) : (
        <Projects projects={projects}/>
      )}

      <SectionIntro name={"Trainings"}/>
      { isDesktoporLaptop ? (
        <TrainingsDesktop trainings={trainings}/>
      ) : (
        <Trainings trainings={trainings}/>
      )}
      <Footer />
    </div>
  )
}

export default Home
