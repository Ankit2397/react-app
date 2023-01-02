import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';

function Hookform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
    className="flex flex-col gap-4"
     onSubmit={handleSubmit((data) => console.log(data))}>
         <h2>Form Validations</h2>
      <input {...register('firstName', { required: true })} 
       className="border-black border-2 w-[250px]"
       placeholder="Enter First Name"
       />
     {errors.firstName && <p>First name is required.</p>}
      <input
      className="border-black border-2 w-[250px]"
      placeholder="Enter Last Name"
      {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input 
      className="border-black border-2 w-[250px]"
      placeholder="Enter Age"
      {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input className="bg-blue-200 py-2 px-3 w-[200px]" type="submit" />
    </form>
  );
}
export default Hookform;