import React from 'react'

function Skill({skill, percent}) {
  return (
    <div className="skill-item pad-15">
        <h5>{skill}</h5>
        <div className="progress">
            <div className="progress-in" style={{width: percent}}></div>
            <div className="skill-percent">{percent}</div>
        </div>
    </div>
  )
}

export default Skill
