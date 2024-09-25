import { AccountCircle, Logout, Settings } from '@mui/icons-material'
import { CLOUDINARY_ID } from '../config/config'

const ProfileDropdown = ({setIsAuthenticated, setIsDropdownShow}) => {
    return (
        <div className='w-72 bg-white absolute -right-2 top-16 rounded-lg shadow-md border-[1px] border-gray-300'>
            <div className='bg-white w-6 h-6 rotate-45 absolute right-5 -top-3 border-t-[1px] border-l-[1px] border-gray-300'></div>
            <div className='flex items-center gap-3 m-4'>
                <img src={CLOUDINARY_ID + 'profile_pic_ndjcpo'} className='w-16 rounded-full' />
                <div>
                    <p className='text-lg'>Redowanur21</p>
                    <p className='text-gray-400 text-sm'>Redowanur Rahman</p>
                </div>
            </div>
            <ul className='flex flex-col mt-4'>
                <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 px-4'>
                    <AccountCircle fontSize='small' /> Profile
                </li>
                <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 px-4'>
                    <Settings fontSize='small' /> Settings
                </li>
                <div className='h-[1px] bg-gray-200 my-2 mx-4'></div>
                <li className='flex items-center gap-2 cursor-pointer hover:bg-gray-100 py-2 px-4 mb-2' onClick={() => {
                    setIsAuthenticated(false)
                    setIsDropdownShow(false)
                }}>
                    <Logout fontSize='small' /> Sign out
                </li>
            </ul>
        </div>
    )
}

export default ProfileDropdown
