import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
export default function ConfirmPassword() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is mendatory')
      .min(3, 'Password must be at 3 char long'),
    confirmPwd: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, reset, formState } = useForm(formOptions)
  const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4))
    return false
  }
  return (
    <div className="container mt-5">
      <h2> Confirm Password Validation</h2>
      <form onSubmit="">
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
   
            className={`form-control `}
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPwd"
            type="password"
         
            className={`form-control`}
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary text-blue-900">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}