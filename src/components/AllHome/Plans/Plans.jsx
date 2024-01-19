import React from 'react'
import "./Plans.css"

const Plans = () => {
  return (
    <div>
        <div className='plans'> 
            <button className='fixed-button'>
                <div className="button-content">
                    <img src="/public/image/image.webp" alt="" />
                    <span>See more plans</span>
                </div>
            </button>
        </div>
    </div>
  )
}

export default Plans