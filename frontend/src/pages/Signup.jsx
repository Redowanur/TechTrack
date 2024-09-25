import { Google } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CLOUDINARY_ID } from '../config/config'

const Signup = () => {
    return (
        <div className='min-h-screen flex justify-center'>
            <div 
                className='hidden lg:block h-screen w-72 xl:w-96 absolute left-0 bg-cover'
                style={{
                    backgroundImage: `url(${CLOUDINARY_ID}abstract_f3ra74)`
                }}
            ></div>
            <div className='w-96 md:w-[450px] lg:w-[500px] mt-20 lg:ml-20 pt-20'>
                <h1 className='text-xl font-semibold'>Sign Up to Techtrack</h1>
                <button className='w-full flex items-center justify-center gap-2 border-[1px] border-gray-300 rounded-full py-3 my-4'>
                    <Google />
                    <span>Sign up with google</span>
                </button>
                <div className='flex items-center justify-center gap-4'>
                    <div className='h-[1px] w-24 bg-gray-400'></div>
                    <div className='text-sm text-gray-500'>or sign up with email</div>
                    <div className='h-[1px] w-24 bg-gray-400'></div>
                </div>
                <form>
                    <div className='flex gap-6'>
                        <input
                            placeholder='Your name'
                            className='my-4 w-1/2 h-12 focus:outline-none rounded-xl px-4 bg-stone-200 bg-opacity-30 hover:bg-opacity-50'
                            type='text'
                        />
                        <input
                            placeholder='Your username'
                            className='my-4 w-1/2 h-12 focus:outline-none rounded-xl px-4 bg-stone-200 bg-opacity-30 hover:bg-opacity-50'
                            type='text'
                        />
                    </div>
                    <input
                        placeholder='Your email'
                        className='my-4 w-full h-12 focus:outline-none rounded-xl px-4 bg-stone-200 bg-opacity-30 hover:bg-opacity-50'
                        type='email'
                    />
                    <input
                        placeholder='Your password'
                        className='my-4 w-full h-12 focus:outline-none rounded-xl px-4 bg-stone-200 bg-opacity-30 hover:bg-opacity-50'
                        type='password'
                    />
                    <Link to='/signin'>
                        <button
                            className='w-full bg-black text-white rounded-full h-12 my-4'
                        >Create Account</button>
                    </Link>
                </form>
                <p className='flex justify-center'>Already have an account?<Link to='/signin'><span className='underline ml-2'> Sign In</span></Link></p>
            </div>
        </div>
    )
}

export default Signup
