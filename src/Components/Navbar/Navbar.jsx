import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Components/Assets/freshcart-logo.svg'
import { tokenContext } from '../../Context/TokenContext';
import { cartContext } from '../../Context/AddtoCart';

function Navbar() {
  let { token, setToken } = useContext(tokenContext)
  let { cartCount } = useContext(cartContext)
  let success = useNavigate()
  function Logout() {
    localStorage.removeItem("userToken")
    setToken(null)
    success("/login")
  }
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 mb-3 position-fixed z-3 w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="">
          <img src={logo} alt="fresh cart logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {token ? <>
            <ul className="navbar-nav m-auto mb-2 py-2">
              <li className="nav-item">
                <NavLink style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }} to="" className='nav-link'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }} to="cart" className='nav-link'>Cart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }} to="Wishlist" className='nav-link'>Wishlist</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }} to="/products" className='nav-link'>Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }} to="/categories" className='nav-link'>Categories</NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }} to="/brands" className='nav-link'>Brands</NavLink>
              </li>

            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item d-flex align-items-center">
                <Link to={''} className='text-black'><i className='fab mx-2 fa-facebook'></i></Link>
                <Link to={''} className='text-black'><i className='fab mx-2 fa-twitter'></i></Link>
                <Link to={''} className='text-black'><i className='fab mx-2 fa-instagram'></i></Link>
                <Link to={''} className='text-black'><i className='fab mx-2 fa-youtube'></i></Link>
                <Link to={''} className='text-black'><i className='fab mx-2 fa-tiktok'></i></Link>
              </li>
              <li class="nav-item position-relative"><Link _ngcontent-ccr-c20="" to="/cart" class="nav-link ng-star-inserted" href="/Ecommerce/cart"><i _ngcontent-ccr-c20="" class="fa-solid fa-cart-shopping fs-3"></i>
                <div class="badge position-absolute text-white top-0 end-0 bg-main">{cartCount}</div></Link></li>

              <li className="nav-item m-auto">
                <button className="nav-link" onClick={Logout}>Logout</button>
              </li>
            </ul>
          </>
            : <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/register"> Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login"> Login</Link>
              </li>
            </ul>}
        </div>
      </div>
    </nav>
  </>
}
export default Navbar
