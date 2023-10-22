import React from 'react'
import Button from '../Button'

const AboutMe = () => {
  return (
    <div className="about-me" >
      <Button
        url="https://medium.com/@jacekpaczos"
        img="/assets/images/about/jacek.png"
      />
      <div className="section-content" data-aos="fade-up" >
        <h4 className="section-title">About Me</h4>
        <p className="section-text">Hi I'm Jacek :&#41;.  I’m an ambitious, self taught programmer, eager to understand both technology and the world, whilst having an enormous desire to learn. 
        I was born in Poland but raised in Germany. Throughout my teens I have explored a weird variety of things, from working as Barkeeper in Switzerland to having my own onlineshop at 16, I jumped around a lot

        </p>
        <a href="https://medium.com/@jacekpaczos" target="_blank">
          <p className="section-link">medium.com/@jacekpaczos</p>
        </a>
      </div>
    </div>
  )
}

export default AboutMe
