import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoCards = () => {

        const info=[
            {
                icon:<FaShippingFast className='text-3xl text-orange-500'/>,
                title:'Free Shipping',
                description:'Get your orders delivered with no extra cost',
            },    {
                icon:<FaHeadset className='text-3xl text-orange-500'/>,
                title:'Support 24/7',
                description:'We are here to assist you at anytime',
            },
            {
                icon:<FaMoneyBillWave className='text-3xl text-orange-500'/>,
                title:'100% Money Back',
                description:'Full refund if you are not satisfied',
            },
            {
                icon:<FaLock className='text-3xl text-orange-500'/>,
                title:'Payment Secure',
                description:'Your payment is safe with us',
            },
            {
                icon:<FaTag className='text-3xl text-orange-500'/>,
                title:'Discount',
                description:'Enjoy the best prices on our products',
            },
        ];
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {info.map((item,index)=>(
                <div key={index} className='flex flex-col items-center text-center p-4 shadow-md border rounded-lg
                transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    {item.icon}
                    <h3 className='mt-4 text-lg font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoCards