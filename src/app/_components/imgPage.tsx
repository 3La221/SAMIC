import React from 'react'

const ImgPage = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mx-4 sm:mx-6 lg:mx-12">
      {/* First Column */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col project-block">
        <div className="project-block-two">
          <div className="inner-box">
            <figure className="image-box">
              <img src="assets/images/project/project-13.jpg" alt="project-13" />
            </figure>
            <div className="content-box">
              <div className="view-btn">
                <a href="assets/images/project/project-13.jpg" className="lightbox-image" data-fancybox="gallery">
                  <i className="flaticon-zoom-in"></i>
                </a>
              </div>
              <div className="text">
                <h6>SAMiC</h6>
                <h3><a href="index-2.html">Clinical Trial Design Best Practices</a></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="project-block-two">
          <div className="inner-box">
            <figure className="image-box">
              <img src="assets/images/project/project-14.jpg" alt="project-14" />
            </figure>
            <div className="content-box">
              <div className="view-btn">
                <a href="assets/images/project/project-14.jpg" className="lightbox-image" data-fancybox="gallery">
                  <i className="flaticon-zoom-in"></i>
                </a>
              </div>
              <div className="text">
                <h6>SAMiC</h6>
                <h3><a href="index-2.html">Clinical Trial Design Best Practices</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-6 project-block">
        <div className="project-block-two">
          <div className="inner-box">
            <figure className="image-box">
              <img src='assets/images/project/project-15.jpg' alt="project-15" />
            </figure>
            <div className="content-box">
              <div className="view-btn">
                <a href="assets/images/project/project-15.jpg" className="lightbox-image" data-fancybox="gallery">
                  <i className="flaticon-zoom-in"></i>
                </a>
              </div>
              <div className="text">
                <h6>SAMiC</h6>
                <h3><a href="index-2.html">Clinical Trial Design Best Practices</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Column */}
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col project-block">
        <div className="project-block-two">
          <div className="inner-box">
            <figure className="image-box">
              <img src="assets/images/project/project-16.jpg" alt="project-16" />
            </figure>
            <div className="content-box">
              <div className="view-btn">
                <a href="assets/images/project/project-16.jpg" className="lightbox-image" data-fancybox="gallery">
                  <i className="flaticon-zoom-in"></i>
                </a>
              </div>
              <div className="text">
                <h6>SAMiC</h6>
                <h3><a href="index-2.html">Clinical Trial Design Best Practices</a></h3>
              </div>
            </div>
          </div>
        </div>
        <div className="project-block-two">
          <div className="inner-box">
            <figure className="image-box">
              <img src="assets/images/project/project-17.jpg" alt="project-17" />
            </figure>
            <div className="content-box">
              <div className="view-btn">
                <a href="assets/images/project/project-17.jpg" className="lightbox-image" data-fancybox="gallery">
                  <i className="flaticon-zoom-in"></i>
                </a>
              </div>
              <div className="text">
                <h6>SAMiC</h6>
                <h3><a href="index-2.html">Clinical Trial Design Best Practices</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImgPage
