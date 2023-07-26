import React, { useState, useEffect } from 'react';

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
              <img src={item.url} alt={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
