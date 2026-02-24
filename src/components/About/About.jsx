import React from 'react'
import './About.css'
import about_img from '../../assets/collect.png'
import play_img from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
         <img src={play_img} alt="" className='play-img'/></div>
         <div className='about-right'>
            <h3>About mobile soil testing lab</h3>
            <h2>if you think about us we will there </h2>
            <p>onnulla chumma nthelum idam</p>
         </div>
    </div>
  )
}

export default About