import React, { useState, useEffect } from 'react'

import BooksSection from '../components/About/BookSection'
import SkillsSection from '../components/About/SkillsSection'

// Components
import Test from '../components/Test'
import CourseSection from '../components/About/CourseSection'
import Footer from '../components/Footer'

const About = () => {

  const [data, setData] = useState([])

  const [facts, setFacts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data/About.json')
      const jsonData = await response.json()
      setData(jsonData)
    }

    fetchData()
  }, [])

  setFacts('books')
  console.log(facts)


  return (
    <div className="about">
        <Test logos={data.logos}/>
        <div className="section-switch">
          <div className="course-tab" onclick={() => setFacts('courses')}></div>
          <div className="books-tab" onclick={() => setFacts('books')}></div>
          <div className="skills-tab" onclick={() => setFacts('skills')}></div>
        </div>
        <div className="course-section">
            {facts === "courses" && <CourseSection courses={data.courses} />}
            {facts === "books" && <BooksSection books={data.books} />}
            {facts === "skills" && <SkillsSection skills={data.skills} />}
        </div>
        <Footer />
    </div>
  )
}

export default About
