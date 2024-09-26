import { ArrowBack, ChevronRight } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { menus } from '../api/api'

const MainMenu = ({ setActiveMenu }) => (
    <ul className='flex flex-col'>
        <Link to='/desktop' className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            Desktop
        </Link>
        <Link to='/laptop' className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            Laptop
        </Link>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center' onClick={() => setActiveMenu('pc-components')}>
            PC Components <ChevronRight />
        </li>
        <Link to='/monitor' className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            Monitor
        </Link>
        <Link to='/phone' className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            Phone
        </Link>
        <Link to='/tablet' className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            Tablet
        </Link>
        <Link to='/networking' className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            Networking
        </Link>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center' onClick={() => setActiveMenu('accessories')}>
            Accessories <ChevronRight />
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center' onClick={() => setActiveMenu('gadget')}>
            Gadget <ChevronRight />
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center' onClick={() => setActiveMenu('office')}>
            Office Equipments <ChevronRight />
        </li>
        <Link to='/cameras' className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            Cameras
        </Link>
        <Link to='/servers' className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            Servers
        </Link>
        <Link to='/gaming' className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            Gaming
        </Link>
        <Link to='/ips-ups' className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            IPS & UPS
        </Link>
    </ul>
)

const Submenu = ({ setActiveMenu, items }) => (
    <>
        <div
            className='ml-3 mb-2 w-8 h-8 bg-gray-200 hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'
            onClick={() => setActiveMenu('main')}
        >
            <ArrowBack />
        </div>
        <ul className='flex flex-col'>
            {items.map((item, index) => (
                <Link to={item.link} key={index} className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
                    {item.label}
                </Link>
            ))}
        </ul>
    </>
)

const Dropdown = () => {
    const [activeMenu, setActiveMenu] = useState('main')

    return (
        <div className='absolute w-56 h-fit bg-white shadow-lg rounded-md z-10 top-16 py-4'>
            {activeMenu === 'main' ? (
                <MainMenu setActiveMenu={setActiveMenu} />
            ) : (
                <Submenu
                    setActiveMenu={setActiveMenu}
                    items={menus[activeMenu]}
                />
            )}
        </div>
    )
}

export default Dropdown
