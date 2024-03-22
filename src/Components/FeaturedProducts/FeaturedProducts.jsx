import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FidgetSpinner } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/AddtoCart'
import { WishlistContext } from '../../Context/WishListcontext'

function FeaturedProducts() {
  let [productData, setProductData] = useState([])
  let [spinner, setIsLoading] = useState(true)
  let { addtoCart } = useContext(cartContext)
  let { addToWishlist } = useContext(WishlistContext)
  let [isActive, setIsActive] = useState(false);

  let handleClick = () => {
    setIsActive(current => !current);
  }
  async function addWishlist(pId) {
    await addToWishlist(pId)
  }
  async function addtCart(id) {
    await addtoCart(id)
  }
  async function getProductData() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    setProductData(data.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getProductData()
  }, [])
  return (
    <>
      <div className='container py-3 mt-5'>
        <div className='row'>
          {spinner ?
            <FidgetSpinner
              visible={true}
              height="200"
              width="200"
              ariaLabel="fidget-spinner-loading"
              wrapperStyle={{}}
              wrapperClass="fidget-spinner-wrapper"
            /> : ""}

          {productData.map((product) => {
            return (
              <>
                <div className='col-sm-6 col-md-3 mb-5' key={product.id}>
                  <div className='product p-3'>
                    <Link to={`details/${product.id}`} className='text-black text-decoration-none'>
                      <img src={product.imageCover} className='w-100' alt="" />
                      <p className='text-main'>{product.title.split(" ").slice(0, 3).join(" ")}</p>
                      <p>{(product.description.split(" ").slice(0, 4).join(" "))}</p>
                      <div className='d-flex justify-content-between p-1'>
                        <p>price: {product.price}</p>
                        <p>{product.ratingsAverage}<i className="fa-solid fa-star rating-color"></i></p>
                      </div>
                    </Link>
                    <div className='d-flex'>
                      <button onClick={() => addtCart(product.id)} className='btn btn-success bg-main text-white text-center w-100'>Add To Cart</button>
                      <button className='btn border-0' style={{
                        color: isActive ? 'red' : '',
                      }} onClick={() => { addWishlist(product.id); handleClick() }} ><i className="heart fa-solid fa-heart fs-3"></i></button>
                    </div>
                  </div>
                </div>
              </>)
          })
          }
        </div>
      </div>
    </>
  )
}
export default FeaturedProducts

