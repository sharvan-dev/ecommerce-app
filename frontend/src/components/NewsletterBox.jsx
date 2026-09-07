import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const NewsletterBox = () => {
   const backendUrl = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000').replace(/\/$/, '')
   const [email, setEmail] = useState('')
   const [isSubmitting, setIsSubmitting] = useState(false)
   const [offerCode, setOfferCode] = useState('')

   const onSubmitHandler = async (event) => {
       event.preventDefault();
     setIsSubmitting(true)

     try {
       const response = await axios.post(`${backendUrl}/api/newsletter/subscribe`, { email })

       if (!response.data.success) {
         toast.error(response.data.message)
         return
       }

       setOfferCode(response.data.offerCode)
       setEmail('')
       toast.success(response.data.message)
     } catch (error) {
       toast.error(error.response?.data?.message || 'Unable to subscribe right now.')
     } finally {
       setIsSubmitting(false)
     }
   }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 15% off</p>
        <p className='text-gray-400 mt-3'>
         Subscribe to receive your exclusive 15% discount offer.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' value={email} onChange={(event) => setEmail(event.target.value)} required />
          <button type='submit' disabled={isSubmitting} className='bg-black text-white text-xs px-10 py-4 disabled:cursor-not-allowed disabled:opacity-60'>{isSubmitting ? 'SENDING...' : 'SUBSCRIBE'}</button>
        </form>
        {offerCode && <p className='text-sm text-gray-700'>Your 15% offer code: <strong>{offerCode}</strong></p>}
      
    </div>
  )
}

export default NewsletterBox
