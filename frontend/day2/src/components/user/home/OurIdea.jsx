import React from 'react'
import h2bgimage2 from '../../../assets/h2-bg-image-2.png'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Product from '../Product'
const OurIdea = () => {
    return (
        <div className='bg-darkGreen min-h-screen relative flex w-full items-center'>
            <div className="w-1/2 relative p-24 mt-10 selection:text-white">
                <div className="text-white">
                    <p className='underline tracking-tighter font-semibold '>GET INSPIRED</p>
                    <p className='text-7xl font-semibold my-10'>Our gift ideas</p>
                    <p className=' text-gray-400  selection:text-white leading-7'>Let the beauty of what you love be what you do. Lorem Ipsum is simply dummy text of the printing and typesetting industry. There are many variations of passages.</p>
                </div>
                <div className="text-white flex items-center mt-48">
                    <p className='h-[1px] w-7/12 bg-white bg-opacity-50 mr-10'></p>
                    <div className="flex justify-center items-center">
                        <button className='p-4 mx-3 border-opacity-70 duration-300 hover:bg-white text-white hover:text-black text-lg font-bold border border-white'><FiChevronLeft /></button>
                        <button className='p-4 border-opacity-70 duration-300 hover:bg-white text-white hover:text-black text-lg font-bold border border-white'><FiChevronRight /></button>
                    </div>
                </div>
            </div>
            <img className='absolute left-32 bottom-0' src={h2bgimage2} />
            <div className="w-1/2 flex">
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default OurIdea