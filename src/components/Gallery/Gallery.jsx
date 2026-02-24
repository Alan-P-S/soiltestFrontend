import React from 'react'
import './Gallery.css'
import gallery_1 from'../../assets/pic.png'
import gallery_2 from'../../assets/proo.png'
import gallery_3 from'../../assets/pic2.png'
import w_arrow from'../../assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='camp'>
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={w_arrow} alt="" /></button>
    </div>
  )
}

export default Gallery