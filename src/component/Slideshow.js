import React from 'react'
import { icons } from '../utils/icons'

function Slideshow() {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">

  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={icons().slideImage1} className="d-block" style={{
        // height:"50vh",
        width : "100vw",
        
        
      }}/>
    </div>
    <div className="carousel-item">
      <img src={icons().slideImage2} alt="Chicago" className="d-block" style={{
        // height:"70vh",
        width : "100vw",
      }}/>
    </div>
    <div className="carousel-item">
      <img src={icons().slideImage3} alt="New York" className="d-block" style={{
        // height:"70vh",
        width : "100vw",
      }}/>
    </div>
  </div>

  
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
  )
}

export default Slideshow