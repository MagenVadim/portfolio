import React from 'react'
import {Icon, ServiceItemInner} from '../StylesComponent'

function ServiceItem({color, className, item, description}) {
  return (
    <div className="service-item pad-15">
        <ServiceItemInner>

          <div className="icon">
              <Icon className={className} color={color}></Icon>
          </div>

          <h4>{item}</h4>
          <p>{description}</p>
        </ServiceItemInner>
    </div>
  )
}

export default ServiceItem
