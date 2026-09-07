import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <main className='border-t pb-20 pt-8'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='text-center text-2xl sm:text-3xl'>BLOG</h1>
        <p className='mt-3 text-center text-sm text-gray-500'>Style notes, wardrobe inspiration, and stories from Loom Heritage.</p>

        <div className='mt-10 border-t'>
          <Link to='/blog/mens-denim' className='block border-b py-6 transition-colors hover:text-gray-500'>
            <p className='text-xs text-gray-500'>LOOM HERITAGE MEN&apos;S DENIM</p>
            <h2 className='mt-2 text-lg font-medium sm:text-xl'>DENIM DONE RIGHT: STYLING YOUR LOOM HERITAGE DENIM JACKET FOR HIM</h2>
            <p className='mt-2 text-sm text-gray-600'>Four ways to style your Loom Heritage denim jacket for weekends, streetwear, double denim, and evenings out.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Blog
