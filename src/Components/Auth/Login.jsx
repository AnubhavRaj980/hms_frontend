import React from 'react'
import logo from '../../Images/logo.jpg'
import arrow_icon from '../../Images/forward_arrow_Icon.png'
import google_icon from '../../Images/google_icon.jpg'

const Login = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='relative flex flex-col border-8 border-slate-600 rounded-md h-[40rem] w-[30rem] px-8'>

          {/* -----------------------Logo------------------------- */}
          <div className='absolute flex flex-initial w-[25rem] top-[32px] justify-center '>
            <img src={logo} alt="logo" className='h-[7rem]' />
          </div>

          {/* ---------------------------SignIn text----------------------  */}
          <div className='absolute top-[10rem] w-[25rem]'>
            <div className='font-bold w-[25rem] text-[33px]'>
              Sign In
            </div>
            <div>
              <span className='text-gray-500'>New User? </span><span className='font-semibold'>Sign Up</span>
            </div>
          </div>

          {/* --------------------------Email And Password------------------------------------ */}

          <div className='absolute top-[16rem] w-[25rem]'>

            {/* ---------------------Email Address-------------------- */}
            <div className='font-semibold'>Email address</div>
            <div className='my-[8px]'>
              <input type="text " className='top-[18rem] rounded-md border-2 border-slate-400 p-[5px] w-[25rem]' placeholder='Email' />
            </div>

            {/* -----------------------------Password--------------------- */}
            <div className='font-semibold grid grid-cols-2'>
              <div>Password</div>
              <div className='text-right'>Forget Password?</div>
            </div>
            <div className='my-[8px]'>
              <input type="text " className='top-[18rem] rounded-md border-2 border-slate-400 p-[5px] w-[25rem]' placeholder='Email' />
            </div>

            {/* ------------------------Button---------------------------- */}

            <div className='flex flex-col '>

              {/* -----------------------------------SignIn----------------------- */}
              <button className='rounded-md border-2 border-black bg-black mt-[20px] h-[38px] text-white font-semibold'>Sign In 
              <img src={arrow_icon} alt="forward_arrow_icon" className='inline-block ml-2' />
              </button>

              {/* ---------------------------------Google-------------------------- */}
              <button className='rounded-md border-2 border-slate-500 mt-[20px] h-[38px] font-semibold'>
                <img src={google_icon} alt="google_icon" className='inline-block mr-2 '/>Sign in with Google</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login