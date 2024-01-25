import React from 'react'
import ServiceItem from './ServiceItem'
import {Section} from '../StylesComponent'

function Services({skin, lightDarkMode, navToglerValue}) {
  return (
    <div className='main-content'>
      <Section navToglerValue={navToglerValue} lightDarkMode={lightDarkMode}>
        <div className="container">
          <div className="row">
            <div className="section-title pad-15">
              <h2>Services</h2>
            </div>
          </div>

          <div className="row">
            <ServiceItem
              key={"webDevelopment"}
              className={'fa fa-laptop-code'}
              item={'Web Development'}
              description={'Optimize the user experience using HTML, CSS, JavaScript, React to bring concepts to life. Develop and maintain the user interface by following SEO best practices.'}   
              color={skin}
              lightDarkMode={lightDarkMode}           
            />
            <ServiceItem
              key={"react"}
              className={'fa-brands fa-react'}
              item={'React JS'}
              description={'Design and develop user interface components. Develop reusable components and front-end libraries for future use. Optimize components for maximum performance across a vast array of web-capable devices and browsers.'} 
              color={skin}
              lightDarkMode={lightDarkMode}             
            />
            <ServiceItem
              key={"javascript"}
              className={'fa-brands fa-js'}
              item={'Javascript'}
              description={'Develop new user-facing features. Build reusable code and libraries for future use. Ensure the technical feasibility of UI/UX designs. Optimize applications for maximum speed and scalability.'}
              color={skin}
              lightDarkMode={lightDarkMode}              
            />
            <ServiceItem
              key={"Node JS"}
              className={'fab fa-node'}
              item={'Node JS'}
              description={'Developing and maintaining all server-side network components. Designing customer-facing UI and back-end services for various business processes. Running diagnostic tests, repairing defects, and providing technical support.'}
              color={skin}
              lightDarkMode={lightDarkMode}          
            />
            <ServiceItem
              key={"bootstrap"}
              className={'fa-brands fa-bootstrap'}
              item={'Bootstrap'}
              description={'Develop code for the targeted environment. Design and implement front-end business applications. Support and maintain existing production code'}  
              color={skin}   
              lightDarkMode={lightDarkMode}         
            />
            <ServiceItem
              key={"sass"}
              className={'fab fa-sass'}
              item={'SASS'}
              description={'Automate repetitive tasks, reduce the number of errors and code bloat, create reusable code snippets, and ensure backward compatibility.'}
              color={skin}
              lightDarkMode={lightDarkMode}              
            />
          </div>
        </div>
      </Section>
    </div>
    
  )
}

export default Services
