import React from 'react'
import {ContactIcon} from '../StylesComponent'

function ContactItem({color, message, info, iconName}) {
  return (
    <div className="contact-info-item pad-15">

      <div className="icon">
        <ContactIcon color={color} className={iconName}></ContactIcon>
      </div>

      <h4>{message}</h4>
      <p>{info}</p>
    </div>
  )
}

export default ContactItem
