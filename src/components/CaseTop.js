import React from 'react'

const CaseTop = ({ casestudy }) => {

    if (!casestudy) {
        return <div>Loading...</div>; // or return some loading indicator
    }

  return (
    <div className="case">
        <div className={`case-background ${casestudy.title}`}>
            { casestudy.img ? (
                <img src={casestudy.img} alt={casestudy.title} className="case-background-image" />
            ) : (
                <video 
                    src={casestudy.vid} 
                    autoPlay 
                    loop 
                    muted 
                    style={{width: "100%", height: "100%"}}
                />
            )}
            
        </div>
        <div className="case-info">
            <h1 className="case-title">{casestudy.title}</h1>
            <div className="case-boxes">
                <div className="case-box">
                <h3 className="case-box-key">/type</h3>
                <h5 className="case-box-value">{casestudy.type}</h5>
                </div>
                <div className="case-box">
                <h3 className="case-box-key">/time</h3>
                <h5 className="case-box-value">{casestudy.time}</h5>
                </div>
                <div className="case-box">
                <h3 className="case-box-key">/role</h3>
                <h6 className="case-box-value">{casestudy.role}</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CaseTop
