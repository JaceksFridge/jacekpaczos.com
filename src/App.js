// Styles
import './App.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Modules
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from './ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About';
import CaseUX100 from './pages/CaseUX100';
import CaseMoonlog from './pages/CaseMoonlog';
import CaseNotSure from './pages/CaseNotSure';
import CaseBlockify from './pages/CaseBlockify';
import CaseReactStats from './pages/CaseReactStats';

// Components
import Navbar from './components/Navbar';
import CaseTorScraper from './pages/CaseTorScraper';


function App() {


  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/case-moonlog" element={ <CaseMoonlog /> } />
        <Route path="/case-react-stats" element={ <CaseReactStats /> } />
        <Route path="/case-tor-scraper" element={ <CaseTorScraper /> } />
        <Route path="*" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
