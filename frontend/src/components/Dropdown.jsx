import { ArrowBack, ChevronRight } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { menus } from '../api/api'

const MainMenu = ({ setActiveMenu }) => (
    <ul className='flex flex-col'>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            <Link to='/desktop'>Desktop</Link>
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            <Link to='/laptop'>Laptop</Link>
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center' onClick={() => setActiveMenu('pc-components')}>
            PC Components <ChevronRight />
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            <Link to='/monitor'>Monitor</Link>
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            <Link to='/phone'>Phone</Link>
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            <Link to='/tablet'>Tablet</Link>
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            <Link to='/networking'>Networking</Link>
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center' onClick={() => setActiveMenu('accessories')}>
            Accessories <ChevronRight />
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center' onClick={() => setActiveMenu('gadget')}>
            Gadget <ChevronRight />
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center' onClick={() => setActiveMenu('office')}>
            Office Equipments <ChevronRight />
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            <Link to='/cameras'>Cameras</Link>
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            <Link to='/servers'>Servers</Link>
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            <Link to='/gaming'>Gaming</Link>
        </li>
        <li className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
            <Link to='/ips-ups'>IPS & UPS</Link>
        </li>
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
                <li key={index} className='flex justify-between hover:bg-emerald-100 px-5 h-8 items-center'>
                    <Link to={item.link}>
                        {item.label}
                    </Link>
                </li>
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
