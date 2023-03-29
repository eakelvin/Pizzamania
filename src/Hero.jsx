import React from "react";

export default function Hero() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/mahyar-motebassem-pGA4zHvpo5E-unsplash.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>1</h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./images/georgia-z-JG5lgvc57qE-unsplash.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>2</h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./images/istockphoto-1315458540-1024x1024.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>3</h5>
            <p></p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
    )
}