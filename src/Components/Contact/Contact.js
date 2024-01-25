import React from 'react'
import {useState, useEffect} from "react"
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
    const [disabledButton, setDisabledButton] = useState(true);
    
    const [nameError, setNameError] = useState("Name field can't be empty!");
    const [emailError, setEmailError] = useState("Email field can't be empty!");
    const [subjectError, setSubjectError] = useState("Subject field can't be empty!");
    const [messageError, setMessageError] = useState("Message field can't be empty!");


    useEffect(()=>{
        if(nameStatus && emailStatus && subjectStatus && messageStatus
            && nameError===''  && emailError===''  && subjectError===''  && messageError===''){
                setDisabledButton(false);
        }
    },[nameStatus, emailStatus, subjectStatus, messageStatus, nameError, emailError, subjectError, messageError])



    const emailHandler =(e)=>{
        setEmail(e.target.value);
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError("Invalid Email. Try again!")
            if(e.target.value.length<1){                
                setEmailError("Email field can't be empty!")
            }
        } else{
            setEmailStatus(true)
            setEmailError('')
        }
    }

    const nameHandler =(e)=>{
        setName(e.target.value);
        if(e.target.value.length<1){
            setNameStatus(true)
            setNameError("Name field can't be empty")
        } else{
            setNameError('');
        }
    }

    const subjectHandler = (e)=>{
        setSubject(e.target.value);
        if(e.target.value.length<1){
            setSubjectStatus(true)
            setSubjectError("Subject field can't be empty")
        } else{
            setSubjectError('');
        }
    }

    const messageHandler =(e)=>{
        setMessage(e.target.value);
        if(e.target.value.length<1){
            setMessageStatus(true)
            setMessageError("Message field can't be empty")
        } else{
            setMessageError('');
        }
    }


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
                                    <TypeForm
                                        fieldlHandler={nameHandler}
                                        blurHandler={blurHandler}
                                        name={'name'}
                                        className={"form-item col-6 pad-15"}
                                        type={"text"}
                                        placeholder={"Name"}
                                        value={name}
                                    />
                                </div>

                                <div className="typeform">
                                    <div className="typeError">
                                        {(emailStatus && emailError) && <div style={{color:'red', 'padding-left':'30px'}}>{emailError}</div>}  
                                    </div>                                                       
                                    <TypeForm
                                        fieldlHandler={emailHandler}
                                        blurHandler={blurHandler}
                                        name={'email'}
                                        className={"form-item col-6 pad-15"}
                                        type={"email"}
                                        placeholder={"Email"}
                                        value={email}
                                    />   
                                </div>
                            </div>

                            <div className="row">
                                <div className="typeform-subject">
                                    <div className="typeError">
                                        {(subjectStatus && subjectError) && <div style={{color:'red', 'padding-left':'30px'}}>{subjectError}</div>}  
                                    </div> 
                                    <TypeForm
                                        fieldlHandler={subjectHandler}
                                        blurHandler={blurHandler}
                                        name={'subject'}
                                        className={"form-item col-12 pad-15"}
                                        type={"text"}
                                        placeholder={"Subject"}
                                        value={subject}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-item col-12 pad-15">
                                    
                                    <div className="typeError">
                                        {(messageStatus && messageError) && <div style={{color:'red', 'padding-left':'20px'}}>{messageError}</div>}  
                                    </div>                                   
                                    <textarea
                                        onChange={messageHandler}
                                        onBlur={e=>blurHandler(e)}                                        
                                        name='message'
                                        className="form-control"
                                        id=""
                                        placeholder="Message"
                                        value={message}
                                        style={{'padding-left':'20px'}}
                                    > 
                                    </textarea>     

                                </div>
                            </div>

                            <div className="row">
                                <div className="form-item col-12 pad-15">
                                    <BtnContact color={skin} type="submit" disabled={disabledButton}>Send Message</BtnContact>                                
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
