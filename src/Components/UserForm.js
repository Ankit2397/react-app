import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
const ContactNumberMask = '+{00}(00000)-00000'
const EmailAddressMask = /^\S*@?\S*$/
const Name = ""
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
    localStorage.setItem('user',JSON.stringify(dataRes))
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
            <IMaskInput
              type="text"
              name="name"
              {...register('name')}
              className="form-control"
              required
              mask={Name}
              placeholder="Please Enter Your Full Name"
              min={2}
              max={20}
            onAccept={(value, mask) => console.log(value, mask)}
            />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <IMaskInput
              type="email"
              name="email"
              {...register('email')}
              className="form-control"
              mask={EmailAddressMask}
              placeholder="Please Enter Email"
              onAccept={(value, mask) => console.log(value, mask)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Mobile</label>
            <IMaskInput
              type="text"
              name="mobile"
              {...register('mobile')}
              className="form-control"
              required
              mask={ContactNumberMask}
              placeholder="+91(695)416-6542"
              onAccept={(value, mask) => console.log(value, mask)}
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