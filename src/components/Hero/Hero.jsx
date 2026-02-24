import React from 'react'
import'./Hero.css'
import d_arrow from '../../assets/dark-arrow.png'
export const Hero = () => {
  return (
     <div className='hero container'>
        <div className='hero-text'>
            <h1>Growing Together </h1>
            <p>Winter is comming</p>
            <button className='btn'> Explore more <img src={d_arrow} alt="" /></button>
            <div className="card bg-base-100 w-96 shadow-sm">
  
  
</div>
        </div>
    </div>
  )
}

