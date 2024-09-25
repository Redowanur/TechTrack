import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ isNavBarShow }) => {
    const [isMenuShow, setIsMenuShow] = useState(true)

    return (
        <div className={`w-72 sm:w-80 md:w-96 h-screen bg-white fixed z-10 left-0 transform ${isNavBarShow ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden shadow-lg`}>
            <div className='w-full h-12 relative'>
                <input
                    type='text'
                    className='w-full h-full pl-4 pr-10 focus:outline-none'
                    placeholder='Search Products...'
                />
                <Search className='absolute text-gray-500 top-3 right-2'/>
            </div>
            <div className='h-12 flex'>
                <div className={`w-1/2 h-full flex justify-center items-center font-bold ${isMenuShow ? 'bg-zinc-300 border-b-2 border-black' : 'bg-zinc-100 text-gray-500'}`} onClick={() => setIsMenuShow(true)}>MENU</div>
                <div className={`w-1/2 h-full flex justify-center items-center font-bold ${!isMenuShow ? 'bg-zinc-300 border-b-2 border-black' : 'bg-zinc-100 text-gray-500'}`} onClick={() => setIsMenuShow(false)}>CATEGORIES</div>
            </div>
            {isMenuShow ?
                <div className=''>
                    <ul className=''>
                        <Link to=''><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Home</li></Link>
                        <Link to=''><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Watchlist</li></Link>
                        <Link to=''><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Offers</li></Link>
                        <Link to=''><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Add Product</li></Link>
                    </ul>
                </div> :
                <div>
                    <ul className=''>
                        <Link to={'/desktop'}><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Desktop</li></Link>
                        <Link to='/laptop'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Laptop</li></Link>
                        <Link to='/pc-components'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>PC Components</li></Link>
                        <Link to='/monitor'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Monitor</li></Link>
                        <Link to='/phone'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Phone</li></Link>
                        <Link to='/tablet'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Tablet</li></Link>
                        <Link to='/networking'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Networking</li></Link>
                        <Link to='/accessories'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Accessories</li></Link>
                        <Link to='/gadget'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Gadget</li></Link>
                        <Link to='/office-equipments'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Office Equipments</li></Link>
                        <Link to='/cameras'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Cameras</li></Link>
                        <Link to='/servers'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Servers</li></Link>
                        <Link to='/gaming'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Gaming</li></Link>
                        <Link to='/ips-ups'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>IPS & UPS</li></Link>
                    </ul>
                </div>}
        </div>
    )
}

export default NavBar
