import React from 'react'
import Button from '../Button'

const Github = () => {
  return (
    <div className="github">
      <Button
        url="https://github.com/JaceksFridge"
        img="./assets/images/github.png"
      />
      <h4 className="section-title">Github</h4>
      <p className="section-text">What began as a curiosity to create 
        and build things evolved into a profession that I’m passionate 
        about. I’m proud to have worked with some of the leading 
        companies since 2014, designing digital products and services 
        that millions use in their daily lives, from planning their 
        public transport routes to sending parcels across the world.
      </p>
      <a href="https://github.com/JaceksFridge">
        <p className="section-link">github.com/JaceksFridge</p>
      </a>
    </div>
  )
}

export default Github
