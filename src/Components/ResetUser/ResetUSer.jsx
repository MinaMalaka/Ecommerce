import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

 function ResetUSer() {
  let success = useNavigate()
  async function resetUserCredentials(data) {
    return await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', {
      "email": data.email,
      "newPassword": data.newPassword
    }).then((data) => {
      if (data?.data?.token) {
        success("/login")
      }
    }
    ).catch(err => console.log(err))
  }
  let resetForm = useFormik({
    initialValues: {
      email: "",
      newPassword: ""
    },
    onSubmit: resetUserCredentials
  })

  return (
    <>
      <form className="container" style={{ padding: '120px' }} onSubmit={resetForm.handleSubmit}>
        <div className="row justify-content-center mt-4">
          <h3 className='fw-bolder'>please enter your email and new password</h3>
          <input type="text" className="form-control mt-2 ms-4" placeholder="email" id="userCode" value={resetForm.values.email} onChange={resetForm.handleChange} name="email" aria-describedby="emailHelp" />
          <input type="password" className="form-control mt-2 ms-4" placeholder="new password" id="userCode" value={resetForm.values.newPassword} onChange={resetForm.handleChange} name="newPassword" aria-describedby="passHelp" />
        </div>
        <button type="submit" className="btn btn-outline-success mt-3 me-auto ms-0">Reset Password</button>
      </form>
    </>
  )
}
export default ResetUSer
