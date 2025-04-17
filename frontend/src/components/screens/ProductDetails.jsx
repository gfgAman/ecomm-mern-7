import React, { useState } from 'react'
import { items } from '../../assets/data'
import { useParams } from 'react-router-dom'
import Header from '../utility components/Header'
import { useDispatch } from 'react-redux'
import { addTocart} from '../../../redux/cartSlice'


const ProductDetails = () => {

  
  const params = useParams()
  const { id } = params

  const dispatch = useDispatch()
  const addToCartHandler = () => {

    const obj = {
      title: items[id].title,
      description: items[id].description
    }
    dispatch(addTocart(obj))
  }
  return (
    <>

      <Header />
      <div className='flex flex-col'>
        <p>

          {items[id].title}
        </p>
        <p>

          {items[id].description}
        </p>

        <button className='text-red-600 bg-yellow-500 cursor-pointer' onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </>


  )
}

export default ProductDetails