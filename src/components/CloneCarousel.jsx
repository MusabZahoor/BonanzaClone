import React from 'react'

const CloneCarousel = () => {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/carousel 1.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="/images/carousel 2.webp" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/images/carousel 1.webp" className="d-block w-100" alt="..."/>
    </div>
     <div class="carousel-item">
      <img src="/images/carousel 1.webp" className="d-block w-100" alt="..."/>
    </div>
     <div class="carousel-item">
      <img src="/images/carousel 1.webp" className="d-block w-100" alt="..."/>
    </div>
     <div class="carousel-item">
      <img src="/images/carousel 1.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='mt-4   p-2'>
<div className='d-flex gap-2  ps-4 justify-content-center '>
  <img src='/images/category1.webp' className='' style={{width:"27%"}} />
  <img src='/images/category2.webp' className='' style={{width:"27%"}}/>
  <img src='/images/category3.webp' className='' style={{width:"27%"}}/>

</div>
<div className='d-flex gap-2 ps-4 justify-content-center mt-2 '>
  <img src='/images/category4.webp' className='' style={{width:"27%"}} />
  <img src='/images/category5.webp' className='' style={{width:"27%"}}/>
  <img src='/images/category6.webp' className='' style={{width:"27%"}}/>

</div>
</div>
    </>
  )
}

export default CloneCarousel
