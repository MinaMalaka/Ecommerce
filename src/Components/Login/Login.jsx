import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { tokenContext } from '../../Context/TokenContext';
function Login() {
  let [err, setErr] = useState("");
  let [spinner, setSpinner] = useState(false);
  let { token, setToken } = useContext(tokenContext)
  let success = useNavigate()
  async function sendData(value) {
    setSpinner(true)
    setErr("")
    let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', value)
      .catch(err => setErr(err.response.data.message))
    localStorage.setItem("userToken", data.token)
    setToken(data.token)
    if (data.message === "success") {
      success("/")
    }
  }
  let validationSchema = yup.object({
    email: yup.string().email("you must enter valid email like (mina@gmail.com)").required("email is required"),
    password: yup.string().matches(/^[A-z][a-z0-9]{3,15}$/, "password is invalid").required("password is required"),
  });
  let initialValues = {
    email: "",
    password: ""
  }

  let loginForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: sendData
  })
  return (
    <>
      <div className="container" style={{ padding: '120px' }}>
        <div className="row">
          <form className='my-5 col-md-8 m-auto' onSubmit={loginForm.handleSubmit}>
            <h3 className='mb-3 fw-bolder'>Login Now</h3>
            {err ? <div className='text-danger alert-danger fw-bolder fs-3'>{err}</div> : null}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
              <input type="email" className="form-control" id="userEmail1" name="email" aria-describedby="emailHelp" value={loginForm.values.email} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} />
              {loginForm.errors.email && loginForm.touched.email ? <small className='text-danger alert-danger fw-bolder'>{loginForm.errors.email}</small> : null}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password :</label>
              <input type="password" className="form-control" id="userPassword" name="password" value={loginForm.values.password} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} />
              {loginForm.errors.password && loginForm.touched.password ? <small className='text-danger alert-danger fw-bolder'>{loginForm.errors.password}</small> : null}
            </div>
            <div className='d-flex justify-content-between'>
              <Link className="fw-bolder text-success " to={"/forgotpassword"}>Forgot Password?</Link>
              <button type="submit" className="btn btn-success d-block ">{spinner ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Login Now'}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Login
