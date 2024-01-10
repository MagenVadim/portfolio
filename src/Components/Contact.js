import React from 'react'
import ContactItem from './ContactItem'

function Contact() {
  return (
    <section className="contact section">
        <div className="container">
            <div className="row">
                <div className="section-title pad-15">
                    <h2>Contact Me</h2>
                </div>
            </div>
            <h3 className="contact-title">Have You Any Questions?</h3>
            <h4 className="contact-sub-title">I'M AT YOUR SERVICES</h4>

            <div className="row">
                <ContactItem message={"Call Us On"} iconName={"fa fa-phone"} info={"+972 52 9370346"}/>
                <ContactItem message={"Office"} iconName={"fa fa-map-marker-alt"} info={"Haifa (Israel)"}/>
                <ContactItem message={"Email"} iconName={"fa fa-envelope"} info={"magenvadim@gmail.com"}/>
                <ContactItem message={"Website"} iconName={"fa fa-globe-europe"} info={"www.domain.com"}/>
            </div>

            <h3 className="contact-title pad-15">SEND ME AN EMAIL</h3>
            <h4 className="contact-sub-title pad-15">I'M VERY RESPONSIVE TO MESSAGES!</h4>

            <div className="row">
                <div className="contact-form">
                    <div className="row">
                        <div className="form-item col-6 pad-15">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact
