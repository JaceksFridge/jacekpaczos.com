

import React, { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'

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
            Currentlty Building...
          </span>
        </div>
      </div>
    </>
  )
}

// Carouselup-container
const HorizontalScrollCarousel = ({ patterns }) => {

  const containerRef = useRef(null)
  const centerRef = useRef(null)
  const scrollingRef = useRef(null)
  const [delta, setDelta] = useState(0)
  const [selectedCard, setSelectedCard] = useState(null)


  const handleScroll = () => {
    if (containerRef.current && centerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const centerRect = centerRef.current.getBoundingClientRect()
      const scrollingRect = scrollingRef.current.getBoundingClientRect()

      let minDelta = 0
      let maxDelta = scrollingRect.width

      const containerStart = containerRect.left
      const centerStart = centerRect.left

      const change = Math.ceil((centerStart - (containerStart + scrollingRect.left)) + 0.5)
      const percentage = ((change - minDelta) / (maxDelta - minDelta)) * 100

      // selected Card
      const cardElements = Array.from(document.querySelectorAll('.o-scroll-card'))
      cardElements.forEach((card, index) => {
        if (intersectingWithCenter(card, centerRect)) {
          setSelectedCard(index)
        }
      }) 

      setDelta(percentage)
    }
  }

  const intersectingWithCenter = (element, centerRect) => {

    const cardRect = element.getBoundingClientRect()
    return cardRect.left < centerRect.left && centerRect.left < cardRect.right
  }

  useEffect(() => {
    if (containerRef.current && centerRef.current) {

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])



  const { scrollYProgress } = useScroll({ target: containerRef })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  const x = useTransform(scaleX, [0, 1], ["50%", "-50%"])

  patterns = patterns.slice(0, 10)


  return (
    <div className="o-section" ref={containerRef}>
      <div className="o-sticky">
        <div id="centerDiv">
          <div id="centerPoint" ref={centerRef}></div>
        </div>
        <motion.div style={{ x }} className="o-scroll" ref={scrollingRef}>
          {patterns.map((pattern, i) => (
            <PlaceholderCard key={i} index={i} pattern={pattern} percentage={delta} selected={selectedCard}/>
          ))}
        </motion.div>
      </div>
    </div>
  )
}




// Carousel Card
const PlaceholderCard = ({ pattern, index, percentage, selected }) => {

  const imgRef = useRef(null)
  const position = Math.ceil(percentage)

  useEffect(() => {

    if (imgRef.current) {
      imgRef.current.animate(
        { objectPosition: `${position}% center`}, 
        { duration: 1200, fill: "forwards" }
        );

      console.log(position)
    }
  }, [percentage])

  return (
    <div className={`o-scroll-card ${index === selected ? 'selected' : ''}`}>
      <img 
        ref={imgRef} 
        src={pattern.img} 
        alt={pattern.title} 
        className="pattern-image"
      />
      <div className="pattern-cover">
        <div>{index}</div>
        <div>{pattern.title}</div>
      </div>
    </div>
  )
}


export default CaseNotSure
