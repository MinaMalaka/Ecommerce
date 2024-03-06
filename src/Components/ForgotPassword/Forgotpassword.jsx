import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

 function Forgotpassword() {
  let success = useNavigate();
  let [fogotMsg, setFogotMsg] = useState("")
  async function handleForgotPass(email) {
    return await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', {
      "email": email.email
    }).then((data) => {
      if (data?.data?.statusMsg === "success") {
        success('/VerifyresetPassword')
      }
    }
    ).catch(err => setFogotMsg(err.message))
  }

  let forgotForm = useFormik({
    initialValues: {
      email: ""
    },
    onSubmit: handleForgotPass
  })

  return (
    <>
      <form className="container" style={{ padding: '120px' }} onSubmit={forgotForm.handleSubmit}>
        <div className="row justify-content-center mt-4">
          <h3 className='fw-bolder'>please enter your email to send verification code</h3>
          <input type="text" className="form-control mt-2 ms-4 " placeholder="email" id="userEmail1" value={forgotForm.values.email} onChange={forgotForm.handleChange} name="email" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-outline-success mt-3">verify</button>
      </form>
      <h4 className='text-danger fw-bolder'>{fogotMsg}</h4>
    </>
  )
}
export default Forgotpassword
