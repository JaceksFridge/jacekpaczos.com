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

  const [facts, setFacts] = useState('courses')

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
        <Test logos={data.logos}/>
        <AboutMe />
        <Github />
        <Socials />
        <div className="new-switch">
          <h4 className="section-title">Facts</h4>
          <p className="facts-switch">Hop aboard the roller coaster of my 
            <span 
              className="switcher"
              onClick={() => setFacts('courses')}
            > Learnings,</span> test drive some of my trusty 
            <span 
              className="switcher"
              onClick={() => setFacts('skills')}
            > Skills,</span> and peek at the 
            <span 
              className="switcher"
              onClick={() => setFacts('books')}
            > Books</span> that sparked 'Eureka!' moments!
          </p>
        </div>
        <div className="facts-section">
          {facts === "courses" && <CourseSection courses={data.courses} />}
          {facts === "books" && <BooksSection books={data.books} />}
          {facts === "skills" && <SkillsSection skills={data.skills} />}
        </div>
        <Footer />
    </div>
  )
}

export default About
