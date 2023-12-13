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
import Video from './pages/Video';

// Components
import Navbar from './components/Navbar';


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
        <Route path="/caseblockify" element={ <CaseBlockify /> } />
        <Route path="/casemoonlog" element={ <CaseMoonlog /> } />
        <Route path="/casereactstats" element={ <CaseReactStats /> } />
        <Route path="/casenotsure" element={ <CaseNotSure /> } />
        <Route path="/caseux100" element={ <CaseUX100 /> } />
        <Route path="*" element={<Home />} /> {}
        <Route path="/cv" element={ <CV /> } />
        <Route path="/resume" element={ <Resume /> } />
        <Route path="/video/93u4092" element={ <Video /> } />
      </Routes>
    </Router>
  );
}

export default App;
