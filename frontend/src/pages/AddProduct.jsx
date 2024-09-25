import React from 'react'

const AddProduct = () => {
    return (
        <div className='min-h-screen mt-20'>
            <div className='h-full w-96 sm:w-[600px] md:w-[710px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] mx-auto'>
                <div className='py-5 text-lg text-center'>
                    <p className=''>Didn't find your desired product?</p>
                    <p>Add product link to get details.</p>
                </div>
                <div className='flex flex-col md:flex-row md:justify-center items-center gap-5'>
                    <input
                        className='w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-10 rounded-md pl-5 pr-11 focus:outline-none shadow-sm text-black bg-gray-100'
                        placeholder='Add Product Link...'
                    />
                    <button className='bg-emerald-300 rounded-md px-4 py-2 shadow-sm'>Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
