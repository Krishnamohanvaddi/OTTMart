import React from 'react'
import Movies from '../assets/Images/movies.png'
import Music from '../assets/Images/music.png'
import Sports from '../assets/Images/sports.png'


const CategoriesSection = () => {

    const categories=[
        {
            title:'Movies',
            imgUrl:Movies,
        },
        {
            title:'Music',
            imgUrl:Music,
        },
        {
            title:'Sports',
            imgUrl:Sports,
        },
    ];
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {categories.map((card,index)=>(
            <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer '>
            <img src={card.imgUrl} alt='' className='w-full h-full rounded-lg shadow-md object-cover'/>
            <div className='absolute bottom-20 left-2'>
                <p className='text-xl font-bold'>{card.title}</p>
                <p className='text-gray-600'>View All</p>
            </div>
            </div>
        ))}
    </div>
  )
}

export default CategoriesSection