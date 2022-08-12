import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <div className='hero-section d-flex flex-column'>
        <div className='main-text'>
          <h1><b>Hotel/Resort for sale</b></h1>
          <p>Near Tanjung Setia International surving, 2 Km from Muhammad Taufiq Kieams Krui Airport</p>
        </div>
        <div className=' scroll-prompt d-flex flex-column justify-content-end'>
          <p className=' align-self-center'>Scroll down</p>
        </div>
    </div>
  )
}

export default Hero