import React from 'react'


function PortfolioItems({imgSource, url, title, github}) {
  return (
    <div className="portfolio-item">
      <div className="title-item">
        <h4>{title + " :"}</h4>
        <a className="github" target="_blank" href={github}>
          <i class="fa-brands fa-github"></i>
        </a>
      </div>


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
