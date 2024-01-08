import React from 'react'

function ServiceItem({className, item, description}) {
  return (
    <div className="service-item pad-15">
        <div className="service-item-inner">
        <div className="icon">
            <i className={className}></i>
        </div>
        <h4>{item}</h4>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default ServiceItem
