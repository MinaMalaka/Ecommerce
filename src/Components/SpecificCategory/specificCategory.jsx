import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FidgetSpinner } from 'react-loader-spinner'

export default function SpecificCategory() {
  let [specificCategory, setspecificCategory] = useState({});
  let { catID } = useParams()
  let [spinner, setIsLoading] = useState(true)
  async function getCat() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${catID}`)
    setspecificCategory(data?.data)
    setIsLoading(false)
  }
  useEffect(() => {
    getCat()
  })
  return (
    <div>
      <div className="container" style={{ padding: '120px' }}>
        <div className="row">
          {spinner ?
            <FidgetSpinner
              visible={true}
              height="200"
              width="200"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
            /> : ""}
          <div className='d-flex flex-column justify-content-center align-content-center w-25'>
            <img src={specificCategory.image} alt={specificCategory.slug} className='w-100' height={300} />
            <p className=" text-main fs-4 fw-bolder text-center py-4">{specificCategory.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
