import { Timeline } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Card = ({image, name, price, id}) => {
    return (
        <div className='shadow-all rounded-md p-4'>
            <img src={image} />
            <div className='h-[1px] bg-gray-300 mb-3'></div>
            <div className='relative h-44 md:h-40 lg:h-36 xl:h-32'>
                <h1 className='text-sm hover:text-orange-600 hover:underline cursor-pointer'>{name.length > 60 ? name.slice(0, 60) + '...' : name}</h1>
                <div className='absolute bottom-0 w-full'>
                    <p className='text-orange-500 font-bold'>{price}৳</p>
                    <Link to={'/products/' + id}>
                        <button className='bg-emerald-200 hover:bg-emerald-300 w-full py-1 rounded-md mt-2'><Timeline /><span> Price History</span></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
