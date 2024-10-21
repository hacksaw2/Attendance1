import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Signup() {
   const [name, setName] = useState('')
   const [userId, setUserId] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigate = useNavigate()

   const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,userId,email,password})
    .then(result=>{console.log(result)

          navigate('/login')
    })
    .catch(err=> console.log(err))
   }



  return (
    <div className=' bg-[#EDE8F5] text-black flex justify-center items-center w-[85vw] h-[90vh] ml-[15vw]  '>
      <div className="x">
     


      <div className="signup">
      <div className="userssignup shadow-gray-400 shadow-xl border-2 border-black w-96 h-[50vh] mt-2 p-2 text-center">
          <h2 className='  text-3xl font-serif mb-10'>Users Signup</h2>
          <form onSubmit={handleSubmit} >

         

          <div className='name'>
          <label htmlFor='email'>
            <strong className='text-lg'>Student Name:</strong>
          </label>
          <input
          className='ml-6 text-lg border-2 mb-4'
          type='text'
          placeholder='Enter your name'
          name='name'
          onChange={(e)=> setName(e.target.value)} />


        </div>


        <div className='email'>
          <label htmlFor='email'>
            <strong className='text-lg'>Student ID:</strong>
          </label>
          <input
          className='ml-6 text-lg border-2 mb-4'
          type='text'
          placeholder='Enter your ID'
          name='email'
          onChange={(e)=> setUserId(e.target.value)} />


        </div>

        <div className='name'>
          <label htmlFor='email'>
            <strong className='text-lg'>Email:</strong>
          </label>
          <input
          className='ml-6 text-lg border-2 mb-4'
          type='text'
          placeholder='Enter your email'
          name='name'
          onChange={(e)=> setEmail(e.target.value)} />


        </div>

        <div>
          <label htmlFor='email'>
            <strong className='text-lg'>
              Password:
            </strong>
          </label>
          <input
          className='ml-6 text-lg border-2 mb-4'
          type='password'
          placeholder='Enter your password'
          name='password'
          onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <button className='bg-red-700 p-2 rounded-md'>
        Login
      </button>
      <p className='mt-3'> Register?</p>
      </form>
      


        </div>
    </div>
        
       
      </div>
      </div>
    
  )
}

export default Signup
