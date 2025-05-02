import React, { useState } from 'react'
import Login from './components/screens/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductListing from './components/screens/ProductListing'
import Cart from './components/screens/Cart'
import ContactUs from './components/screens/ContactUs'
import ProductDetails from './components/screens/ProductDetails'
import Header from './components/utility components/Header'
import Signup from './components/screens/Signup'


const App = () => {

  return (

    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element = {<Signup/>}/>
        <Route path='dashboard' element={<ProductListing />} />
        <Route path='products' element={<ProductListing />} />
        <Route path='cart' element={<Cart />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='product-details/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App