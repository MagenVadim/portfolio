import React from 'react'
import hero from '../images/hero2.jpg'

function Home() {
  return (
    <div className='main-content'>
        <section className="home section">
            <div className="container">
              <div className="row">
                <div className="home-info pad-15">
                  <h3 className="hello">Hello, my name is <span className="name">Vadym</span></h3>
                  <h3 className="my-profession">I'm a <span className="typing">web developer</span></h3>
                  <p>I'm a web Developer with extensive experience for over 10 years. My expertise is to create and website design, graphic design, and many more... </p>
                  <a href="#contact" className="btn hire-me">Hire Me</a>
                </div>
                <div className="home-img pad-15">
                  <img src={hero} alt="" />
                </div>
              </div>
            </div>
        </section>      
    </div>
  )
}

export default Home
