import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { popularProducts } from '../api/api'

const ProductPage = () => {
    const { id } = useParams()
    const [productData, setProductData] = useState()

    useEffect(() => {
        const productDetails = popularProducts.filter(item => item.id === Number(id))
        setProductData(productDetails)
        // console.log(productDetails)
        console.log(productData)
    }, [])

    return (
        <div className='min-h-screen mt-20'>
            {/* <div className='h-full w-96 sm:w-[600px] md:w-[710px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] mx-auto'>
                <div className='lg:flex'>
                    <div className='flex justify-center'>
                        <img src={productData.image} />
                    </div>
                    <div>
                        <h1 className='sm:text-lg md:text-xl'>{productData.name}</h1>
                        <div className='flex justify-between my-5'>
                            <div>
                                <h1 className='text-green-500 font-bold'>Maximum Price</h1>
                                <p>6200</p>
                            </div>
                            <div>
                                <h1 className='text-red-500 font-bold'>Minimum Price</h1>
                                <p>6000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {id}
        </div>
    )
}

export default ProductPage
