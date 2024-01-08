import React from 'react'

function InfoItem({title, info}) {
  return (
    <div className="info-item pad-15">
        <p>{title}: <span>{info}</span></p>
    </div>      
  )
}

export default InfoItem
