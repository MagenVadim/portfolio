import React from 'react'


function PortfolioItems({imgSource, url}) {
  return (
    <div className="portfolio-item">
        <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <a href={url}>
                <img src={imgSource} alt="" />
              </a>
                
            </div>
        </div>
    </div>
  )
}

export default PortfolioItems
