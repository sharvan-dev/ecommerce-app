import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>
      
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>497226 Bishrampur Surajpur <br /> Chhattisgharh, INDIA, +91</p>
            <p className='t            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info.loomheritage.com@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              info.loomheritage.com@gmail.com
            </a>ext-gray-500'>Tel: <a href='tel:+917800133604' className='hover:text-black'>+91-7800133604</a> <br /> Email: <a href='mailto:info.loomheritage.com@gmail.com' className='hover:text-black'>info.loomheritage.com@gmail.com</a></p>
            <p className='font-semibold text-xl text-gray-600'>Careers at Loom Heritage</p>
            <p className='text-gray-500'>Learn more about our temes and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
