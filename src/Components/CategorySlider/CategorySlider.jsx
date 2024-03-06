import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Slider from 'react-slick'

function CategorySlider() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
  }

  function getCatSlider() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  let { data } = useQuery("catSlider", getCatSlider)
  return (
    <>
      <div className='container'>
        <Slider {...settings}>
          {data?.data?.data.map((category) =>
            <>
              <img src={category.image} className='w-100' height={200} alt="" />
              <p className='text-center '>{category.name}</p>
            </>
          )}
        </Slider>
      </div>
    </>
  )
}
export default CategorySlider
