import { ArrowBack, ChevronRight, Search } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { menus } from '../api/api'

const Submenu = ({ setActiveMenu, items }) => (
    <>
        <div
            className='ml-3 mt-4 mb-1 w-8 h-8 flex justify-center items-center cursor-pointer'
            onClick={() => setActiveMenu('main')}
        >
            <ArrowBack />
        </div>
        <ul className='flex flex-col'>
            {items.map((item, index) => (
                <Link to={item.link} key={index} className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>
                    {item.label}
                </Link>
            ))}
        </ul>
    </>
)

const NavBar = ({ isNavBarShow }) => {
    const [isMenuShow, setIsMenuShow] = useState(true)
    const [activeMenu, setActiveMenu] = useState('main')

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
                        <Link><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Home</li></Link>
                        <Link to='watchlist'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Watchlist</li></Link>
                        <Link to='add-product'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Add Product</li></Link>
                    </ul>
                </div> :
                activeMenu === 'main' ?
                    <div>
                    <ul className=''>
                        <Link to={'/desktop'}><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Desktop</li></Link>
                        <Link to='/laptop'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Laptop</li></Link>
                        <li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300 flex justify-between pr-2' onClick={() => setActiveMenu('pc-components')}>PC Components<ChevronRight/></li>
                        <Link to='/monitor'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Monitor</li></Link>
                        <Link to='/phone'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Phone</li></Link>
                        <Link to='/tablet'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Tablet</li></Link>
                        <Link to='/networking'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Networking</li></Link>
                        <li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300 flex justify-between pr-2' onClick={() => setActiveMenu('accessories')}>Accessories<ChevronRight/></li>
                        <li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300 flex justify-between pr-2' onClick={() => setActiveMenu('accessories')}>Gadget<ChevronRight/></li>
                        <li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300 flex justify-between pr-2' onClick={() => setActiveMenu('accessories')}>Office Equipments<ChevronRight/></li>
                        <Link to='/cameras'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Cameras</li></Link>
                        <Link to='/servers'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Servers</li></Link>
                        <Link to='/gaming'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>Gaming</li></Link>
                        <Link to='/ips-ups'><li className='hover:bg-emerald-100 py-2 cursor-pointer pl-6 border-b-[1px] border-gray-300'>IPS & UPS</li></Link>
                    </ul>
                </div> :
                <Submenu
                    setActiveMenu={setActiveMenu}
                    items={menus[activeMenu]}
                />}
        </div>
    )
}

export default NavBar
