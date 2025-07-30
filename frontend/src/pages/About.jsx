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
            <p>Forever was born out of a passion that never fades, a spark that ignited the soul and refused to be extinguished. It is the relentless pursuit of dreams, the echo of desires that resound across time</p>
            <p>Every moment, every heartbeat, carries the legacy of that passion, growing stronger with each passing day. Forever is not just a word—it's the energy of an unyielding spirit, the promise of an enduring journey fueled by love, purpose, and an unwavering will</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>"Our mission at Forever is to empower individuals to reach their fullest potential by providing the tools, resources, and support they need to thrive. We are dedicated to inspiring confidence, nurturing growth, and fostering a community where everyone can feel valued and supported. Through innovation, commitment, and passion, we aim to make a lasting impact, helping others to not only dream big but to achieve greatness that lasts a lifetime."</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>Quality Assurance product is designed to ensure that every product we offer meets the highest standards of excellence</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>At Forever, we understand the importance of convenience in today's fast-paced world. Our products and services are designed with your ease and comfort in mind, offering seamless experiences that save you time and effort.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>At Forever, exceptional customer service is at the core of our values. We are dedicated to providing personalized, attentive support to ensure every experience exceeds your expectations. Our team is committed to being responsive, knowledgeable, and proactive, always ready to assist you with a smile</p>
          </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
