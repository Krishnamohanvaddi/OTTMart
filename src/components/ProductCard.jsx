import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const ProductCard = ({product}) => {

  const dispatch=useDispatch();

  const handleAddToCart=(e,product)=>{
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added successfully!!!")
  }

  return (
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 cursor-pointer '>
        <img src={product.image} alt='' className='w-full h-48 mb-4 object-contain'/>
        <h3 className='text-lg font-semifold'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className='flex items-center mt-2'>
           <FaStar className='text-yellow-500'></FaStar>
           <FaStar className='text-yellow-500'></FaStar>
           <FaStar className='text-yellow-500'></FaStar>
           <FaStar className='text-yellow-500'></FaStar>

        </div>

        <div className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 
        group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-300 overflow-hidden'
        onClick={(e)=>handleAddToCart(e,product)}
        >
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block whitespace-nowrap'>Add to Cart</span>
            </div>
    </div>
)
}

export default ProductCard