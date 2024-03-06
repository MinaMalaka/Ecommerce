import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  let [err, setErr] = useState("");
  let [spinner, setSpinner] = useState(false);
  let success = useNavigate()
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rePassword: '',
  }
  async function sendData(value) {
    setSpinner(true)
    setErr("")
    let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', value)
      .catch(err => setErr(err.response.data.message))
    if (data.message === "success") {
      success("/login")
    }
  }

  let validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email("you must enter valid email like (mina@gmail.com)").required("email is required"),
    password: yup.string().matches(/^[A-z][a-z0-9]{3,15}$/, "password must be Start with a letter (either uppercase or lowercase)** Be between 6 and 9 characters in total ** Can only contain letters (A-Z or a-z) and numbers (0-9)").required("password is required"),
    rePassword: yup.string().oneOf([yup.ref("password")], "password doesn't match").required("repassword is required"),
    phone: yup.string().matches(/^01[0125][0-9]{8}$/, "you must enter egyptian number").required("phone is required")
  });

  let inputVal = useFormik({
    initialValues,
    validationSchema,
    onSubmit: sendData
  })
  return (
    <>
      <form className='container' style={{padding:'120px'}} onSubmit={inputVal.handleSubmit}>
        <h4 className='mb-3 fw-bolder' >Register Now:</h4>
        {err ? <div className='text-danger fw-bolder fs-3 '>{err}</div> : null}
        <div className="mb-2">
          <label htmlFor="fullName" className="form-label">Name : </label>
          <input type="text" className="form-control" id="userName" name="name" value={inputVal.values.name} onChange={inputVal.handleChange} onBlur={inputVal.handleBlur} placeholder='enter your name' />
          {inputVal.errors.name && inputVal.touched.name ? <div className='text-danger fw-bolder'>{inputVal.errors.name}</div> : null}
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">Email : </label>
          <input type="email" className="form-control" id="userEmail1" name="email" value={inputVal.values.email} onChange={inputVal.handleChange} onBlur={inputVal.handleBlur} placeholder='enter your email' />
          {inputVal.errors.email && inputVal.touched.email ? <div className='text-danger fw-bolder'>{inputVal.errors.email}</div> : null}
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="userPassword" name="password" value={inputVal.values.password} onChange={inputVal.handleChange} onBlur={inputVal.handleBlur} placeholder='enter your password' />
          {inputVal.errors.password && inputVal.touched.password ? <div className='text-danger fw-bolder fs-6'>{inputVal.errors.password}</div> : null}
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">RePassword</label>
          <input type="password" className="form-control" id="userRePassword" name="rePassword" value={inputVal.values.rePassword} onChange={inputVal.handleChange} onBlur={inputVal.handleBlur} placeholder='retype your password' />
          {inputVal.errors.rePassword && inputVal.touched.rePassword ? <div className='text-danger fw-bolder'>{inputVal.errors.rePassword}</div> : null}
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="iserPhone" name="phone" value={inputVal.values.phone} onChange={inputVal.handleChange} onBlur={inputVal.handleBlur} placeholder='enter your phone' />
          {inputVal.errors.phone && inputVal.touched.phone ? <div className='text-danger fw-bolder'>{inputVal.errors.phone}</div> : null}
        </div>
        <div className='position-relative '>
          <button type="submit" className="btn btn-success mt-2 bg-transparent text-dark position-absolute end-0 ">{spinner ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Register Now'}</button>
        </div>
      </form>
    </>
  )
}
export default Register
