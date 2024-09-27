import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { popularProducts } from '../api/api'
import { Line } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const productPriceData = {
    labels: [
        'October',
        'November',
        'December',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
    ],
    datasets: [
        {
            label: 'StartTech',
            data: [4200, 4200, 4250, 4500, 4150, 4100, 4000, 4050, 4300, 4300, 4400, 4400],
            borderColor: 'rgb(75, 192, 192)',
            fill: false,
            tension: 0.1
        },
        {
            label: 'Techland',
            data: [4100, 4050, 4250, 4500, 4150, 4100, 4000, 4050, 4280, 4300, 4400, 4400],
            borderColor: 'red',
            fill: false,
            tension: 0.1
        },
        {
            label: 'Bliss Electronics',
            data: [4200, 4200, 4250, 4400, 4150, 4100, 4000, 4050, 4300, 4300, 4430, 4400],
            borderColor: 'orange',
            fill: false,
            tension: 0.1
        },
        {
            label: 'Gadget Nova',
            data: [4200, 4200, 4250, 4500, 4150, 4150, 4000, 4050, 4350, 4300, 4400, 4400],
            borderColor: '',
            fill: false,
            tension: 0.1
        },
    ]
}

const ProductPage = () => {
    const { id } = useParams()
    const [productData, setProductData] = useState()

    useEffect(() => {
        const productDetails = popularProducts.find(item => item.id === Number(id))
        setProductData(productDetails)
    }, [])

    return (
        <div className='min-h-screen mt-20'>
            <div className='h-full w-96 sm:w-[600px] md:w-[710px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] mx-auto'>
                {productData !== undefined &&
                    <div className='w-96 md:w-[500px] mx-auto lg:flex lg:w-full lg:justify-center lg:gap-10'>
                        <div className='lg:w-1/2'>
                            <div className='flex justify-center'>
                                <img src={productData.image} />
                            </div>
                            <div className=''>
                                <h1 className='text-xl'>{productData.name}</h1>
                                <div class="flex justify-center my-4">
                                    <table class="w-full text-left text-sm">
                                        <thead class="bg-gray-200 text-gray-700 uppercase text-xs font-semibold">
                                            <tr>
                                                <th class="px-6 py-3 border-r-2 border-white text-lg">max price</th>
                                                <th class="px-6 py-3 text-lg">min price</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                            <tr class="bg-gray-50">
                                                <td class="px-6 py-4 border-r-2 border-white text-lg">6300৳</td>
                                                <td class="px-6 py-4 text-lg">6200৳</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-1/2 lg:pt-16'>
                            <Line data={productPriceData} />
                            <div class="overflow-x-auto">
                                <table class="min-w-full text-left text-sm">
                                    <thead class="bg-gray-200 text-gray-700 uppercase text-xs font-semibold">
                                        <tr>
                                            <th class="px-6 py-3">shop</th>
                                            <th class="px-6 py-3">highest price</th>
                                            <th class="px-6 py-3">lowest price</th>
                                            <th class="px-6 py-3">current price</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                        <tr class="bg-white">
                                            <td class="px-6 py-4">StartTech</td>
                                            <td class="px-6 py-4">6300৳</td>
                                            <td class="px-6 py-4">6200৳</td>
                                            <td class="px-6 py-4">6100৳</td>
                                        </tr>
                                        <tr class="bg-gray-50">
                                            <td class="px-6 py-4">Techland</td>
                                            <td class="px-6 py-4">6300৳</td>
                                            <td class="px-6 py-4">6200৳</td>
                                            <td class="px-6 py-4">6100৳</td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4">Gadget Nova</td>
                                            <td class="px-6 py-4">6300৳</td>
                                            <td class="px-6 py-4">6200৳</td>
                                            <td class="px-6 py-4">6100৳</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ProductPage
