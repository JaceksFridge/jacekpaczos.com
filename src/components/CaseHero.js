import React from 'react'
import '../styles/CaseHero.scss'

const CaseHero = ({ hero }) => {

    return (
        <div className="section">
            <div className="hero-top">
                <img src="" alt="" className="phone-1" />
                <img src="" alt="" className="phone-2" />
            </div>
            <div className="hero-bottom">
                <div className="header">
                    <h1>{hero.title}</h1>
                    <div className="underline"></div>
                </div>
                <div className="flex-header">
                    <div className="header-box">
                        <p>/Type</p>
                        <p>{hero.type}</p>
                    </div>
                    <div className="header-box">
                        <p>/Time</p>
                        <p>{hero.time}</p>
                    </div>
                    <div className="header-box">
                        <p>/role</p>
                        <p>{hero.role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseHero
