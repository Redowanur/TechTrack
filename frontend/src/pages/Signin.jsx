import { Google } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../util/AuthContext'
import { CLOUDINARY_ID } from '../config/config'

const Signin = () => {
    const { setIsAuthenticated } = useContext(AuthContext)

    return (
        <div className='min-h-screen flex justify-center'>
            <div
                className='hidden lg:block h-screen w-72 xl:w-96 absolute left-0 bg-cover'
                style={{
                    backgroundImage: `url(${CLOUDINARY_ID}abstract_f3ra74)`
                }}
            ></div>
            <div className='w-96 md:w-[450px] lg:w-[500px] mt-20 lg:ml-20 pt-20'>
                <h1 className='text-xl font-semibold'>Sign In to Techtrack</h1>
                <button className='w-full flex items-center justify-center gap-2 border-[1px] border-gray-300 rounded-full py-3 my-4'>
                    <Google />
                    <span>Sign in with google</span>
                </button>
                <div className='flex items-center justify-center gap-4'>
                    <div className='h-[1px] w-24 bg-gray-400'></div>
                    <div className='text-sm text-gray-500'>or sign in with email</div>
                    <div className='h-[1px] w-24 bg-gray-400'></div>
                </div>
                <form>
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
                    <Link to='/'>
                        <button
                            className='w-full bg-black text-white rounded-full h-12 my-4'
                            onClick={() => setIsAuthenticated(true)}
                        >Sign In</button>
                    </Link>
                </form>
                <p className='flex justify-center'>Don't have an account?<Link to='/signup'><span className='underline ml-2'> Sign Up</span></Link></p>
            </div>
        </div>
    )
}

export default Signin
