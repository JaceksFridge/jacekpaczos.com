import React, { useState, useEffect } from 'react'

// Components
import Test from '../components/Test'
import CourseSection from '../components/CourseSection'
import Footer from '../components/Footer'

const About = () => {

  const [data, setData] = useState([])

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
        <div className="course-section">
            <CourseSection courses={data.courses}/>
        </div>
        <Footer />
    </div>
  )
}

export default About
