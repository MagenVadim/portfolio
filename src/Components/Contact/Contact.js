import React from 'react'
import ContactItem from './ContactItem'
import TypeForm from './TypeForm'
import {HeaderQuestion} from '../StylesComponent'

function Contact({skin}) {
  return (
    <div className='main-content'>
        <section className="contact section">
            <div className="container">
                <div className="row">
                    <div className="section-title pad-15">
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <HeaderQuestion color={skin}>Have You Any Questions?</HeaderQuestion>
                <h4 className="contact-sub-title">I'M AT YOUR SERVICES</h4>

                <div className="row">
                    <ContactItem color={skin} message={"Call Us On"} iconName={"fa fa-phone"} info={"+972 52 9370346"}/>
                    <ContactItem color={skin} message={"Office"} iconName={"fa fa-map-marker-alt"} info={"Haifa (Israel)"}/>
                    <ContactItem color={skin} message={"Email"} iconName={"fa fa-envelope"} info={"magenvadim@gmail.com"}/>
                    <ContactItem color={skin} message={"Website"} iconName={"fa fa-globe-europe"} info={"www.domain.com"}/>
                </div>

                <HeaderQuestion color={skin}>SEND ME AN EMAIL</HeaderQuestion>
                <h4 className="contact-sub-title pad-15">I'M VERY RESPONSIVE TO MESSAGES!</h4>

                <div className="row">
                    <div className="contact-form">
                        <div className="row">
                            <TypeForm className={"form-item col-6 pad-15"} type={"text"} placeholder={"Name"}/>                        
                            <TypeForm className={"form-item col-6 pad-15"} type={"email"} placeholder={"Email"}/>   
                        </div>

                        <div className="row">
                            <TypeForm className={"form-item col-12 pad-15"} type={"text"} placeholder={"Subject"}/> 
                        
                        </div>

                        <div className="row">
                            <div className="form-item col-12 pad-15">
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" placeholder="Message"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-item col-12 pad-15">
                                <button type="submit" className='btn'>Send Message</button>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>

    </div>
    
  )
}

export default Contact
