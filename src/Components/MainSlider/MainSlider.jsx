import React from 'react'
import Slider from 'react-slick';
import slide1 from '../Assets/grocery-banner.png';
import slide2 from '../Assets/grocery-banner-2.jpeg';
import img1 from '../Assets/slider-image-3.jpeg';
import img2 from '../Assets/slider-image-2.jpeg';
 function MainSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className='container  w-100' style={{padding:'120px'}} >
        <div className='row '>
          <div className='col-md-8 mb-3'>
            <Slider {...settings} className='mb-3'>
              <img src={img1} alt="" className='w-100' height={250} />
              <img src={img2} alt="" className='w-100' height={250} />
            </Slider>
          </div>
          <div className='col-md-4 mb-3'>
            <img src={slide1} alt="" className='w-100' height={125} />
            <img src={slide2} alt="" className='w-100' height={125} />
          </div>
        </div>
      </div>
    </>
  )
}
export default MainSlider
