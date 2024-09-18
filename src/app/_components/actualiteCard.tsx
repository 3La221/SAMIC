import React from 'react'

const ActualiteCard = () => {
  return (
      <div className="news-block-one w-[400px]">
      <div className="inner-box">
          <div className="image-box">
              <figure className="image"><img src="assets/images/news-4.jpg" alt=""/></figure>
              <div className="link-btn"><a href="blog-details.html"><i className="flaticon-zoom-in"></i></a></div>
          </div>
          <div className="lower-content">
              <div className="category"><a href="blog-details.html">SAMiC</a></div>
              <ul className="post-info clearfix">
                  <li>11 August, 2022</li>
              </ul>
              <h3><a href="blog-details.html">Ensure Your Product Quality with a Biogenix Lab</a></h3>
              <div className="lower-box">
                  <div className="link"><a href="blog-details.html">Read More</a></div>
                  
              </div>
          </div>
      </div>
  </div>
  )
}

export default ActualiteCard
