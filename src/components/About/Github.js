import React from 'react'
import Button from '../Button'

const Github = () => {
  return (
    <div className="github">
      <Button
        url="https://github.com/JaceksFridge"
        img="/assets/images/about/github.png"
      />
      <div className="section-content" data-aos="fade-up" >
        <h4 className="section-title">Github</h4>
        <p className="section-text">My relationship with coding started by accident.
          I never saw myself being in the tech sector and even less on the technical side of things.
          Randomly meeting a Data Scientist from big Tech changed thins though. He taught me the basics 
          of python and soon I fell victim to the realm of learnig and building. 
          Today it is my work. Although I am fairly new to the industry. I love building. You can check 
          out some small projects on my github.
        </p>
        <a href="https://github.com/JaceksFridge" target="_blank">
          <p className="section-link">github.com/JaceksFridge</p>
        </a>
      </div>
    </div>
  )
}

export default Github
