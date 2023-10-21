
import React, { useState, useEffect } from 'react';
import CaseTop from '../components/CaseTop';
import CaseTopDesktop from '../components/CaseTopDesktop'
import { useMediaQuery } from 'react-responsive'

import Navbar from "../components/Navbar"


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
    </>
  )
}

export default CaseMoonlog;
