import React, { useRef } from 'react'
import { CLOUDINARY_ID } from '../config/config'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { feautured_categories } from '../api/api'

const FeaturedCategory = () => {
    // Reference for the scrollable category container
    const scrollContainerRef = useRef(null)

    // Function to handle scrolling
    const handleScroll = (direction) => {
        const scrollAmount = 300 // Adjust the scroll amount if necessary
        if (direction === 'forward') {
            scrollContainerRef.current.scrollLeft += scrollAmount
        } else {
            scrollContainerRef.current.scrollLeft -= scrollAmount
        }
    }
    return (
        <>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl my-7'>Featured Categories</h1>
                <div className='flex items-center gap-4'>
                    <div
                        className='w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'
                        onClick={() => handleScroll('backward')}
                    >
                        <ArrowBack />
                    </div>
                    <div
                        className='w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'
                        onClick={() => handleScroll('forward')}
                    >
                        <ArrowForward />
                    </div>
                </div>
            </div>

            <div
                className='flex md:gap-16 overflow-x-hidden scroll-smooth'
                ref={scrollContainerRef}  // Ref to control scroll
                style={{ scrollbarWidth: 'none' }}  // Optional: Hide scrollbar
            >
                {feautured_categories.map((item, index) => (
                    <div key={index} className='flex flex-col items-center gap-2 min-w-[120px]'>
                        <div className='w-20 h-20 rounded-full bg-gray-200 p-3'>
                            <img src={CLOUDINARY_ID + item.image} alt={item.name} />
                        </div>
                        <p className='text-center'>{item.name}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FeaturedCategory
