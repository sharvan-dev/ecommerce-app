import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import LatestCollectio from '../components/LatestCollectio'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const categoryCards = [
  {
    name: 'Men',
    image: assets.men_dp,
    to: '/collection?category=Men'
  },
  {
    name: 'Women',
    image: assets.woman_dp,
    to: '/collection?category=Women'
  },
  {
    name: 'Kids',
    image: assets.kids_dp,
    to: '/collection?category=Kids'
  },
  {
    name: 'Footwear',
    image: assets.footwear_dp,
    to: '/collection?category=Footwear'
  }
]

const Home = () => {
  return (
    <div>
      <div className='mb-6 grid grid-cols-4 gap-x-1 gap-y-3 pt-2 sm:gap-x-3 md:gap-x-5'>
        {categoryCards.map((category) => (
          <Link
            key={category.name}
            to={category.to}
            className='group flex flex-col items-center justify-center text-center'
          >
            <div className='mb-2 h-[52px] w-[52px] overflow-hidden rounded-full border border-gray-200 bg-gray-100 shadow-sm transition-transform duration-200 group-hover:scale-[1.02] sm:mb-3 sm:h-[90px] sm:w-[90px] md:mb-4 md:h-[170px] md:w-[170px] lg:h-[220px] lg:w-[220px]'>
              <img
                src={category.image}
                alt={category.name}
                className='h-full w-full object-cover'
              />
            </div>
            <p className='text-[9px] font-medium tracking-[0.04em] text-[#1d1d1d] sm:text-xs md:text-xl lg:text-2xl'>
              {category.name}
            </p>
          </Link>
        ))}
      </div>
      <Hero />
      <LatestCollectio />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
