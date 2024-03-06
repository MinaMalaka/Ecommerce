import './App.css';
import { useContext, useEffect } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Category from './Components/Categories/Category';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import Logout from './Components/Logout/Logout';
import { tokenContext } from './Context/TokenContext.js';
import ProtectedRoutes from './Context/ProtectedRoutes.js';
import Brands from './Components/Brands/Brands.jsx';
import Products from './Components/Products/Products.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
import Cart from './Components/Cart/Cart';
import ErrorPage from './Components/Error404/Error.jsx';
import Checkout from './Components/Checkout/Checkout.jsx';
import SpecificCategory from './Components/SpecificCategory/specificCategory.jsx';
import Wishlist from './Components/WishList/Wishlist.jsx';
import Forgotpassword from './Components/ForgotPassword/Forgotpassword.jsx';
import VerifyresetPassword from './Components/VerifyPassword/VerifyPassword.jsx';
import ResetUSer from './Components/ResetUser/ResetUSer.jsx';
import Allorders from './Components/AllOrders/Allorders.jsx';


function App() {
  let { setToken } = useContext(tokenContext)

  useEffect(() => {
    if (localStorage.getItem("userToken") != null) {
      setToken(localStorage.getItem("userToken"))
    }
  }, [])

  let routes = createHashRouter([{
    path: "", element: <Layout />,children: [
      { index: true, element: <ProtectedRoutes><Home /></ProtectedRoutes> },
      { path: "products", element: <ProtectedRoutes><Products /></ProtectedRoutes> },
      { path: "cart", element: <ProtectedRoutes><Cart /></ProtectedRoutes> },
      { path: "brands", element: <ProtectedRoutes><Brands /></ProtectedRoutes> },
      { path: "categories", element: <ProtectedRoutes><Category /></ProtectedRoutes> },
      { path: "categories/:catID", element: <ProtectedRoutes><SpecificCategory /></ProtectedRoutes> },
      { path: "details/:id", element: <ProtectedRoutes><ProductDetails /></ProtectedRoutes> },
      { path: "checkout/:pid", element: <ProtectedRoutes><Checkout /></ProtectedRoutes> },
      { path: "forgotpassword", element: <Forgotpassword /> },
      { path: "VerifyresetPassword", element: <VerifyresetPassword /> },
      { path: "Wishlist", element: <ProtectedRoutes><Wishlist /></ProtectedRoutes> },
      { path: "Allorders", element: <ProtectedRoutes><Allorders /></ProtectedRoutes> },
      { path: "resetuser", element: <ResetUSer /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "logout", element: <Logout /> },
      { path: "*", element: <ErrorPage /> }
    ]
  }])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
