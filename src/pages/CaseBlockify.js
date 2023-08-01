import React from 'react'
import CaseTop from '../components/CaseTop'

const CaseBlockify = () => {

  const [data, setData] = useState([])
   
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data/About.json')
      const jsonData = await response.json()
      setData(jsonData)
    }
    fetchData()
  }, [])

  return (
    <CaseTop case={data} />
  )
}

export default CaseBlockify
