import React from 'react'
import PortfolioItem from './PortfolioItems'
import {Section} from '../StylesComponent'
import countries from '../../images/countriesAPI.jpg'
import jobListing from '../../images/JobListing.png'
import snickersStore from '../../images/snickersStore.jpg'
import notification from '../../images/notification.png'
import todo from '../../images/todo.png'

const linkSourse = [
    {name: "Job listings with filtering",
        url: "https://main.dfuhavulmhomn.amplifyapp.com/",
        github:"https://github.com/MagenVadim/job-listing-filter",
        image:jobListing
    },
        
    {name: "REST Countries API",
        url: "https://main.d1x8la6yj0iyv6.amplifyapp.com/",
        github:"https://github.com/MagenVadim/dark-mode-rest-api-countries",
        image:countries,
    },        
    {name: "Snickers Store",
        url: "https://main.d3lm5srdjp1fwh.amplifyapp.com/",
        github:"https://github.com/MagenVadim/ecommerce-snickers-store",
        image:snickersStore
    },        
    {name: "Notifications page",
        url: "https://main.d4uo3va94tu7d.amplifyapp.com/",
        github:"https://github.com/MagenVadim/message-page",
        image:notification,
    },        
    {name: "To-Do App",
        url: "https://main.d1t4lt62kkmhda.amplifyapp.com/",
        github:"https://github.com/MagenVadim/todo-list",
        image:todo
    }        
]


function Portfolio({navToglerValue, lightDarkMode}) {
  return (
    <div className='main-content'>
        <Section navToglerValue={navToglerValue} lightDarkMode={lightDarkMode}>
            <div className="container">
                <div className="row">
                    <div className="section-title pad-15">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading pad-15">
                        <h2>My Last Projects:</h2>
                    </div>
                </div>

                <div className="row-img">
                    {linkSourse.map(elem =>{
                        return(
                            <PortfolioItem key={elem.name} title={elem.name} imgSource={elem.image} url={elem.url} github={elem.github}/>
                        )
                    })}
                </div>
            </div>
         </Section>
    </div>
    
  )
}

export default Portfolio
