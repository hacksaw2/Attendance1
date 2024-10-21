import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Login from './Login.jsx'
import UsersLogin from './UsersLogin.jsx'
import AdminLogin from './AdminLogin.jsx'
import Signup from './Signup.jsx'
import Academics from './Academics.jsx'
import Profile from './Profile.jsx'



const  router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

<Route path='/login' element={<Login/>}>

<Route index  element={<UsersLogin/>}/>
<Route path='/login/adminlogin' element={<AdminLogin/>}/>
</Route>

<Route path='/signup' element={<Signup/>}/>
<Route path='/academics' element={<Academics/>}/>
<Route path='/profile' element={<Profile/>}/>





    </Route>

    

    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
