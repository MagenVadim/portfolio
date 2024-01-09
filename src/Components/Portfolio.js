import React from 'react'
import PortfolioItem from './PortfolioItems'

function Portfolio() {
  return (
    <section className="portfolio section">
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
            <div className="row">
                <PortfolioItem
                    key={1}
                />
                <PortfolioItem
                    key={2}
                />
                <PortfolioItem
                    key={3}
                />
                <PortfolioItem
                    key={4}
                />
                <PortfolioItem
                    key={5}
                />
                <PortfolioItem
                    key={6}
                />
            </div>


        </div>
    </section>
  )
}

export default Portfolio
