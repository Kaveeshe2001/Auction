import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Shared/layout'
import Dashboard from './Page/Dashboard/Dashboard'
import Product from './Page/Products/Product'
import Order from './Page/Order/Order'
import AddProducts from './Page/Products/AddProducts'

const AdminSeller = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/product' element={<Product />} />
          <Route path='/addProduct' element={<AddProducts />} />
          <Route path='/orders' element={<Order />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AdminSeller