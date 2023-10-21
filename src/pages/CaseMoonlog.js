
import React, { useState, useEffect } from 'react';
import CaseTop from '../components/CaseTop';
import CaseTopDesktop from '../components/CaseTopDesktop'
import { useMediaQuery } from 'react-responsive'

import Navbar from "../components/Navbar"
import Button from "../components/Button"


const CaseMoonlog = () => {

  // const isDesktoporLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })

  // const [data, setData] = useState([])
   
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('./data/CaseMoonlog.json')
  //     const jsonData = await response.json()
  //     setData(jsonData.hero)
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      {/* { isDesktoporLaptop ? (
        <CaseTopDesktop casestudy={data} />
      ) : (
        <CaseTop casestudy={data} />
      )} */}
      <Navbar />
      <div className="case-hero">
        <img
          src="/assets/images/moonlog/moonlog_hero.webp" 
          alt="Moonlog Hero" 
          loading="lazy"
        />
      </div>
      <div className="case-info">
        <h1 className="case-title">Gamifying Life</h1>
        <h2 className="case-subtitle">moonlog is a fullstack react app</h2>
        <div className="hero-btn-container">
          <Button 
            className="btn-github"
            text="git"
            url="https://github.com/JaceksFridge"
            // img="/assets/icons/Moonlog/github.svg"
            width="3rem"
          />
          <Button 
            className="btn-website"
            text="web"
            url="https://jacekpaczos.com"
            // img="./assets/icons/Moonlog/website.svg"
            width="3rem"
          />
        </div>
      </div>
      <div className="case-infoblock">
        
      </div>
    </>
  )
}

export default CaseMoonlog;
