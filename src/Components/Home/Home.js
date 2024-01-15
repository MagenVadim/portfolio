import React from 'react'
import hero from '../../images/hero2.jpg'
import styled from 'styled-components';
import {Btn, Span, Typing} from '../StylesComponent'

const Frame = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  text-align: center;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;

&:before{
  content: '';
  position: absolute;
  height: 80px;
  width: 80px;
  border-top: 10px solid ${(props)=> props.color};
  border-left: 10px solid ${(props)=> props.color};
  left: 20px;
  top: -50px;
}
&:after{
  content: '';
  position: absolute;
  height: 80px;
  width: 80px;
  border-bottom: 10px solid ${(props)=> props.color};
  border-right: 10px solid ${(props)=> props.color};
  right: 20px;
  bottom: -40px;
}
& img{
  margin:auto;
  height: 400px;
  border-radius: 5px;
}
`


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
