import React from 'react'
import Header from '../utility components/Header'
import { items } from '../../assets/data.js'
import { useNavigate } from 'react-router-dom'

const ProductListing = () => {
  const navigate = useNavigate()
  return (
    <div><Header/>
    <div className='flex justify-between'>

    {
      items.map((item,index)=>(
        <div>
        <h1>{item.title}</h1>
        <button className='bg-blue-500 text-white' onClick={()=>navigate(`product-details/${index}`) }>view product</button>
        </div>
      ))
    }
    </div>
    </div>
  )
}

export default ProductListing