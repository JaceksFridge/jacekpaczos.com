import React from 'react'
import Button from '../Button'

const AboutMe = () => {
  return (
    <div className="about-me">
      <Button
        url=""
        img="./assets/images/jacek.png"
      />
      <div className="section-content">
        <h4 className="section-title">About Me</h4>
        <p className="section-text">What began as a curiosity to create 
          and build things evolved into a profession that I’m passionate 
          about. I’m proud to have worked with some of the leading 
          companies since 2014, designing digital products and services 
          that millions use in their daily lives, from planning their 
          public transport routes to sending parcels across the world.
        </p>
        <a href="https://medium.com/@jacekpaczos">
          <p className="section-link">medium.com/@jacekpaczos</p>
        </a>
      </div>
    </div>
  )
}

export default AboutMe
