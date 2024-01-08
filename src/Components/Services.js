import React from 'react'
import ServiceItem from './ServiceItem'

function Services() {
  return (
    <section className="service section">
      <div className="container">
        <div className="row">
          <div className="section-title pad-15">
            <h2>Services</h2>
          </div>
        </div>

        <div className="row">
          <ServiceItem
            key={1}
            className={'fa fa-mobile-alt'}
            item={'Web Design'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}          
          />
          <ServiceItem
            key={1}
            className={'fa fa-palette'}
            item={'Web Design'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}          
          />
          <ServiceItem
            key={2}
            className={'fa fa-laptop-code'}
            item={'Web Design'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}          
          />
          <ServiceItem
            key={3}
            className={'fa fa-code'}
            item={'Web Design'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}          
          />
          <ServiceItem
            key={4}
            className={'fa fa-search'}
            item={'Web Design'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}          
          />
          <ServiceItem
            key={5}
            className={'fa fa-bullhorn'}
            item={'Web Design'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}          
          />



        </div>



      </div>
    </section>
  )
}

export default Services
