import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000').replace(/\/$/, '')
export const currency = '₹'

const getTokenRole = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1])).role
  } catch {
    return ''
  }
}

const App = () => {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    // Try to get token from sessionStorage instead of localStorage
    const savedToken = sessionStorage.getItem('adminToken');
    const savedRole = getTokenRole(savedToken) || sessionStorage.getItem('adminRole');
    if (savedToken && savedRole) {
      setToken(savedToken);
      setRole(savedRole);
    } else {
      sessionStorage.removeItem('adminToken');
      sessionStorage.removeItem('adminRole');
    }
  }, []);

  const handleSetToken = (newToken, newRole = '') => {
    if (newToken) {
      sessionStorage.setItem('adminToken', newToken);
      sessionStorage.setItem('adminRole', newRole || getTokenRole(newToken));
    } else {
      sessionStorage.removeItem('adminToken');
      sessionStorage.removeItem('adminRole');
    }
    setToken(newToken);
    setRole(newRole || getTokenRole(newToken));
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
            <Sidebar role={role} />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add token={token} />} />
                {role === 'admin' && <Route path='/list' element={<List token={token} />} />}
                {role === 'admin' && <Route path='/orders' element={<Orders token={token} />} />}
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default App
