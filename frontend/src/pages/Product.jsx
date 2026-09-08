import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency , addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState(null)
  const [size,setSize] = useState('')

  useEffect(() => {
    const product = products.find((item) => item._id === productId)

    setProductData(product || false)
    setActiveImageIndex(0)
    setSize('')
  }, [productId, products])

  useEffect(() => {
    if (!productData || productData.image.length < 2) return undefined

    const slider = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % productData.image.length)
    }, 4000)

    return () => window.clearInterval(slider)
  }, [productData])

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) => (
      currentIndex === 0 ? productData.image.length - 1 : currentIndex - 1
    ))
  }

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) => (currentIndex + 1) % productData.image.length)
  }

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX)
  }

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return

    const swipeDistance = event.changedTouches[0].clientX - touchStartX
    if (Math.abs(swipeDistance) > 40) {
      swipeDistance > 0 ? showPreviousImage() : showNextImage()
    }
    setTouchStartX(null)
  }

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ---------- Product Data ------------ */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* -------- Product Images ----------- */}
        <div className='flex-1 flex flex-col-col-reverse gap-3 sm:flex-row'>
          <div className='hidden sm:flex sm:flex-col overflow-y-scroll justify-normal sm:w-[18.7%]'>
             {
              productData.image.map((item,index)=>(
                <button
                  onClick={() => setActiveImageIndex(index)}
                  className={`sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${activeImageIndex === index ? 'ring-1 ring-black' : ''}`}
                  key={item}
                  type='button'
                >
                  <img src={item} className='w-full' alt={`${productData.name} view ${index + 1}`} />
                </button>
              ))
             }
          </div>
          <div className='hidden sm:block w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={productData.image[activeImageIndex]} alt={productData.name} />
          </div>

          <div
            className='sm:hidden w-full'
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className='relative aspect-[4/5] w-full overflow-hidden bg-gray-100'>
              <img
                className='h-full w-full object-cover'
                src={productData.image[activeImageIndex]}
                alt={`${productData.name} view ${activeImageIndex + 1}`}
              />
              {productData.image.length > 1 && (
                <>
                  <button
                    type='button'
                    onClick={showPreviousImage}
                    className='absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-xl text-gray-700 shadow'
                    aria-label='Previous product image'
                  >
                    &#8249;
                  </button>
                  <button
                    type='button'
                    onClick={showNextImage}
                    className='absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-xl text-gray-700 shadow'
                    aria-label='Next product image'
                  >
                    &#8250;
                  </button>
                </>
              )}
            </div>
            <div className='flex justify-center gap-2 py-4'>
              {productData.image.map((item, index) => (
                <button
                  type='button'
                  key={item}
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${activeImageIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                  aria-label={`View product image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* -------- Product Info --------- */}
        <div className='flex-1'>
           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
           <div className='flex items-center gap-1 mt-2'>
               <img src={assets.star_icon} alt="" className='w-3 5' />
               <img src={assets.star_icon} alt="" className='w-3 5' />
               <img src={assets.star_icon} alt="" className='w-3 5' />
               <img src={assets.star_icon} alt="" className='w-3 5' />
               <img src={assets.star_dull_icon} alt="" className='w-3 5' />
               <p className='pl-2'>(122)</p>
           </div>
           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
           <div className='flex flex-col gap-4 my-8'>
               <p>Select Size</p>
               <div className='flex gap-2'>
                  {productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                  ))}
               </div>
           </div>
           <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
           <hr className='mt-8 sm:w-4/5' />
           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original product.</p>
                <p>Case on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 10 days.</p>
           </div>
        </div>
      </div>

      {/* --------- Description & Review Section ------------ */}
      <div className='mt-20'>
        <div className='flex'>
           <b className='border px-5 py-3 text-sm'>Description</b>
           <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 text-sm text-gray-500'>
           <p>An e-commerce website is an online platform that facilitates the buying and selling of product or services over the internet. It serves as avritual marketplace where businesses and individuals can showcase their product, interact with customear, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
           <p>E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer. An e-commerce website is an online platform that facilitates the buying and selling of their product, interact with customear, and conduct transactions without the need for a physical presence.</p>
        </div>
      </div>

      {/* ----------- display related products-------------- */}

      <RelatedProducts
        productId={productData._id}
        category={productData.category}
        subCategory={productData.subCategory}
      />

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
