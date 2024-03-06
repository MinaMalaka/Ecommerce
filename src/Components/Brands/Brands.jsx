import axios from "axios"
import { useEffect, useState } from "react";
import { FidgetSpinner } from 'react-loader-spinner'


export default function Brands() {
  let [allBrands, setAllBrands] = useState([])
  let [loading, setLoading] = useState(true)

  async function getAllBrands() {
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    setAllBrands(data?.data)
  }
  useEffect(() => {
    getAllBrands()
    setLoading(false)
  }, [])
  return (
    <>
      <div style={{ padding: '120px' }}>
        {loading ?
          <div className='loader'>
            <FidgetSpinner
              visible={true}
              height="200"
              width="200"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
            />
          </div> : <>
            <div className="container" >
              <div className="row">
                <h2 className="text-center fw-bolder fs-1" style={{ color: '#4fa74f' }}>All brands</h2>
                {allBrands.map((brand) => <div className="col-md-3 my-3">
                  <div className="shadowCart">
                    <img src={brand.image} alt={brand.slug} className="w-100" />
                  </div>
                </div>)}
              </div>
            </div>
          </>}
      </div>
    </>
  )
}
