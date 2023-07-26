import React from 'react';


const SectionHead = ({ sec }) => {


  return (
    <div
      className={`sectionhead ${sec}`}>
      <div className="iconcontainer"></div>
      <h3>The Book</h3>
    </div>
  ); 
};

export default SectionHead;
