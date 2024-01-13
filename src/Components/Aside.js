import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Aside({skin}) {

  const navigate = useNavigate();

  const Logo = styled.a`
    &:before{
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-bottom: 5px solid ${skin};
      border-left: 5px solid ${skin};
      bottom: 0;
      left: 0;
    }
    &:after{
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-top: 5px solid ${skin};
      border-right: 5px solid ${skin};
      top: 0;
      right: 0;
    }
  `

  return (
    <div className="aside">
      <div className="logo">
        <Logo href="#"><span>M</span>agen</Logo>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
            <li><a href="#" className="active" onClick={()=>{navigate('/')}}><i className="fa fa-home"></i>Home</a></li>
            <li><a href="#" onClick={()=>{navigate('/about')}}><i className="fa fa-user"></i>About</a></li>
            <li><a href="#" onClick={()=>{navigate('/services')}}><i className="fa fa-list"></i>Services</a></li>
            <li><a href="#" onClick={()=>{navigate('/portfolio')}}><i className="fa fa-briefcase"></i>Portfolio</a></li>
            <li><a href="#" onClick={()=>{navigate('/contact')}}><i className="fa fa-comments"></i>Contact</a></li>
        </ul>
    </div>
  )
}

export default Aside
