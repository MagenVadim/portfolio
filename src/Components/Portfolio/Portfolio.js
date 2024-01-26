import React from 'react'
import PortfolioItem from './PortfolioItems'
import {Section} from '../StylesComponent'
import countries from '../../images/countriesAPI.jpg'
import jobListing from '../../images/JobListing.png'
import snickersStore from '../../images/snickersStore.jpg'
import notification from '../../images/notification.png'
import todo from '../../images/todo.png'

const linkSourse = [
    {name: "Job listings with filtering", url: "https://main.dfuhavulmhomn.amplifyapp.com/", github:""},
    {name: "REST Countries API", url: "https://main.d1x8la6yj0iyv6.amplifyapp.com/", github:"https://github.com/MagenVadim/dark-mode-rest-api-countries"},
    {name: "Snickers Store", url: "https://main.d3lm5srdjp1fwh.amplifyapp.com/", github:""},
    {name: "Notifications page", url: "https://main.d4uo3va94tu7d.amplifyapp.com/", github:""},
    {name: "To-Do App", url: "https://main.d1t4lt62kkmhda.amplifyapp.com/", github:""}
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
                    <PortfolioItem key={"p1"} title={linkSourse[0].name} imgSource={jobListing} url={linkSourse[0].url}/>
                    <PortfolioItem key={"p2"} title={linkSourse[1].name} imgSource={countries} url={linkSourse[1].url}/>
                    <PortfolioItem key={"p3"} title={linkSourse[2].name} imgSource={snickersStore} url={linkSourse[2].url}/>
                    <PortfolioItem key={"p4"} title={linkSourse[3].name} imgSource={notification} url={linkSourse[3].url}/> 
                    <PortfolioItem key={"p5"} title={linkSourse[4].name} imgSource={todo} url={linkSourse[4].url}/>                    
                </div>

            </div>
         </Section>
    </div>
    
  )
}

export default Portfolio
