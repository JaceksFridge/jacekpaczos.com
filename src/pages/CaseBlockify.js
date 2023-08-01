import React, { useState, useEffect } from 'react'
import CaseTop from '../components/CaseTop'

const CaseBlockify = () => {

  const [data, setData] = useState([])
   
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data/CaseBlockify.json')
      const jsonData = await response.json()
      setData(jsonData.hero)
    }
    fetchData()
  }, [])

  return (
    <CaseTop casestudy={data} />
  )
}

export default CaseBlockify
