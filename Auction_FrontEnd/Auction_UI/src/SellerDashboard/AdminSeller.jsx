import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Shared/layout'
import Dashboard from './Page/Dashboard/Dashboard'
import Products from './Page/Products/Products'
import AddProducts from './Page/Products/AddProducts'

const AdminSeller = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/product' element={<Products />} />
          <Route path='/addProduct' element={<AddProducts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AdminSeller