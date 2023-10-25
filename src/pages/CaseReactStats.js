


import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

import Navbar from "../components/Navbar"
import Button from "../components/Button"
import Footer from "../components/Footer"
import CaseTopDesktop from '../components/CaseTopDesktop';

import InfoBlock from '../components/Case/InfoBlock';
import ImageBlocks from '../components/Case/ImageBlocks';


const CaseReactStats = () => {

  const isDesktoporLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const [data, setData] = useState(null)
   
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data/CaseReactStats.json')
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
          {/* <div className="invisible-nav"></div> */}
          <div className="case-hero" id="img-reactstats">
            <img
              src="/assets/images/react-stats/casehero.webp" 
              alt="Moonlog Hero" 
              loading="lazy"
            />
            <img src="/assets/images/react-stats/casephone.png" alt="" className="alternative-img"/>
          </div>
          <div className="case-info">
            <h1 className="case-title">Visualize Projects</h1>
            <h3 className="case-subtitle">react stats is a python package</h3>
            <div className="hero-btn-container">
              <Button 
                className="btn-github"
                text="git"
                url="https://github.com/JaceksFridge/react-stats"
                img="/assets/icons/moonlog/github.svg"
                width="3rem"
              />
              <Button 
                className="btn-website"
                text="web"
                url="https://pypi.org/project/react-stats/"
                img="/assets/icons/moonlog/website.svg"
                width="3rem"
              />
            </div>
          </div>
          <InfoBlock info={data.synopsis}/>
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
                <div className="stats-container">
                  <div className="stat-box">
                    <div className="stat-value">403</div>
                    <div className="stat-title">Lines of Code</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-value">8</div>
                    <div className="stat-title">Packages used</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-value">20+</div>
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

export default CaseReactStats;




