import React from 'react'


function PortfolioItems({imgSource, url, title}) {
  return (
    <div className="portfolio-item">
      <div className="title-item">
        <h4>{title + " :"}</h4>
        <a className="github" target="_blank" href={"https://github.com/MagenVadim/dark-mode-rest-api-countries"}>
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
