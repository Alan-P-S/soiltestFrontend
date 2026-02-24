import React from 'react'
import './Programms.css'
import { useNavigate } from "react-router-dom";
import program_1 from '../../assets/officer.png'
import program_2 from '../../assets/tester.png'
import program_3 from '../../assets/farmu.png'
import program_icon1 from '../../assets/admin_1.png'
import program_icon2 from '../../assets/admin_2.png'
import program_icon3 from '../../assets/admin_3.png'
const Programms = () => {
    const navigate = useNavigate();
  return (
    <div className= 'Programms' >
    <div className='Programs' onClick={() => navigate("/login/admin")}>
        <img src={program_1} alt="" />
        <div className='caption'>
            <img src={program_icon1} alt="" />
            <p>Admin</p>
        </div>
    </div>
     
    <div className='Programs' onClick={() => navigate("/login/lab")}>
        <img src={program_2} alt="" />
         <div className='caption'>
            <img src={program_icon2} alt="" />
            <p>Lab_Technician</p>
          </div>
    </div>
    
    
     <div className='Programs' onClick={() => navigate("/login/farmer")}>
        <img src={program_3} alt="" />
            <div className='caption'>
            <img src={program_icon3} alt="" />
            <p>Farmer</p>
        </div>
    </div>

    </div>
  )
}

export default Programms