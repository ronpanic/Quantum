import React, { useState, useEffect } from 'react';
import "./QuantumBenefits.css"

const QuantumBenefits = () => {
  

  return (
    <div className='benefits-container'>
      <div className='binfo-container'>
        <h2>Quantum Enterprise</h2>
        <p>Quantum Enterprise gives your teams the power to build, ship, and manage sites collaboratively at scale.</p>
        <button>Discover more</button>
      </div>
      <div className='benefits-card-container'>
              <div className='card'>
                <div className='card-info'> 
                  <ion-icon name="heart-outline"></ion-icon>
                  <h4>A scalable,  reliable platform</h4>
                  <p>Scale your traffic, content, and site performance to match your business — without worrying about reliability.</p>
                </div>
              </div>
              <div className='card'>
                <div className='card-info'> 
                  <ion-icon name="heart-outline"></ion-icon>
                  <h4>A scalable,  reliable platform</h4>
                  <p>Scale your traffic, content, and site performance to match your business — without worrying about reliability.</p>
                </div>
              </div>
              <div className='card'>
                <div className='card-info'> 
                  <ion-icon name="heart-outline"></ion-icon>
                  <h4>A scalable,  reliable platform</h4>
                  <p>Scale your traffic, content, and site performance to match your business — without worrying about reliability.</p>
                </div>
              </div>
              <div className='card'>
                <div className='card-info'> 
                  <ion-icon name="heart-outline"></ion-icon>
                  <h4>A scalable,  reliable platform</h4>
                  <p>Scale your traffic, content, and site performance to match your business — without worrying about reliability.</p>
                </div>
              </div>
      </div>  

      <div className='line-benefits'>

        <div className='vertical-line'></div>

        <div className='servers'>
          <img src="/public/image/sv.png" alt="" />
          <p>Scale your traffic, content, and site performance to match your business — without worrying about reliability.</p>
        </div>
      </div>

      <div className='public-video'>
        <video loop autoPlay muted playsInline width="640" height="360">
          <source src="/public/image/change.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  )
}

export default QuantumBenefits