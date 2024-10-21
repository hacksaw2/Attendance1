import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Login() {
  return (
    <div className=' bg-[#EDE8F5] text-black flex justify-center items-center w-[85vw] h-[90vh] ml-[15vw]'>
      <div className="x">
      <div className="container w-96 h-10 flex mb-6 shadow-xl">
        <NavLink to='/login'  className={({isActive})=>`${isActive ? "bg-white":"bg-red-500"} text-center`}><div className="container1 w-48  h-10 mt-2">Users Login</div></NavLink>
        <NavLink to='/login/adminlogin'  className={({isActive})=>`${isActive ? "bg-red-500":"bg-white"} text-center `}><div className="container2 w-48 h-10 mt-2"> Admins Login</div></NavLink>
      </div>


      <div className="login">
        <Outlet/>
        
        <div className="adminlogin"></div>
      </div>
      </div>
    </div>
  )
}

export default Login
