import FeaturedCategory from '../components/FeaturedCategory'
import HeroSection from '../components/HeroSection'
import { popularProducts } from '../api/api'
import Card from '../components/Card'

const Home = () => {
    return (
        <div className='min-h-screen mt-20'>
            <HeroSection />
            <div className='h-full w-96 sm:w-[600px] md:w-[710px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px] mx-auto'>
                <FeaturedCategory />
                <div>
                    <h1 className='text-xl my-7'>Popular Products</h1>
                </div>
                <div className='flex justify-center items-center mb-10'>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                        {popularProducts.map(item => <Card image={item.image} name={item.name} price={item.price} id={item.id} key={item.id}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
