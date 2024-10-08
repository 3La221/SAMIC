import React from 'react'


interface ActualiteCardProps {
    actualite: {
        title: string,
        date: string,
        img : string,
    }
    }

const ActualiteCard = ({actualite}:ActualiteCardProps) => {
  return (
      <div className="news-block-one w-[400px]  ">
      <div className="inner-box">
          <div className="image-box">
              <figure className="image"><img src={`api/images/${actualite.img}`} alt=""/></figure>
              <div className="link-btn"><a href=""><i className="flaticon-zoom-in"></i></a></div>
          </div>
          <div className="lower-content">
              <div className="category"><a href='/'>SAMiC</a></div>
              <ul className="post-info clearfix">
                  <li>11 August, 2022</li>
              </ul>
              <h3>{actualite.title}</h3>
             
          </div>
      </div>
  </div>
  )
}

export default ActualiteCard
