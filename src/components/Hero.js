import React, {useState} from 'react'
import './Hero.css'


function Hero() {
  const desc = 'Near Tanjung Setia International surving, 2 Km from Muhammad Taufiq Kieams Krui Airport'
  return (
    <div className='hero-section d-flex flex-column'>
        <div className='main-text'>
          <h1><b>Hotel/Resort for sale</b></h1>
          <meta name='description'
            content={desc}/>
          <p>{desc}</p>
        </div>
        <div className=' scroll-prompt d-flex flex-column justify-content-end'>
          <p className=' align-self-center'>Scroll down</p>
        </div>
    </div>
  )
}

export default Hero