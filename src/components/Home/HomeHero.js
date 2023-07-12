import React from 'react'

const HomeHero = () => {
  return (
    <div className="homehero">
      <div className="home-hero-top">
        <h3 data-aos="fade-up" data-aos-delay="2000">hi there, it’s jacek <br /><span data-aos="fade-in" data-aos-delay="3000">I'm a UX Designer</span></h3>
      </div>
      <div className="home-hero-center">
        <div className="box">
          <div className="cube" data-aos="fade-in" data-aos-delay="700"></div>
        </div>
      </div>
      <div className="home-hero-bottom">
        <h3>...I like to tinker around<br /><span>and create things from time to time</span></h3>
      </div>
    </div>
  )
}

export default HomeHero
