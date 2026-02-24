import React, { useRef } from 'react'
import './News.css'
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_2 from "../../assets/user-2.png"

const News = () => {

  const slider = useRef();
  const tx = useRef(0);   // 👈 FIX

  const slideForward = () => {
    if (tx.current > -50) {
      tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div className='news'>
      <img
        src={next_icon}
        alt=""
        className='next-btn'
        onClick={slideForward}   // 👈 FIX
      />

      <img
        src={back_icon}
        alt=""
        className='back-btn'
        onClick={slideBackward}  // 👈 FIX
      />

      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <h3>Manager</h3>
              </div>
              <p>nale moodaka so..veranda..TatA</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <h3>Manager</h3>
              </div>
              <p>12/2/26 moodaka so..veranda..TatA</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <h3>Manager</h3>
              </div>
              <p>ellam soil thatti poyi ...</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default News
