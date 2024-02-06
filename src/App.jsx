import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import DashBoard from './pages/admin/dashBoard/DashBoard'
import NoPage from './pages/nopage/NoPage'
import MyState from './context/data/MyState'
import SignUp from './pages/ragistrations/SignUp'
import Login from './pages/ragistrations/Login'
import ProductCard from './components/productCard/ProductCard'
import ProductInfo from './pages/productInfo/ProductInfo'
import AddProducts from './pages/admin/pages/AddProducts'
import UpdateProducts from './pages/admin/pages/UpdateProducts'
const App = () => {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/productInfo/:id' element={<ProductInfo />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/addproduct' element={<AddProducts />} />
          <Route path='/updateproduct' element={<UpdateProducts />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </MyState>
  )
}

export default App