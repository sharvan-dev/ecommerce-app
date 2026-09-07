import React, { useContext, useEffect } from 'react'
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Blog from './pages/Blog'
import MensDenim from './pages/MensDenim'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import TermsOfUse from './pages/TermsOfUse'
import { ShopContext } from './context/ShopContext'

const App = () => {
  const location = useLocation()
  const { token } = useContext(ShopContext)

  useEffect(() => {
    if (!token && ['/collection', '/cart', '/orders'].includes(location.pathname)) {
      toast.info('Create an account or log in to access your profile and shop.', {
        position: 'top-center',
        autoClose: 3000,
      })
    }
  }, [location.pathname, token])

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/mens-denim' element={<MensDenim/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/verify' element={<Verify/>} />
        <Route path='/terms-of-use' element={<TermsOfUse/>} />
      </Routes>
      <Footer/>                         
    </div>
  )
}

export default App
