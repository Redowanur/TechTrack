import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { popularProducts } from '../api/api'
import { FilterList, Home } from '@mui/icons-material'
import { menus } from '../api/api'
import Card from '../components/Card'
import { CLOUDINARY_ID } from '../config/config'

const Products = () => {
    const { category, subcategory } = useParams()
    const [categorizedProducts, setCategorizedProducts] = useState(popularProducts)
    const [breadCrumb, setBreadCrumb] = useState()
    const [header, setHeader] = useState()

    useEffect(() => {
        if (subcategory === undefined) {
            setCategorizedProducts(popularProducts.filter(item => item.type === menus[category][0].link.slice(1)))
            setBreadCrumb('/ ' + menus[category][0].label)
            setHeader(menus[category][0].label)
        }
        else {
            const sub = menus[category].find(i => i.link.slice(category.length + 2) === subcategory)
            setCategorizedProducts(popularProducts.filter(item => item.type === sub.link.slice(category.length + 2)))
            setBreadCrumb('/ ' + sub.parent + ' / ' + sub.label)
            setHeader(sub.label)
        }
    }, [category, subcategory])

    const options = [
        { label: 'Default', value: 0 },
        { label: 'Popularity', value: 1 },
        { label: 'Average rating', value: 2 },
        { label: 'Latest', value: 3 },
        { label: 'Price (Low > High)', value: 4 },
        { label: 'Price (High > Low)', value: 5 },
    ]

    return (
        <div className='min-h-screen mt-20'>
            <div className='h-full w-96 sm:w-[600px] md:w-[710px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] mx-auto'>
                <div className='text-gray-500 flex items-center pt-10'>
                    <Home className='' />
                    <span>{breadCrumb}</span>
                </div>
                <h1 className='text-xl mb-5 pt-5'>{header}</h1>
                <div className='mb-4 py-2 px-3 rounded-md shadow-all flex items-center justify-between'>
                    <button className='bg-gray-100 py-1 px-2 rounded-md'><FilterList /> Filter</button>
                    <div>Sort by:
                        <select className='p-1 rounded-md ml-2 focus:outline-none'>
                            {options.map(option => <option value={option.value}>{option.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='flex justify-center items-center mb-10'>
                    {categorizedProducts.length > 0 ? (
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                            {categorizedProducts.map(item => (
                                <Card image={item.image} name={item.name} price={item.price} id={item.id} key={item.id} />
                            ))}
                        </div>
                    ) : (
                        <img src={CLOUDINARY_ID + 'no_results_h5k3xx'}/>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Products
