import React from 'react'
import countries from '../../images/countriesAPI.jpg'

function PortfolioItems() {
  return (
    <div className="portfolio-item">
        <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
                <img src={countries} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PortfolioItems
