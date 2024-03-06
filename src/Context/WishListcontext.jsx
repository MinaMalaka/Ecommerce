import axios from 'axios';
import React, { createContext } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
export let WishlistContext = createContext();
export function WishlistcontextProvider(props) {
  let headers = {
    token: localStorage.getItem("userToken")
  }
  let [wishMsg, setWishMsg] = useState("");
  let [showList, setShowList] = useState([])
  async function addToWishlist(productId) {
    return await axios.post('https://ecommerce.routemisr.com/api/v1/Wishlist', {
      productId
    },
      {
        headers
      }).then((data) => toast.success(data?.data?.message)).catch(err => err)
  }

  async function getWishlist() {
    return await axios.get('https://ecommerce.routemisr.com/api/v1/Wishlist', {
      headers
    }).then(data => setShowList(data?.data?.data)).catch(err => err)
  }

  async function deleteListItem(itemId) {
    return await axios.delete(` https://ecommerce.routemisr.com/api/v1/Wishlist/${itemId}`, {
      headers
    }).catch(err => err)
  }

  return (
    <>
      <WishlistContext.Provider value={{ addToWishlist, wishMsg, getWishlist, setShowList, showList, deleteListItem }}>
        {props.children}
      </WishlistContext.Provider>
    </>
  )
}
