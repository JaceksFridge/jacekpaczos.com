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
import CaseDailylog from './pages/CaseDailylog';
import CaseBlockify from './pages/CaseBlockify';

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
        <Route path="/casedailylog" element={ <CaseDailylog /> } />
        <Route path="/caseux100" element={ <CaseUX100 /> } />
        <Route path="*" element={<Home />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
