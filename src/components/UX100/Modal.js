import React from 'react'
import '../../styles/Modal.scss'

const Modal = ({ pattern }) => {

  return (
    <div 
        className="modal"
        style={{ background: `${pattern.seccolor}` }}
    >
        <div className="modalcontainer">
            <div className="modaldata">
                <img src={pattern.icon} alt={pattern.title} className="icon" />
                <h2 
                    className="title"
                    style={{ color:`${pattern.maincolor}` }}
                >{pattern.title}
                </h2>
                <p className="text">{pattern.text}
                </p>
                <div className="infoflex">
                    <div className="info">
                        <p className="minitile">use:</p>
                        <p className="minicontent">for product sections and testimonials</p>
                    </div>
                    <div className="info">
                        <p className="minititle">power:</p>
                        <p className="minicontent">{pattern.power}</p>
                    </div>
                </div>
            </div>
            <div className="modalbuttons">
                <button 
                    className="closemodal"
                    style={{ color:`${pattern.maincolor}`,
                            border: `1px solid ${pattern.maincolor}`}}
                    >cancel
                </button>
                <button 
                    className="moreinfo"
                    style={{ background:`${pattern.maincolor}`,
                             color: `${pattern.seccolor}` }}
                >more</button>
            </div>
        </div>
    </div>
  )
}


export default Modal