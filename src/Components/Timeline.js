import React from 'react'

function Timeline({date, level, descr}) {
  return (
    <div className="timeline-item">
      <div className="circle-dot"></div>
      <h3 className="timeline-date">
            <i className="fa fa-calendar"></i> {date}
      </h3>
      <h4 className="timeline-title">{level}</h4>
      <p className="timeline-text">{descr} </p>
    </div>
  )
}

export default Timeline
