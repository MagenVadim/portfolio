import React from 'react'
import Skill from "./Skill"
import InfoItem from "./InfoItem"
import Timeline from "./Timeline"
import {Btn, Span, Typing, Lines, Section} from '../StylesComponent'
import {useNavigate} from 'react-router-dom'


function About({skin, navToglerValue, lightDarkMode, setAsideItems}) {
    const navigate = useNavigate()

    const newAsideItemsCollection = ()=>{
        const newAtimeCollection = [
            {id:"Home", status:false},
            {id:"About", status:false},
            {id:"Services", status:false},
            {id:"Portfolio", status:false},
            {id:"Contact", status:true}
        ]
        setAsideItems(newAtimeCollection)
    }
    const clickHireMe = ()=>{
        {navigate('/contact')};
        newAsideItemsCollection();
    }


  return (
    <div className="main-content">

        <Section navToglerValue={navToglerValue} lightDarkMode={lightDarkMode}>
            <div className="container">
                <div className="row">
                    <div className="section-title pad-15">
                        <Lines color={skin} lightDarkMode={lightDarkMode}>About Me</Lines>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content pad-15">
                        <div className="row">
                            <div className="about-text pad-15">
                                <h3>I'm <Span color={skin} lightDarkMode={lightDarkMode}>Vadym</Span> and <Typing color={skin}>Web Developer</Typing></h3>

                                <p className='about-deascription'>I am experienced Front-End Developer with experience building websites and web apps from scratch.
                                    I primarily focus on writing clean, elegant, and efficient code.
                                    I am proficient in HTML, CSS, JavaScript, Bootstrap and React. 
                                    <br />Building responsive and user-friendly websites and apps
                                    I also review existing code and can consult with you on how to improve it.
                                </p>
                                <p className="about-deascription">
                                    Extremely passionate towards software architecture and design combined with sensitivity to serve the needs of the business balanced with the delivery of high quality solutions.
                                    I deal with with servers as well.
                                </p>
                            </div>
                        </div>

                        <div className="row">

                            <div className="personal-info pad-15">
                                <div className="row">

                                    <InfoItem key={'Website'} title={'Website'} info={'www.domain.com'}/>
                                    <InfoItem key={'Email'} title={'Email'} info={'magernvadim@gmail.com'}/>
                                    <InfoItem key={'Degree'} title={'Degree'} info={'Computer Science'}/>
                                    <InfoItem key={'Phone'} title={'Phone'} info={'+972 52 9370346'}/>
                                    <InfoItem key={'City'} title={'City'} info={'Haifa (Israel)'}/>
                                    <InfoItem key={'Frilance'} title={'Frilance'} info={'Available'}/>
                                </div>
                                <div className="row">
                                    <div className="buttons pad-15">
                                        <Btn color={skin} href="#contact" onClick={clickHireMe}>Hire Me</Btn>
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
                                        date={'2022-2023'}
                                        level={'The Front-End Web Developer Bootcamp'}
                                        descr={'online Udemy course'}
                                        color={skin}
                                    />
                                    <Timeline
                                        key={2}
                                        date={'2020-2021'}
                                        level={'course QA Automation'}
                                        descr={'Tel-Aviv (Israel)'}
                                        color={skin}
                                    />
                                    <Timeline
                                        key={3}
                                        date={'2022-2023'}
                                        level={'The Front-End Web Developer Bootcamp'}
                                        descr={'online Udemy course'}
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
                                        date={'2023-currently'}
                                        level={'Frontend Developer'}
                                        descr={'Upwork (freelance)'}
                                        color={skin}
                                    />
                                    <Timeline
                                        key={2}
                                        date={'2022-2023'}
                                        level={'QA Automation Engineer'}
                                        descr={"Seraphic Security (Israel)"}
                                        color={skin}
                                    />
                                    <Timeline
                                        key={3}
                                        date={'2021-2022'}
                                        level={'QA Engineer'}
                                        descr={'Real Time group (Israel)'}
                                        color={skin}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
      
        </Section>
    </div>
    
  )
}

export default About
