
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'

import Navbar from "../components/Navbar"
import Button from "../components/Button"
import Footer from "../components/Footer"
import CaseTopDesktop from '../components/CaseTopDesktop';

import InfoBlock from '../components/Case/InfoBlock';
import ImageBlocks from '../components/Case/ImageBlocks';


const CaseMoonlog = () => {

  const isDesktoporLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const [data, setData] = useState(null)
   
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
          {/* <div className="invisible-nav"></div> */}
          <div className="case-hero">
            <img
              src="/assets/images/moonlog/hero_branch.webp" 
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
                url="https://github.com/JaceksFridge"
                img="/assets/icons/moonlog/github.svg"
                width="3rem"
              />
              <Button 
                className="btn-website"
                text="web"
                url="https://jacekpaczos.com"
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
          <div className="summing-it-up">
            <InfoBlock info={data.sum} />
            <div className="stats-container">
              <div className="stat-box">
                <div className="stat-value">5.4K</div>
                <div className="stat-title">Lines Written</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">10%</div>
                <div className="stat-title">of accounts have</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">150+</div>
                <div className="stat-title">hours spent</div>
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




