import React from 'react'
import { useNavigate } from 'react-router-dom';

function Aside() {

  const navigate = useNavigate();

  return (
    <div className='aside'>
      <div className="logo">
        <a href="#"><span>M</span>agen</a>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
            <li><a href="#" className="active" onClick={()=>{navigate('/')}}><i className="fa fa-home"></i>Home</a></li>
            <li><a href="#" onClick={()=>{navigate('/about')}}><i className="fa fa-user"></i>About</a></li>
            <li><a href="#" onClick={()=>{navigate('/services')}}><i className="fa fa-list"></i>Services</a></li>
            <li><a href="#"><i className="fa fa-briefcase"></i>Portfolio</a></li>
            <li><a href="#"><i className="fa fa-comments"></i>Contact</a></li>
        </ul>
    </div>
  )
}

export default Aside
