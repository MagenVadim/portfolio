import React from 'react'
import {ProgressIn} from '../StylesComponent'

function Skill({color, skill, percent}) {
  return (
    <div className="skill-item pad-15">
        <h5>{skill}</h5>
        <div className="progress">
            <ProgressIn color={color} percent={percent}></ProgressIn>
            <div className="skill-percent">{percent}</div>
        </div>
    </div>
  )
}

export default Skill
