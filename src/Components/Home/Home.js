import React from 'react'
import hero from '../../images/hero2.jpg'
import {Frame, Btn, Span, Typing} from '../StylesComponent'

function Home({skin}) {
  return (
    <div className='main-content'>
        <section className="home section">
            <div className="container">
              <div className="row">
                <div className="home-info pad-15">
                  <h3 className="hello">Hello, my name is <Span color={skin}>Vadym</Span></h3>
                  <h3 className="my-profession">I'm a <Typing color={skin}>Web Developer</Typing></h3>
                  <p>I'm a web Developer with extensive experience for over 10 years. My expertise is to create and website design, graphic design, and many more... </p>
                   <Btn color={skin} href="#contact">Hire Me</Btn>
                </div>
                <Frame color={skin}>
                  <img src={hero} alt="" />
                </Frame>
              </div>
            </div>
        </section>      
    </div>
  )
}

export default Home
