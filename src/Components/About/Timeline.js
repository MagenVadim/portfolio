import React from 'react'
import {CircleDot, TimelineItem} from '../StylesComponent'

function Timeline({color, date, level, descr}) {
  return (
    <TimelineItem color={color}>

      <CircleDot color={color}></CircleDot>

      <h3 className="timeline-date">
            <i className="fa fa-calendar"></i> {date}
      </h3>
      <h4 className="timeline-title">{level}</h4>
      <p className="timeline-text">{descr} </p>
    </TimelineItem>
  )
}

export default Timeline
