import { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % assets.hero_banners.length)
    },3000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (slide) => {
    setCurrentSlide((slide + assets.hero_banners.length) % assets.hero_banners.length)
  }

  return (
    <div className='relative overflow-hidden border border-gray-400 bg-white' aria-label='Fashion banner carousel'>
      <div className='flex aspect-[16/9] transition-transform duration-300 ease-out' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {assets.hero_banners.map((banner, index) => (
          <img
            key={banner}
            src={banner}
            alt={`Loom Heritage fashion banner ${index + 1}`}
            className='h-full w-full shrink-0 object-contain'
          />
        ))}
      </div>

      <button type='button' onClick={() => goToSlide(currentSlide - 1)} className='absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white' aria-label='Previous banner'>
        &#8249;
      </button>
      <button type='button' onClick={() => goToSlide(currentSlide + 1)} className='absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-xl text-white' aria-label='Next banner'>
        &#8250;
      </button>

      <div className='absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2' aria-label='Choose banner'>
        {assets.hero_banners.map((banner, index) => (
          <button
            key={banner}
            type='button'
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full border border-white ${currentSlide === index ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Show banner ${index + 1}`}
            aria-current={currentSlide === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
