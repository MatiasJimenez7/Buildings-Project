import React from 'react'
import "./Contact.css"
import {useForm} from "react-hook-form"


const Contact = () => {
  const mensaje = () => {
    return "Enviado"
  }
  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div onSubmit={handleSubmit(onSubmit)} className='contenedor-form'>
      <form  className="form">
        <h2>Registration Form</h2>
        <input className='input' type="text" placeholder='Name' {...register("name", {
          required: true
        })}/>
        <input className='input' type="text" placeholder='Surname' {...register("Surname", {
          required: true
        })}/>
        <input className='input' type="text" placeholder='Phone' {...register("Phone")}/>
        <input className='input' type="text" placeholder='Email' {...register("Email")}/>
        <input onClick={mensaje} className='inputSubmit' type="submit" value="enviar" />
        {errors.name?.type === "required" && <p>Complete all fields</p>}
        {errors.Surname?.type === "required" && <p>Complete all fields</p>}
        {errors.Phone?.type === "required" && <p>Complete all fields</p>}
        {errors.Email?.type === "required" && <p>Complete all fields</p>}
      </form>
    </div>
    
  )
}

export default Contact