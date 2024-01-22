import React from 'react'
import {useState} from "react"
import ContactItem from './ContactItem'
import TypeForm from './TypeForm'
import {BtnContact, HeaderQuestion, Section} from '../StylesComponent'

function Contact({skin, navToglerValue, lightDarkMode}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [nameStatus, setNameStatus] = useState(false);
    const [emailStatus, setEmailStatus] = useState(false);
    const [subjectStatus, setSubjectStatus] = useState(false);
    const [messageStatus, setMessageStatus] = useState(false);

    const [nameError, setNameError] = useState('Name field cannot be empty');
    const [emailError, setEmailError] = useState('Email field cannot be empty');
    const [subjectError, setSubjectError] = useState('Subject field cannot be empty');
    const [messageError, setMessageError] = useState('Message field cannot be empty');

    const blurHandler = (e) =>{ 
        switch (e.target.name){
            case 'name':
                setNameStatus(true)                
                break
            case 'email':
                setEmailStatus(true)
                break
            case 'subject':
                setSubjectStatus(true)
                break
            case 'message':
                setMessageStatus(true)
                break
        }
    }

  return (
    <div className='main-content'>
        <Section navToglerValue={navToglerValue} lightDarkMode={lightDarkMode}>
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
                    <form className="contact-form">                        
                            <div className="row">
                                <div className="typeform">              
                                    <div className="typeError">
                                        {(nameStatus && nameError) && <div style={{color:'red', 'padding-left':'30px'}}>{nameError}</div>}
                                    </div>
                                    <TypeForm blurHandler={blurHandler} name={'name'} className={"form-item col-6 pad-15"} type={"text"} placeholder={"Name"}/>
                                </div>

                                <div className="typeform">
                                    <div className="typeError">
                                        {(emailStatus && emailError) && <div style={{color:'red', 'padding-left':'30px'}}>{emailError}</div>}  
                                    </div>                                                       
                                    <TypeForm blurHandler={blurHandler} name={'email'} className={"form-item col-6 pad-15"} type={"email"} placeholder={"Email"}/>   
                                </div>
                            </div>

                            <div className="row">
                                <div className="typeform-subject">
                                    <div className="typeError">
                                        {(subjectStatus && subjectError) && <div style={{color:'red', 'padding-left':'30px'}}>{subjectError}</div>}  
                                    </div> 
                                    <TypeForm blurHandler={blurHandler} name={'subject'} className={"form-item col-12 pad-15"} type={"text"} placeholder={"Subject"}/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-item col-12 pad-15">

                                    <div className="typeError">
                                        {(messageStatus && messageError) && <div style={{color:'red', 'padding-left':'30px'}}>{messageError}</div>}  
                                    </div>                                   
                                    <textarea onBlur={e=>blurHandler(e)} name='message' className="form-control" id="" placeholder="Message"></textarea>     

                                </div>
                            </div>

                            <div className="row">
                                <div className="form-item col-12 pad-15">
                                    <BtnContact color={skin} type="submit" disabled>Send Message</BtnContact>                                
                                </div>
                            </div>                            
                        
                    </form>
                </div>

            </div>
        </Section>

    </div>
    
  )
}

export default Contact
