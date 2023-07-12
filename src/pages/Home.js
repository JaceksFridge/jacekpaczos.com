import React, { useState, useEffect } from 'react'
import HomeHero from '../components/Home/HomeHero'
import Projects from '../components/Home/Projects'
import Trainings from '../components/Trainings'
import SectionIntro from '../components/SectionIntro.js'
import Footer from '../components/Footer'

import '../styles/HomeHero.scss'
import '../styles/Home.scss'

const Home = () => {

  const [data, setData] = useState({ projects: [], trainings: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/HomeData.json');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const { projects, trainings } = data;

  return (
    <div className="home">
      <HomeHero />
      <SectionIntro name={"Projects"}/>
      <Projects projects={projects}/>
      <SectionIntro name={"Trainings"}/>
      <Trainings trainings={trainings}/>
      <Footer />
    </div>
  )
}

export default Home
