import axios from 'axios'
import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast'



export let cartContext = createContext()

export default function AddtoCartContextProvider(props) {
  let [cartCount, setItemCount] = useState(null);
  let headers = {
    token: localStorage.getItem("userToken")
  }
  async function addtoCart(id) {
    return await axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
      productId: id
    },
      {
        headers
      }

    ).then((data) => setItemCount(data.data.numOfCartItems), toast.success('product added successfully')).catch(err => console.log(err))
  }

  function showCart() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers
    }).then(resp => resp)
      .catch(err => err)

  }
  function deleteCartItem(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      headers
    }).then(resp => resp)
      .catch(err => err)
  }
  async function updateCartItem(productId, count) {
    return await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        count
      },
      {
        headers
      }).then(resp => resp)
      .catch(err => err)
  }

  async function GetPayment(cartID, shippingAddress) {
    return await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}?url=http://localhost:3000`,
      {
        shippingAddress
      },
      {

        headers
      }
    )
  }

  return <cartContext.Provider value={{ addtoCart, showCart, deleteCartItem, updateCartItem, cartCount, GetPayment }}>
    {props.children}

  </cartContext.Provider>
}
