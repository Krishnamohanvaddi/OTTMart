import React, { useEffect } from 'react'
import { categories, mockData } from '../assets/MockData'
import homepagee from '../assets/Images/homepagee.png'
import InfoCards from '../components/InfoCards'
import CategoriesSection from '../components/CategoriesSection'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productSlice'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'


const Home = () => {

    const dispatch=useDispatch();
    const products=useSelector(state=>state.product);
    useEffect(()=>{
        dispatch(setProducts(mockData))
    },[]);
  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
            <div className='w-full md:w-3/12'>
                    <div className='bg-orange-600 text-white text-xs font-bold px-2 py-2.5'> SHOP BY CATEGORIES</div>
                    <ul className='space-y-4 bg-grey-100 p-3 border'>
                        {categories.map((category,index)=>(
                            <li key={index} className='flex items-center text-sm font-medium'>   
                            <div className='w-2 h-2 border border-red-600 rounded-full mr-2'></div>
                            {category}</li>
                        ))}
                    </ul>
                </div> 

                <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                    <img src={homepagee} alt='' className='h-full w-full'/>
              
                <div className='absolute bottom-11 left-8'>
                    {/* <h2 className='text-3xl font-bold'>Welcome to OTTMART</h2> */}
                    <p className='text-xl mt-12 font-bold text-grey-800'>Trusted Services</p>
                    <button className='bg-orange-600 px-8 py-1.5 text-white mt-4 hover:bg-orange-700
                    transform transition-transform duration-300 hover:scale-105'>Shop Now</button>
                </div>

            </div>
            </div>

            <InfoCards/>
            <CategoriesSection/>
            <div className='container mx-auto py-12'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                {products.products.slice(0,5).map(((product)=>(
                    <ProductCard product={product}/>
                )))}
            </div>
            </div>

          
        </div>
          
        <Shop/>
        </div>
    
  )
}

export default Home