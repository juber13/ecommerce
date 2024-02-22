import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import DashBoard from './pages/admin/dashBoard/DashBoard'
import NoPage from './pages/nopage/NoPage'
import MyState from './context/data/MyState'
import SignUp from './pages/ragistrations/SignUp'
import Login from './pages/ragistrations/Login'
import ProductInfo from './pages/productInfo/ProductInfo'
import AddProducts from './pages/admin/pages/AddProducts'
import UpdateProducts from './pages/admin/pages/UpdateProducts'


const App = () => {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/order' element={
            // <ProtectedRoutes>
              <Order />
            // </ProtectedRoutes>
          } />

          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductInfo />} />

          <Route path='/dashboard' element={
            // <ProtectedRoutesForAdmin>
              <DashBoard />
            // </ProtectedRoutesForAdmin>
          } />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/addproduct' element={
            // <ProtectedRoutesForAdmin>
              <AddProducts />
            // </ProtectedRoutesForAdmin>
          } />
          <Route path='/updateproduct' element={
            // <ProtectedRoutesForAdmin>
              <UpdateProducts />
            // </ProtectedRoutesForAdmin>
          } />

          <Route path='/*' element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </MyState>
  )
}

export default App


// export const ProtectedRoutes = ({ children }) => {
//   if (localStorage.getItem('user')) {
//     return children
//   }
//   else {
//     return <Navigate to='/login' />
//   }
// }


// export const ProtectedRoutesForAdmin = ({ children }) => {
//   const admin = JSON.parse(localStorage.getItem('user'))
//   if (admin?.user?.email === 'juberk1010@gmail.com') {
//     return children
//   }
//   else {
//     return <Navigate to='/login' />
//   }
// }
