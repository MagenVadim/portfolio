import React from 'react'

function ContactItem({message, info, iconName}) {
  return (
    <div className="contact-info-item pad-15">
      <div className="icon"><i className={iconName}></i></div>
      <h4>{message}</h4>
      <p>{info}</p>
    </div>
  )
}

export default ContactItem
