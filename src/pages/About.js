import React, { useState, useEffect } from 'react'

import Test from '../components/Test'
import AboutMe from '../components/About/AboutMe'
import Github from '../components/About/Github'
import Socials from '../components/About/Socials'
import CourseSection from '../components/About/CourseSection'
import BooksSection from '../components/About/BookSection'
import SkillsSection from '../components/About/SkillsSection'
import Footer from '../components/Footer'



const About = () => {

  const [data, setData] = useState([])

  const [facts, setFacts] = useState('skills')
 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data/About.json')
      const jsonData = await response.json()
      setData(jsonData)
    }

    fetchData()
  }, [])

 

  return (
    <div className="about">
      <Test logos={data.logos} />
      <AboutMe />
      <Github />
      <Socials />
      <div className="new-switch">
        <h4 className="section-title" data-aos="fade-up" >Facts</h4>
        <p className="facts-switch" data-aos="fade-up" >Hop aboard the roller coaster of my&nbsp;
          <span 
            className={`switcher ${facts === "courses" ? "active" : "" }`}
            onClick={() => setFacts('courses')}
          >Learnings,</span> test drive some of my trusty&nbsp;
          <span 
            className={`switcher ${facts === "skills" ? "active" : "" }`}
            onClick={() => setFacts('skills')}
          >Skills,</span> and peek at the&nbsp;
          <span 
            className={`switcher ${facts === "books" ? "active" : "" }`}
            onClick={() => setFacts('books')}
          >Books</span> that sparked 'Eureka!' moments! 
        </p>
      </div>
      <div className="facts-section" data-aos="fade-up" >
        {data && data.courses && facts === "courses" && <CourseSection courses={data.courses} />}
        {data && data.books && facts === "books" && <BooksSection books={data.books} />}
        {data && data.skills && facts === "skills" && <SkillsSection skills={data.skills} />}
      </div>
      <Footer />
    </div>
  )
}

export default About
