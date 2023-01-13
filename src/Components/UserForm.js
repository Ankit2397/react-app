import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
export default function UserForm() {
  const { register, handleSubmit, reset } = useForm()
  const [user, inituser] = useState(null)
  useEffect(() => {
    setTimeout(
      () =>
        inituser({
          name: 'Test',
          email: 'Test@mcu.com',
          mobile: '202 555 0191',
        }),
      800,
    )
  }, [])
  useEffect(() => {
    reset(user)
  }, [user])
  function onSubmit(dataRes) {
    // console.log(dataRes)
    localStorage.setItem('user4',JSON.stringify(dataRes))
    const Data = localStorage.getItem('user');
    const NewData =JSON.parse(Data);
    console.log("form" ,NewData);
     console.log([user.name ,user.email ,user.mobile])
     alert("Your value is Sumbited")
     function again(e){
      e({
        name: '',
        email: '',
        mobile: '',
      })
     }
    // localStorage.clear(); To clear all
    // localStorage.removeItem('user') To clear particular key
    return false

  }
  return (
    <div className="w-[500px]  my-2 mx-auto">
      <h2 className="text-center">React Hook Form</h2>
      {user && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              {...register('name')}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register('email')}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>mobile</label>
            <input
              type="text"
              name="mobile"
              {...register('mobile')}
              className="form-control"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary mb-2 text-blue-900 w-[120px] text-center my-2 mx-auto">
              Submit
            </button>
            <button
              type="button"
              onClick={() =>
                reset({
                  name: '',
                  email: '',
                  mobile: '',
                })
              }
              className="btn btn-danger text-red-900 w-[120px] text-center my-2 mx-auto"
            >
              Reset
            </button>
          </div>
        </form>
      )}
      {!user && (
        <div className="text-center p-3">
          <span className="spinner-border spinner-border-sm align-center"></span>
        </div>
      )}
    </div>
  )
}