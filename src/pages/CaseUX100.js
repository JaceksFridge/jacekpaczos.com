

import React, { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { motion, useTransform, useScroll } from 'framer-motion'

import CaseTop from '../components/CaseTop'
import CaseTopDesktop from '../components/CaseTopDesktop'


const CaseNotSure = () => {

  const isDesktoporLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const [data, setData] = useState([])
  const [patterns, setPatterns] = useState([])
   
  // Case Data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data/CaseUX100.json')
      const jsonData = await response.json()
      setData(jsonData.hero)
    }
    fetchData()
  }, [])

  // Pattern Data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./data/CaseUX100Patterns.json')
      const jsonData = await res.json()
      setPatterns(jsonData)
    }
    fetchData()
  }, [])

  console.log("Pattens JSON")
  console.log(patterns)

  return (
    <>
      <div className="v-scroll">
        { isDesktoporLaptop ? (
          <CaseTopDesktop casestudy={data} />
        ) : (
          <CaseTop casestudy={data} />
        )}
      </div>
      <div className="big-container">
        <div className="down-container">
          <span>
            Scroll down
          </span>
        </div>
        <HorizontalScrollCarousel patterns={patterns}/>
        <div className="up-container">
          <span>
            Scroll Up
          </span>
        </div>
      </div>
    </>
  )
}

const HorizontalScrollCarousel = ({patterns}) => {

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"])

  return (
    <div className="o-section" ref={targetRef}>
      <div className="o-sticky">
        <motion.div style={{ x }} className="o-scroll">
          {patterns.map((pattern, i) => (
            <PlaceholderCard key={i} index={i} pattern={pattern} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}



const PlaceholderCard = ({ pattern, index }) => {
  return (
    <div className="o-scroll-card">
      <div className="o-scroll-card-top">
        <div>{index}</div>
        <div>{pattern.title}</div>
      </div>
    </div>
  )
}


export default CaseNotSure
