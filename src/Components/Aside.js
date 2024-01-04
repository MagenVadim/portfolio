import React from 'react'


function Aside() {
  return (
    <div className='aside'>
      <div className="logo">
        <a href="#"><span>A</span>tlas</a>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
            <li><a href="#" className="active"><i className="fa fa-home"></i>Home</a></li>
            <li><a href="#"><i className="fa fa-user"></i>About</a></li>
            <li><a href="#"><i className="fa fa-list"></i>Services</a></li>
            <li><a href="#"><i className="fa fa-briefcase"></i>Portfolio</a></li>
            <li><a href="#"><i className="fa fa-comments"></i>Contact</a></li>
        </ul>
    </div>
  )
}

export default Aside
