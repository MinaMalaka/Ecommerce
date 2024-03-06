import React, { createContext, useContext} from 'react'
import { tokenContext } from './TokenContext'
import { Navigate } from 'react-router-dom'


export let protectedRoutes = createContext()

 function ProtectedRoutes(props) {

  let { token } = useContext(tokenContext)
  if (localStorage.getItem("userToken")) {
    return props.children
  }
  else {
    return <Navigate to={"/login"} />
  }
}
export default ProtectedRoutes
