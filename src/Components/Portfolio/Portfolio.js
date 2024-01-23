import React from 'react'
import PortfolioItem from './PortfolioItems'
import {Section} from '../StylesComponent'
import countries from '../../images/countriesAPI.jpg'
import jobListing from '../../images/JobListing.png'
import snickersStore from '../../images/snickersStore.jpg'
import notification from '../../images/notification.png'
import todo from '../../images/todo.png'

const linkSourse = [
    {name: "jobListing", url: "https://main.dfuhavulmhomn.amplifyapp.com/"},
    {name: "countriesAPI", url: "https://main.d1x8la6yj0iyv6.amplifyapp.com/"},
    {name: "snickersStore", url: "https://main.d3lm5srdjp1fwh.amplifyapp.com/"},
    {name: "notification", url: "https://main.d4uo3va94tu7d.amplifyapp.com/"},
    {name: "todo", url: "https://main.d1t4lt62kkmhda.amplifyapp.com/"}
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
                    <PortfolioItem key={"p1"} imgSource={jobListing} url={linkSourse[0].url}/>
                    <PortfolioItem key={"p2"} imgSource={countries} url={linkSourse[1].url}/>
                    <PortfolioItem key={"p3"} imgSource={snickersStore} url={linkSourse[2].url}/>
                    <PortfolioItem key={"p4"} imgSource={notification} url={linkSourse[3].url}/> 
                    <PortfolioItem key={"p5"} imgSource={todo} url={linkSourse[4].url}/>                    
                </div>

            </div>
         </Section>
    </div>
    
  )
}

export default Portfolio
