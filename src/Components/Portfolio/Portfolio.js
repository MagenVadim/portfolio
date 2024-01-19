import React from 'react'
import PortfolioItem from './PortfolioItems'
import {Section} from '../StylesComponent'

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
                    <PortfolioItem key={"p1"}/>
                    <PortfolioItem key={"p2"}/>
                    <PortfolioItem key={"p3"}/>
                    <PortfolioItem key={"p4"}/>
                    <PortfolioItem key={"p5"}/>
                    <PortfolioItem key={"p6"}/>
                </div>

            </div>
         </Section>
    </div>
    
  )
}

export default Portfolio
