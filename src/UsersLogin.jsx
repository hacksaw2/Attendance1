import React from 'react'

function UsersLogin() {
  return (
    <div>
      <div className="userslogin shadow-gray-400 shadow-xl border-2 border-black w-96 h-[40vh] mt-2 p-2 text-center">
          <h2 className='  text-3xl font-serif mb-10'>Users Login</h2>
          <form >
        <div className='email'>
          <label htmlFor='email'>
            <strong className='text-lg'>Student ID:</strong>
          </label>
          <input
          className='ml-6 text-lg border-2 mb-4'
          type='text'
          placeholder='Enter your email'
          name='email'
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
  )
}

export default UsersLogin
