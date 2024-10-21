import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink,Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const barRef = useRef()

  // function OnClick(){
  //   barRef.current.style.width="25vw"

  // }

  return (
    <>
    <div className="page">
      <div className="navbar bg-[#2F4454] w-[100vw] h-16  ">
        <ul>
          <li className='text-2xl text-white font-serif p-4 ml-8'>NIMS</li>
          <li></li>
        </ul>



      </div>

      <div className="container flex">
      <div  className="sidenav fixed flex justify-center    bg-[#25274D] p-2 w-[15vw] h-[91vh]">



     <div className="svgs w-[10vw] h-10 ml-2 pt-4  ">


<NavLink to='/profile'>
      <div className="svg1 rounded-2xl h-[7vh]  text-white text-xl bg-gray-600 justify-center items-center  ">
        <div className="x flex justify-center items-center p-1 ">
<svg className='invert mr-2  ' fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 402.161 402.161" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M201.08,49.778c-38.794,0-70.355,31.561-70.355,70.355c0,18.828,7.425,40.193,19.862,57.151
				c14.067,19.181,32,29.745,50.493,29.745c18.494,0,36.426-10.563,50.494-29.745c12.437-16.958,19.862-38.323,19.862-57.151
				C271.436,81.339,239.874,49.778,201.08,49.778z M201.08,192.029c-13.396,0-27.391-8.607-38.397-23.616
				c-10.46-14.262-16.958-32.762-16.958-48.28c0-30.523,24.832-55.355,55.355-55.355s55.355,24.832,55.355,55.355
				C256.436,151.824,230.372,192.029,201.08,192.029z"/>
			<path d="M201.08,0C109.387,0,34.788,74.598,34.788,166.292c0,91.693,74.598,166.292,166.292,166.292
				s166.292-74.598,166.292-166.292C367.372,74.598,292.773,0,201.08,0z M201.08,317.584c-30.099-0.001-58.171-8.839-81.763-24.052
				c0.82-22.969,11.218-44.503,28.824-59.454c6.996-5.941,17.212-6.59,25.422-1.615c8.868,5.374,18.127,8.099,27.52,8.099
				c9.391,0,18.647-2.724,27.511-8.095c8.201-4.97,18.39-4.345,25.353,1.555c17.619,14.93,28.076,36.526,28.895,59.512
				C259.25,308.746,231.178,317.584,201.08,317.584z M296.981,283.218c-3.239-23.483-15.011-45.111-33.337-60.64
				c-11.89-10.074-29.1-11.256-42.824-2.939c-12.974,7.861-26.506,7.86-39.483-0.004c-13.74-8.327-30.981-7.116-42.906,3.01
				c-18.31,15.549-30.035,37.115-33.265,60.563c-33.789-27.77-55.378-69.868-55.378-116.915C49.788,82.869,117.658,15,201.08,15
				c83.423,0,151.292,67.869,151.292,151.292C352.372,213.345,330.778,255.448,296.981,283.218z"/>
			<path d="M302.806,352.372H99.354c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h203.452c4.142,0,7.5-3.358,7.5-7.5
				C310.307,355.73,306.948,352.372,302.806,352.372z"/>
			<path d="M302.806,387.161H99.354c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h203.452c4.142,0,7.5-3.358,7.5-7.5
				C310.307,390.519,306.948,387.161,302.806,387.161z"/>
		</g>
	</g>
</g>
</svg>
Profile
</div>
</div>
</NavLink>


<div className="svg2 rounded-2xl h-[7vh]  text-white text-xl bg-gray-600 justify-center items-center mt-4 ">
        <div className="x flex justify-center items-center p-1 ">

<svg className='invert mt-2 ml-1 mr-3' fill="#000000" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"/></svg>
Calender
</div>
</div>


<NavLink to='/academics'><div className="svg3 rounded-2xl h-[7vh]  text-white text-xl bg-gray-600 justify-center items-center mt-4 ">
        <div className="x flex justify-center items-center p-1 ">

<svg className='invert mt-1 ml-1 mr-3' fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,25.11H29v-.89a2,2,0,0,0-2-2H26V14.11h1a2,2,0,0,0,2-2v-.89h2a1,1,0,0,0,.43-1.9l-15-7.22a1,1,0,0,0-.86,0L.57,9.32A1,1,0,0,0,1,11.22H3v.89a2,2,0,0,0,2,2H6v8.11H5a2,2,0,0,0-2,2v.89H2a2,2,0,0,0-2,2V29a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V27.11A2,2,0,0,0,30,25.11Zm-14-21L26.62,9.22H5.38Zm-11,8v-.89H27v.89H5Zm19,2v8.11H21.5V14.11Zm-4.5,0v8.11H17V14.11Zm-4.5,0v8.11H12.5V14.11Zm-4.5,0v8.11H8V14.11ZM5,24.22H27v.89H5ZM30,28H2v-.89H30Z"/>
</svg>
Academics
</div>
</div></NavLink>



<NavLink to='/login' className={({isActive})=>`${isActive ? "bg-red-500":"bg-white"} `}>
<div className="svg4 rounded-2xl h-[7vh]  text-white text-xl bg-gray-600 justify-center items-center mt-4 ">
        <div className="x flex justify-center items-center p-1 ">

<svg className='invert mt-1 ml-1 mr-3' fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,25.11H29v-.89a2,2,0,0,0-2-2H26V14.11h1a2,2,0,0,0,2-2v-.89h2a1,1,0,0,0,.43-1.9l-15-7.22a1,1,0,0,0-.86,0L.57,9.32A1,1,0,0,0,1,11.22H3v.89a2,2,0,0,0,2,2H6v8.11H5a2,2,0,0,0-2,2v.89H2a2,2,0,0,0-2,2V29a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V27.11A2,2,0,0,0,30,25.11Zm-14-21L26.62,9.22H5.38Zm-11,8v-.89H27v.89H5Zm19,2v8.11H21.5V14.11Zm-4.5,0v8.11H17V14.11Zm-4.5,0v8.11H12.5V14.11Zm-4.5,0v8.11H8V14.11ZM5,24.22H27v.89H5ZM30,28H2v-.89H30Z"/>
</svg>
Login
</div>
</div>
</NavLink>

<NavLink to='/signup' className={({isActive})=>`${isActive ? "bg-red-500":"bg-white"} `}>
<div className="svg4 rounded-2xl h-[7vh]  text-white text-xl bg-gray-600 justify-center items-center mt-4 ">
        <div className="x flex justify-center items-center p-1 ">

<svg className='invert mt-1 ml-1 mr-3' fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,25.11H29v-.89a2,2,0,0,0-2-2H26V14.11h1a2,2,0,0,0,2-2v-.89h2a1,1,0,0,0,.43-1.9l-15-7.22a1,1,0,0,0-.86,0L.57,9.32A1,1,0,0,0,1,11.22H3v.89a2,2,0,0,0,2,2H6v8.11H5a2,2,0,0,0-2,2v.89H2a2,2,0,0,0-2,2V29a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V27.11A2,2,0,0,0,30,25.11Zm-14-21L26.62,9.22H5.38Zm-11,8v-.89H27v.89H5Zm19,2v8.11H21.5V14.11Zm-4.5,0v8.11H17V14.11Zm-4.5,0v8.11H12.5V14.11Zm-4.5,0v8.11H8V14.11ZM5,24.22H27v.89H5ZM30,28H2v-.89H30Z"/>
</svg>
Signup
</div>
</div>
</NavLink>



</div>




      

      </div>
      <div className="outlet">
      <Outlet/>
      </div>
      </div>
     
      </div>
    </>
  )
}

export default App
