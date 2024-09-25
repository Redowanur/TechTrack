import { Close, Menu, Search } from '@mui/icons-material'
import { CLOUDINARY_ID } from '../config/config'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import AuthContext from '../util/AuthContext'
import ProfileDropdown from './ProfileDropdown'
import Dropdown from './Dropdown'

const Header = ({ isNavBarShow, setIsNavBarShow }) => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
    const [isDropdownShow, setIsDropdownShow] = useState(false)
    const [isMouseOver, setIsMouseOver] = useState(false)

    return (
        <div className='bg-slate-100 h-20 w-full fixed top-0 flex flex-col justify-center items-center shadow-md z-10'>
            <div className='flex justify-between items-center w-full 2xl:w-[1400px] h-full px-5 2xl:px-0'>
                <div className='flex items-center'>
                    <div className='lg:hidden mr-5' onClick={() => setIsNavBarShow(!isNavBarShow)}>{isNavBarShow ? <Close /> : <Menu />}</div>
                    <div className='w-fit flex items-center'>
                        <img src={CLOUDINARY_ID + 'logo_cl3lsh'} className='h-10 lg:h-12' />
                    </div>
                </div>
                <div className='hidden lg:block ml-6 text-[15px] h-full'>
                    <ul className='flex gap-5 xl:gap-8 h-full'>
                        <Link to='/'><li className='hover:text-emerald-400 hover:underline hover:underline-offset-4 h-full flex items-center'>Home</li></Link>
                        <Link to='/watchlist'><li className='hover:text-emerald-400 hover:underline hover:underline-offset-4 h-full flex items-center'>Watchlist</li></Link>
                        <Link to='/add-product'><li className='hover:text-emerald-400 hover:underline hover:underline-offset-4 h-full flex items-center'>Add Product</li></Link>
                        <div
                            onMouseEnter={() => setIsMouseOver(true)}
                            onMouseLeave={() => setIsMouseOver(false)}
                            className='relative h-full flex items-center cursor-pointer'
                        >
                            <li className='hover:text-emerald-400 hover:underline hover:underline-offset-4'>
                                Categories
                            </li>
                            {isMouseOver && <Dropdown />}
                        </div>

                    </ul>
                </div>
                <div className='relative hidden lg:block'>
                    <input
                        className='text-sm w-48 xl:w-96 h-10 rounded-md pl-5 pr-11 focus:outline-none shadow-sm text-black'
                        placeholder='Search Products...'
                    />
                    <Search className='absolute top-2 right-2 text-gray-500' />
                </div>
                {!isAuthenticated ?
                    <div className='flex'>
                        <Link to='signin'><button className='hidden md:block bg-white hover:bg-gray-100 rounded-md px-4 py-2 mr-5'>Sign in</button></Link>
                        <Link to='signup'><button className='bg-emerald-200 hover:bg-emerald-300 rounded-md px-4 py-2 shadow-sm'>Sign up</button></Link>
                    </div> :
                    <div className='w-12 relative'>
                        <img src={CLOUDINARY_ID + 'profile_pic_ndjcpo'} className='rounded-full cursor-pointer' onClick={() => setIsDropdownShow(!isDropdownShow)} />
                        {isDropdownShow && <ProfileDropdown setIsAuthenticated={setIsAuthenticated} setIsDropdownShow={setIsDropdownShow} />}
                    </div>}
            </div>
        </div>
    )
}

export default Header
