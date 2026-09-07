import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        <div>
            <img src={assets.logo} className='mb-4 h-10 w-auto max-w-[180px] object-contain' alt='Loom Heritage logo' />
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown print took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
              <li><Link to='/terms-of-use'>Terms of Use</Link></li>
              <li>Returns</li>
              <li>Privacy policy</li>
          </ul>
        </div>  

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href='tel:+917800133604' className='hover:text-black'>+91 7800133604</a></li>
            <li><a href='mailto:info.loomheritage.com@gmail.com' className='hover:text-black'>info.loomheritage.com@gmail.com</a></li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026@ loomheritage.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
