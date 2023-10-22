
import React from 'react'

const InfoBlock = ({ info }) => {
  return (
        <div className="case-infoblock">
            <div className="infoblock-half-left">
                <h4 className="case-section-title">{info.title}</h4>
                <div className="section-line"></div>
            </div>
        <div className="infoblock-half-right">
        <p>
            {info.text.split('\n').map((str, index, array) => 
            index === array.length - 1 ? str : 
            <>
                {str} <br />
            </>
            )}
        </p>
        </div>
    </div>
  )
}

export default InfoBlock
