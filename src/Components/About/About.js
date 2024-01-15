import React from 'react'
import Skill from "./Skill"
import InfoItem from "./InfoItem"
import Timeline from "./Timeline"
import styled from 'styled-components';
import {Btn, Span, Typing} from '../StylesComponent'

const Lines = styled.h2`
    font-size: 40px;
    color: #302e4d;
    font-weight: 700;
    position: relative;

&:before{
    content: '';
    height: 4px;
    width: 50px;
    background-color: ${(props)=> props.color};
    position: absolute;
    top: 100%;
    left:0;
}    
&:after{
    content: '';
    height: 4px;
    width: 25px;
    background-color: ${(props)=> props.color};
    position: absolute;
    top: 100%;
    left:0;
    margin-top: 8px;
}
`


function About({skin}) {
  return (
    <div className="main-content">
        <section className="about section">
            <div className="container">
                <div className="row">
                    <div className="section-title pad-15">
                        <Lines color={skin}>About Me</Lines>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content pad-15">
                        <div className="row">
                            <div className="about-text pad-15">
                                <h3>I'm <Span color={skin}>Vadym</Span> and <Typing color={skin}>Web Developer</Typing></h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

                        <div className="row">

                            <div className="personal-info pad-15">
                                <div className="row">
                                    <InfoItem key={'Birthday'} title={'Birthday'} info={1982}/>
                                    <InfoItem key={'Age'} title={'Age'} info={41}/>
                                    <InfoItem key={'Website'} title={'Website'} info={'www.domain.com'}/>
                                    <InfoItem key={'Email'} title={'Email'} info={'magernvadim@gmail.com'}/>
                                    <InfoItem key={'Degree'} title={'Degree'} info={'Computer Science'}/>
                                    <InfoItem key={'Phone'} title={'Phone'} info={'+972 52 9370346'}/>
                                    <InfoItem key={'City'} title={'City'} info={'Haifa (Israel)'}/>
                                    <InfoItem key={'Frilance'} title={'Frilance'} info={'Available'}/>
                                </div>
                                <div className="row">
                                    <div className="buttons pad-15">
                                        <Btn color={skin} href="#">Download CV</Btn>
                                        <Btn color={skin} href="#contact">Hire Me</Btn>
                                    </div>
                                </div>
                            </div>

                            <div className="skills pad-15">
                                <div className="row"> 
                                    <Skill color={skin} key={'JS'} skill={'JS'} percent={'86%'}/>
                                    <Skill color={skin} key={'React'} skill={'React'} percent={'66%'}/>
                                    <Skill color={skin} key={'HTML'} skill={'HTML'} percent={'96%'}/>
                                    <Skill color={skin} key={'BootStrap'} skill={'BootStrap'} percent={'76%'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">


                    <div className="education pad-15">
                        <h3 className="title">Education</h3>
                        <div className="row">
                            <div className="timeline-box pad-15">
                                <div className="timeline shadow-dark">
                                    <Timeline
                                        key={1}
                                        date={'2013-2015'}
                                        level={'Master in Computer Science'}
                                        descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                                        color={skin}
                                    />
                                    <Timeline
                                        key={2}
                                        date={'2018-2020'}
                                        level={'Master in Computer Science'}
                                        descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                                        color={skin}
                                    />
                                    <Timeline
                                        key={3}
                                        date={'2020-2021'}
                                        level={'Master in Computer Science'}
                                        descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                                        color={skin}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience pad-15">
                        <h3 className="title">Experience</h3>
                        <div className="row">
                            <div className="timeline-box pad-15">
                                <div className="timeline shadow-dark">
                                    <Timeline
                                        key={1}
                                        date={'2013-2015'}
                                        level={'Master in Computer Science'}
                                        descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                                        color={skin}
                                    />
                                    <Timeline
                                        key={2}
                                        date={'2018-2020'}
                                        level={'Master in Computer Science'}
                                        descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                                        color={skin}
                                    />
                                    <Timeline
                                        key={3}
                                        date={'2020-2021'}
                                        level={'Master in Computer Science'}
                                        descr={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                                        color={skin}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
      
        </section>
    </div>
    
  )
}

export default About
