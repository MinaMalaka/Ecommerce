import React, { useContext, useEffect, useState } from 'react'
import { WishlistContext } from '../../Context/WishListcontext'
import { FidgetSpinner } from 'react-loader-spinner'
import { cartContext } from '../../Context/AddtoCart'

function Wishlist() {
  let { getWishlist, showList, setShowList, deleteListItem } = useContext(WishlistContext)
  let [loading, setIsLoading] = useState(false)
  let { addtoCart } = useContext(cartContext)
  async function addtCart(id) {
    await addtoCart(id)
    deleteList(id)
  }
  async function deleteList(id) {
    setIsLoading(true)
    let { data } = await deleteListItem(id)
    setIsLoading(false)
    setShowList(data?.data)
    getList()
  }
  async function getList() {
    await getWishlist()
  }
  useEffect(() => {
    getList()
    setIsLoading(false)
  }, [])
  return (
    <>
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
          <div className='container bg-body-secondary ' style={{ padding: '100px' }}>
            <h2 className='fw-bold p-2 mb-3'>My Wishlist : </h2>
            <div className='d-flex justify-content-between m-3'>
            </div>
            {showList.map((item) => <div className='row pb-5' key={item.id}>
              <div className='col-md-2 pb-5'>
                <img src={item.imageCover} className="w-100" alt={item.slug} />
              </div>
              <div className='col-md-8'>
                <p>{item.title}</p>
                <p className='text-main '>price:{item.price} EGP</p>
                <button className='btn text-start' onClick={() => deleteList(item.id)}><i className="fa-solid fa-trash-can p-1 text-danger "></i>Remove</button>
              </div>
              <div className='col-md-2'>
                <div className='d-flex justify-content-center align-content-center align-self-center '>
                  <button className='btn btn-outline-success' onClick={() => addtCart(item.id)}>Add to Cart</button>
                </div>
              </div>
              <p className="linebreak"></p>
            </div>)}
          </div>
        </>}
    </>
  )
}
export default Wishlist
