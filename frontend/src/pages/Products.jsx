import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { popularProducts } from '../api/api'
import { Filter, FilterList, Home, Timeline } from '@mui/icons-material'
import { menus } from '../api/api'
import Card from '../components/Card'

const Products = () => {
    const { category, subcategory } = useParams()
    const [allProducts, setAllProducts] = useState(popularProducts)
    const [filteredProducts, setFilteredProducts] = useState(popularProducts)
    const [breadCrumb, setBreadCrumb] = useState()
    const [header, setHeader] = useState()

    useEffect(() => {
        if(subcategory === undefined){
            const len = menus[category][0].link.length
            console.log(menus[category][0].link.slice(1, len))
            setBreadCrumb('/ '+menus[category][0].label)
            setHeader(menus[category][0].label)
        }
        else{
            menus[category].map(item => {
                if(item.link === '/' + category + '/' + subcategory){
                    console.log(item.link)
                    setBreadCrumb('/ '+item.parent+' / '+item.label)
                    setHeader(item.label)
                }
            })
        }
    }, [category])

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
                    <button className='bg-gray-100 py-1 px-2 rounded-md'><FilterList/> Filter</button>
                    <div>Sort by:
                        <select className='p-1 rounded-md ml-2 focus:outline-none'>
                            {options.map(option => <option value={option.value}>{option.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='flex justify-center items-center mb-10'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                        {filteredProducts.map(item => <Card image={item.image} name={item.name} price={item.price} id={item.id} key={item.id}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
