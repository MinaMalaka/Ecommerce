import React from 'react'
import errorImg from '../Assets/error.svg'
export default function ErrorPage() {
  return (
    <div className=' d-flex justify-content-center'>
      <img src={errorImg} className='w-75' height={400} alt="" />
    </div>
  )
}
