import React from 'react'
import hero from '../../images/hero2.jpg'
import {Frame, Btn, Span, Typing, Section} from '../StylesComponent'
import download_CV from "../../my_content/CV_2024.pdf"

function Home({skin, navToglerValue, lightDarkMode}) {
  return (
    <div className='main-content'>
        <Section navToglerValue={navToglerValue} lightDarkMode={lightDarkMode}>
            <div className="container">
              <div className="row">
                <div className="home-info pad-15">
                  <h3 className="hello">Hello, my name is <Span color={skin}>Vadym</Span></h3>
                  <h3 className="my-profession">I'm a <Typing color={skin}>Web Developer</Typing></h3>
                  <p>I'm a web Developer with extensive experience for over 10 years. My expertise is to create and website design, graphic design, and many more... </p>
                   <Btn color={skin} href={download_CV} download>Download CV</Btn>
                </div>
                <Frame color={skin}>
                  <img src={hero} alt="" />
                </Frame>
              </div>
            </div>
        </Section>      
    </div>
  )
}

export default Home
