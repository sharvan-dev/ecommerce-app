import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col  md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At Loom Heritage, we bridge the gap between timeless Indian artistry and modern everyday style. Rooted in traditional craftsmanship, our brand celebrates authentic weaving techniques to bring you unique, sustainable garments crafted from premium natural fabrics.
We believe that exceptional style should come with total peace of mind. That is why we combine effortless online shopping and fast doorstep delivery with exceptional, human-first customer service. From precise sizing guidance to our hassle-free 7-day replacement policy, every step of your journey with us is designed to be seamless, transparent, and tailored to you.
Wear the culture. Experience the comfort. Welcome to Loom Heritage.</p>
            <p>Punchy & Direct (Best for Homepages or Bullet Blocks)
Authentic Heritage Craftsmanship: Every piece celebrates traditional weaving techniques, preserving rich cultural artistry in every thread.
Pure & Sustainable Fabrics: Premium, natural textiles selected for superior comfort, durability, and breathability.
Unmatched Convenience: Effortless online browsing, secure payment options, and reliable doorstep delivery.
Exceptional Customer Service: Dedicated, personalized support at every step—backed by our straightforward 7-day replacement policy.
Option 2: Concise Feature Grid (Best for Landing Pages or Web Cards)</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>"Weweaving yesterday’s craftsmanship into today’s style—crafting timeless apparel that keeps tradition alive, one thread at a time."</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <p>Authentic Craftsmanship: Every piece celebrates traditional weaving techniques, preserving rich cultural artistry in every thread.
Pure & Sustainable Fabrics: We prioritize natural, high-quality textiles that offer exceptional comfort, breathability, and durability.
Unique & Timeless Designs: Distinctive patterns that blend heritage aesthetics with modern style—no mass-produced, cookie-cutter fashion.
Transparent Store Policies: Clear terms, straightforward size guides, and a hassle-free 7-day replacement policy on eligible items.</p>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>Every piece at Loom Heritage is meticulously crafted using high-quality weaves and traditional techniques, ensuring unmatched durability, comfort, and premium finish.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Enjoy a hassle-free experience with detailed sizing guides, secure checkout options, and reliable doorstep delivery tailored for your convenience.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>We prioritize your satisfaction. From personalized style inquiries to smooth, hassle-free exchange policies, our support team is always here for you.</p>
          </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
