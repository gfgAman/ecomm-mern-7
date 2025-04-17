import React, { useState } from 'react'
import Login from './components/screens/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductListing from './components/screens/ProductListing'
import Cart from './components/screens/Cart'
import ContactUs from './components/screens/ContactUs'
import ProductDetails from './components/screens/ProductDetails'
import { createContext } from 'react'

export const cartContext = createContext()
const App = () => {
  const [obj, setObj] = useState({ title: '', description: '' })
  return (
    <cartContext.Provider value={obj}>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<ProductListing />} />
          <Route path='products' element={<ProductListing />} />
          <Route path='cart' element={<Cart />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='product-details/:id' element={<ProductDetails setObj={setObj} />} />
        </Routes>
      </BrowserRouter>
    </cartContext.Provider>

  )
}

export default App