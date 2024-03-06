import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function VerifyresetPassword() {
  let success = useNavigate()
  async function resetPass(userCode) {
    return await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
      "resetCode": userCode.code
    }).then(data => {
      if (data?.data?.status === "Success") {
        localStorage.setItem("userToken", data?.data?.token)
        success("/resetuser")
      }
    }).catch(err => console.log(err))
  }
  let forgotForm = useFormik({
    initialValues: {
      code: ""
    },
    onSubmit: resetPass
  })
  return (
    <>
      <form className="container" style={{ padding: '120px' }} onSubmit={forgotForm.handleSubmit}>
        <div className="row justify-content-center mt-4">
          <h3 className='fw-bolder'>please enter your verification code</h3>
          <input type="text" className="form-control mt-2 ms-4" placeholder="code" id="userCode" value={forgotForm.values.code} onChange={forgotForm.handleChange} name="code" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-outline-success mt-3 me-auto ms-0">verify</button>
      </form>
    </>
  )
}
