import { Link } from 'react-router-dom'
import { CLOUDINARY_ID } from '../config/config'
import { ArrowForward } from '@mui/icons-material'

const HeroSection = () => {
    return (
        <div className='h-[430px] w-full'>
            <div
                className='h-full bg-cover bg-center bg-blend-darken bg-black bg-opacity-50'
                style={{
                    backgroundImage: `url(${CLOUDINARY_ID}bg_hc2vdw)`
                }}
            >
                <div className='w-full flex flex-col justify-center items-center gap-4 text-white h-full'>
                    <h1 className='text-7xl md:text-8xl tracking-wide text-emerald-300 font-amsterdam'>TECHTRACK</h1>
                    <p className='w-80 md:w-[450px] text-center text-xl tracking-wide'>Track Laptop, Desktop, PC components price in real time, get alert on price drop and many more.</p>
                    <Link ><button className='text-black bg-emerald-300 rounded-full px-10 py-3 shadow-sm'><ArrowForward/> Get Started</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
