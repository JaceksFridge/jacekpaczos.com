import React from 'react'


import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Dailylog = () => {
  return (
    <div>
      <div className="hello">Hello Bastard</div>
      <Parallax pages={4}>

        <ParallaxLayer 
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url('https://hips.hearstapps.com/clv.h-cdn.co/assets/17/26/1600x1040/gallery-1498838810-gettyimages-461493851.jpg?resize=1200:*')`,
            backgroundSize: 'cover',
          }}
        >
          <h2>Parallax Babyyy</h2>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1} 
          speed={0.5}>
          <h2>Parallax Babyyy</h2>
        </ParallaxLayer>

      </Parallax>


    </div>
  )
}

export default Dailylog
