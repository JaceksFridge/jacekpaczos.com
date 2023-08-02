import React from 'react'
import { motion } from 'framer-motion'

const CaseTopDesktop = ({ casestudy }) => {

  return (
    <div className={`case-desk ${casestudy.title}`}>

        { casestudy.img ? (
            <motion.img 
                src={casestudy.img} 
                alt={casestudy.title} 
                className="case-desk-bg" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            />
        ) : (
            <motion.video 
                className="case-desk-image"
                src={casestudy.vid} 
                autoPlay 
                loop 
                muted 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            />
        )}
   
        <motion.div 
            className="case-desk-info"
            initial={{ 
                opacity: 0, 
                translateX: 50, 
            }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h1 className="case-desk-title" data-aos="fade-left">{casestudy.title}</h1>
            <div className="case-desk-boxes">
                <div className="case-desk-box" data-aos="fade-up" data-aos-delay="0">
                <h3 className="case-desk-box-key">/type</h3>
                <h5 className="case-desk-box-value">{casestudy.type}</h5>
                </div>
                <div className="case-desk-box" data-aos="fade-up" data-aos-delay="200">
                <h3 className="case-desk-box-key">/time</h3>
                <h5 className="case-desk-box-value">{casestudy.time}</h5>
                </div>
                <div className="case-desk-box" data-aos="fade-up" data-aos-delay="400">
                <h3 className="case-desk-box-key">/role</h3>
                <h6 className="case-desk-box-value">{casestudy.role}</h6>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default CaseTopDesktop
