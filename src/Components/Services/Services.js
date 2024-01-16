import React from 'react'
import ServiceItem from './ServiceItem'

function Services({skin, lightDarkMode}) {
  return (
    <div className='main-content'>
      <section className="service section">
        <div className="container">
          <div className="row">
            <div className="section-title pad-15">
              <h2>Services</h2>
            </div>
          </div>

          <div className="row">
            <ServiceItem
              key={"mobile-alt"}
              className={'fa fa-mobile-alt'}
              item={'Web Design'}
              description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}
              color={skin}
              lightDarkMode={lightDarkMode}          
            />
            <ServiceItem
              key={"palette"}
              className={'fa fa-palette'}
              item={'Web Design'}
              description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}  
              color={skin}   
              lightDarkMode={lightDarkMode}         
            />
            <ServiceItem
              key={"laptop-code"}
              className={'fa fa-laptop-code'}
              item={'Web Design'}
              description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}   
              color={skin}
              lightDarkMode={lightDarkMode}           
            />
            <ServiceItem
              key={"code"}
              className={'fa fa-code'}
              item={'Web Design'}
              description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}
              color={skin}
              lightDarkMode={lightDarkMode}              
            />
            <ServiceItem
              key={"search"}
              className={'fa fa-search'}
              item={'Web Design'}
              description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'} 
              color={skin}
              lightDarkMode={lightDarkMode}             
            />
            <ServiceItem
              key={"bullhorn"}
              className={'fa fa-bullhorn'}
              item={'Web Design'}
              description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem vitae nulla?'}
              color={skin}
              lightDarkMode={lightDarkMode}              
            />



          </div>



        </div>
      </section>
    </div>
    
  )
}

export default Services
