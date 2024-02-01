
import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive'
import { useSpring, animated } from '@react-spring/web'
import { useInViewport } from 'react-in-viewport';

import Navbar from "../components/Navbar"
import Button from "../components/Button"
import Footer from "../components/Footer"

import InfoBlock from '../components/Case/InfoBlock';
import ImageBlocks from '../components/Case/ImageBlocks';



const CaseMoonlog = () => {

  const isDesktoporLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const [data, setData] = useState(null)
  const myRef = useRef();
  const options = {}; 
  let config = { disconnectOnLeave: false }; 
  const props = {};
  const {
    inViewport,
    enterCount,
    leaveCount,
  } = useInViewport(
    myRef,
    options,
    config = { disconnectOnLeave: false },
    props
  );



  const Number = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10}
    })
    return (
      <animated.div>
        {number.to((n) => n.toFixed(0))}
      </animated.div>
    )
  }
   
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data/CaseMoonlog.json')
      const jsonData = await response.json()
      setData(jsonData)
    }
    fetchData()
  }, [])

  return (
    <>
      { !data ? (
        <div>
          Loading...
        </div>
      ) : (
        <div className="casestudy">
          <div className="case-hero" id="img-moonlog">
            <img
              src="/assets/images/home/moon1.webp" 
              alt="Moonlog Hero" 
              loading="lazy"
            />
          </div>
          <div className="case-info">
            <h1 className="case-title">Gamifying Life</h1>
            <h3 className="case-subtitle">moonlog is a fullstack react app</h3>
            <div className="hero-btn-container">
              <Button 
                className="btn-github"
                text="git"
                url="https://github.com/JaceksFridge/react-stats"
                img="/assets/icons/moonlog/github5.svg"
                width="3rem"
              />
              <Button 
                className="btn-website"
                text="web"
                url="https://moonlog.xyz/"
                img="/assets/icons/moonlog/web5.svg"
                width="3rem"
              />
              <Button 
                className="btn-website"
                text="youtube"
                url="https://moonlog.xyz/"
                img="/assets/icons/moonlog/youtube6.svg"
                width="3rem"
              />
            </div>
          </div>
          <InfoBlock info={data.synopsis}/>
          <div className="case-imageblocks video-responsive">
            <iframe 
              class="iframe"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DvFbniFQLwI" 
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            >

            </iframe>
          </div>

          <ImageBlocks images={data.synopsis_images} />
          <InfoBlock info={data.blueprint}/>
          <ImageBlocks images={data.blueprint_images} />
          <InfoBlock info={data.alchemy} />
          <ImageBlocks images={data.alchemy_images} />
          
          <div className="case-infoblock">
            <div className="infoblock-half-left">
                <h4 className="case-section-title">Summing it up</h4>
                <div className="section-line"></div>
            </div>
            <div className="infoblock-half-right">
              <p>
                Here are some Statistics about the Project and me:
              </p>
              <div className="summing-it-up">
              <div className="stats-container" ref={myRef}>
                  <div className="stat-box">
                    <div className="stat-value">
                      <Number n={10023} />
                    </div>
                    <div className="stat-title">Lines of Code</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-value">
                      <Number n={14} />
                    </div>
                    <div className="stat-title">Packages used</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-value">
                      <Number n={180} />
                    </div>
                    <div className="stat-title">Hours spent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default CaseMoonlog;




