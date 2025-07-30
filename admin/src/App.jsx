import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '₹'

const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Try to get token from sessionStorage instead of localStorage
    const savedToken = sessionStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleSetToken = (newToken) => {
    if (newToken) {
      sessionStorage.setItem('adminToken', newToken);
    } else {
      sessionStorage.removeItem('adminToken');
    }
    setToken(newToken);
  };
  
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {!token
        ? <Login setToken={handleSetToken} />
        : <>
          <Navbar setToken={handleSetToken} />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/orders' element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default App
