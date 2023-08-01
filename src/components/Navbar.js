import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const [menuOpen, setMenuOpen] = useState(false)


    const handleScroll = () => {

        const currentPosition = window.scrollY
        console.log(currentPosition)

        if (currentPosition > 10) {
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return (
            window.removeEventListener('scroll', handleScroll)
        )
    }, [])

    return(
        <header className="navbar" style={{ display: showNavbar ? 'block' : 'none' }}>
            <Link to="/" className="home-button navbutton">
                <div className="bottom-layer"></div>
                <div className="top-layer">
                    <div className="home-icon"></div>
                </div>
            </Link>
            <div className="menu-button navbutton" onClick={toggleMenu}>
                <div className="bottom-layer"></div>
                <div className="top-layer">
                    <p>Menu</p>
                </div>
            </div>
            <div className={`overlay-menu${menuOpen ? ' open' : ''}`}>
                <ul>
                <li>
                    <Link 
                        to="/home" 
                        onClick={toggleMenu} 
                        className="pageLink">
                        <h3>Work</h3>
                        <div className="underline"></div>
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={toggleMenu} className="pageLink">
                        <h3>About</h3>
                        <div className="underline"></div>
                    </Link>
                </li>
                </ul>
                <div className="close" onClick={toggleMenu}>
                    <Button  text={'X'}/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
