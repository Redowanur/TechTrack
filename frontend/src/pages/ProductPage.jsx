import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { popularProducts } from '../api/api'
import { Cancel, OpenInNew, Search, Sort } from '@mui/icons-material'
import { BarChart, Bar, XAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
    { name: "Jan", uv: 4000 },
    { name: "Feb", uv: 3000 },
    { name: "Mar", uv: 2000 },
    { name: "Apr", uv: 2780 },
    { name: "May", uv: 1890 },
    { name: "Jun", uv: 2390 },
];

const Shop = ({ shop, price }) => {
    return (
        <div className='flex justify-between items-center p-4 border-t-2 border-gray-100'>
            <div className='flex items-center gap-3'>
                <input type="checkbox" id="" name="" value="" className='w-4 h-4' />
                <a href='https://startech.com.bd/' target='_' className='flex items-center gap-1 hover:underline hover:underline-offset-4 hover:font-semibold hover:text-orange-500 hover:cursor-pointer'>
                    <p>{shop}</p>
                    <OpenInNew fontSize='' />
                </a>
            </div>
            <div>Price: {price}৳</div>
        </div>
    );
};

const ProductPage = () => {
    const { id } = useParams()
    const [productData, setProductData] = useState()
    const [openIndex, setOpenIndex] = useState(null); // Tracks which accordion item is open

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Close if it's already open, otherwise open
    };

    const allShops = [
        { shop: "StarTech", price: '6200' },
        { shop: "Techland", price: '6200' },
        { shop: "Ryans", price: '6200' },
        { shop: "Vibe gaming", price: '6200' },
        { shop: "Gadget Nova", price: '6200' },
        { shop: "Bliss Electronics", price: '6200' },
        { shop: "Skyland", price: '6200' },
        { shop: "Tech Diversity", price: '6200' },
        { shop: "Ultratech", price: '6200' },
        { shop: "Computer Importer", price: '6200' },
        { shop: "PC House", price: '6200' },
        { shop: "Global Brand", price: '6200' },
        { shop: "Computer Mania", price: '6200' },
        { shop: "Potaka IT", price: '6200' },
        { shop: "Sell Tech", price: '6200' },
        { shop: "Computer Village", price: '6200' },
        { shop: "UCC BD", price: '6200' },
        { shop: "Creatus Computer", price: '6200' },
        { shop: "Nexus", price: '6200' },
        { shop: "PQS", price: '6200' },
        { shop: "System Builder", price: '6200' },
        { shop: "Four Star IT", price: '6200' },
        { shop: "Aristo computers", price: '6200' },
        { shop: "Onix Computer", price: '6200' },
        { shop: "Jazz Tech", price: '6200' },
        { shop: "Info Tech", price: '6200' },
        { shop: "BD Link", price: '6200' },
        { shop: "Diamu", price: '6200' },
        { shop: "Apple Gadget", price: '6200' },
        { shop: "NCLL", price: '6200' },
        { shop: "Perenial Computer", price: '6200' },
        { shop: "Eerna", price: '6200' },
        { shop: "Samata Computer", price: '6200' },
        { shop: "Powerline Computer", price: '6200' },
        { shop: "Computer Source", price: '6200' },
        { shop: "TechMonster BD", price: '6200' },
        { shop: "Universal Computer BD", price: '6200' },
        { shop: "MC Solution BD", price: '6200' },
        { shop: "Cell Computers", price: '6200' },
        { shop: "Smart Technologies", price: '6200' },
        { shop: "Computer Zone", price: '6200' },
        { shop: "Aroz Technology", price: '6200' },
    ];

    useEffect(() => {
        const productDetails = popularProducts.find(item => item.id === Number(id))
        setProductData(productDetails)
    }, [])

    const options = [
        { label: 'Today', value: 0 },
        { label: 'This week', value: 1 },
        { label: 'This month', value: 2 },
        { label: 'Last 6 months', value: 3 }
    ]

    return (
        <div className='min-h-screen mt-20'>
            <div className='h-full w-96 sm:w-[600px] md:w-[710px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] mx-auto'>
                {productData !== undefined &&
                    <div className='w-96 md:w-[500px] mx-auto lg:flex lg:w-full lg:justify-center lg:gap-10 pt-10'>
                        <div className='lg:w-1/2'>
                            <div className='flex justify-center'>
                                <img src={productData.image} />
                            </div>
                            <div className=''>
                                <h1 className='text-xl'>{productData.name}</h1>
                            </div>
                            <form className='mt-5'>
                                <input type="checkbox" id="" name="" value="" />&nbsp;&nbsp;
                                <label for="vehicle1"> Add to watchlist</label>
                            </form>
                            <div className='flex justify-end items-center'>
                                <select className='p-1 rounded-md focus:outline-none mt-8'>
                                    {options.map(option => <option value={option.value}>{option.label}</option>)}
                                </select>
                            </div>
                            <ResponsiveContainer height={400} className='mt-5'>
                                <BarChart data={data} margin={{ top: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                                    <XAxis dataKey="name" tick={{ fill: "#8884d8" }} />
                                    <Bar dataKey="uv" fill="#8884d8" radius={[10, 10, 10, 10]} label={{ position: "top", fill: "#8884d8", fontSize: 14 }} />
                                </BarChart>
                            </ResponsiveContainer>
                            <p className='text-center mt-4 text-lg lg:mb-10'>Last 6 months prices in StarTech</p>
                        </div>
                        <div className='lg:w-1/2 py-10'>
                            <button className='bg-emerald-200 hover:bg-emerald-300 rounded-md px-4 py-2 shadow-sm'><Sort /> Sort by price</button>
                            <p className='mt-5 ml-1 text-gray-500 text-sm'>N:B: Select a shop to see the price history.</p>
                            <div className="mt-6 rounded-md bg-white shadow-all">
                                <div className='relative'>
                                    <input
                                        className='focus:outline-none w-full rounded-t-md h-14 px-11'
                                        placeholder='Search shop...'
                                    />
                                    <Search className='absolute left-3 top-4 text-gray-500' />
                                    <Cancel className='absolute right-3 top-4 text-gray-400' />
                                </div>
                                <div className="max-h-[900px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                    {allShops.map((item, index) => (
                                        <Shop key={index} shop={item.shop} price={item.price} />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ProductPage
