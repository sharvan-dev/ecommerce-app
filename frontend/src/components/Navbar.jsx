import { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible,setVsible] = useState(false)
    const location = useLocation()

    const {setShowSearch , getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
        
    }

    const handleSearchClick = () => {
        setShowSearch(true)
        if (!location.pathname.includes('collection')) {
            navigate('/collection')
        }
    }

    const handleProfileClick = () => {
        if (!token) {
            toast.info('Create an account or log in to access your profile.', {
                position: 'top-center',
                autoClose: 3000,
            })
            navigate('/login')
            return
        }

        navigate('/orders')
    }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <Link to='/' className='flex items-center'>
          <img src={assets.logo} className='h-9 w-auto max-w-[180px] object-contain sm:h-11' alt='Loom Heritage logo' />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 borde-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 borde-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 borde-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>
            <div className='group relative flex flex-col items-center gap-1'>
                <NavLink to='/blog' className='flex flex-col items-center gap-1'>
                    <p>BLOG</p>
                    <hr className='w-2/4 borde-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <div className='invisible absolute left-1/2 top-full z-10 w-48 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
                    <div className='border bg-white py-2 shadow-sm'>
                        <Link to='/blog/mens-denim' className='block px-4 py-2 text-xs text-gray-600 hover:text-black'>LOOM HERITAGE MEN&apos;S DENIM</Link>
                    </div>
                </div>
            </div>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 borde-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>

        </ul>

        <div className='flex items-center gap-5 sm:gap-6'>
             <button type='button' onClick={handleSearchClick} className='flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-transparent p-0 sm:h-6 sm:w-6' aria-label='Open search'>
                <img src={assets.search_icon} className='h-5 w-5 sm:h-5 sm:w-5' alt="Search" />
             </button>

              <div className='group relative'>                 
                 <button type='button' onClick={handleProfileClick} className='flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-transparent p-0 sm:h-6 sm:w-6' aria-label='Open profile'>
                    <img className='h-5 w-5 sm:h-5 sm:w-5' src={assets.profile_icon} alt="Profile" />
                 </button>
                  {/* Dropdown Menu */}
                  { token && 
                  <div className='group-hover:block hidden absolute dropdow-menu right-0 pt-4'>
                       <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                           <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>My Profile</p>
                           <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                           <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                       </div>
                  </div>}
              </div>
              <Link to='/cart' className='relative flex h-6 w-6 shrink-0 items-center justify-center'>
                    <img src={assets.cart_icon} className='h-5 w-5 sm:h-5 sm:w-5' alt="Cart" />
                    <p className='absolute right-[-2px] bottom-[2px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
              </Link>
              <img onClick={()=>setVsible(true)} src={assets.menu_icon} className='h-5 w-5 shrink-0 cursor-pointer sm:hidden' alt="Menu" />
        </div>

         {/* Sidebar menu for small screens */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVsible(false)} className='flex items-center gap-4 p-3'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVsible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVsible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                <NavLink onClick={()=>setVsible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                <NavLink onClick={()=>setVsible(false)} className='py-2 pl-6 border' to='/blog'>BLOG</NavLink>
                <NavLink onClick={()=>setVsible(false)} className='border-b py-2 pl-10 text-sm' to='/blog/mens-denim'>LOOM HERITAGE MEN&apos;S DENIM</NavLink>
                <NavLink onClick={()=>setVsible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
