import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

const Test = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/About.json');
      const data = await response.json();
      setLogos([...data.logos, ...data.logos]);
    };
  
    fetchData();
  }, []);  

  return (
    <div className="test">
      <div className="upper-bg"></div>
      <div className="lower-bg">
        <div className="carousel">
          {logos.map((item, index) => (
              <motion.img 
                src={item.url} 
                alt={item.id} 
                key={index}
                initial={{ 
                    opacity: 0, 
                    translateX: -50, 
                    // translateY: index % 2 ? -50 : 50
                    translateY: -50
                }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
