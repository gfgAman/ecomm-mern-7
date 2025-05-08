import React, { useState } from 'react'
import { items } from '../../assets/data'
import { useParams } from 'react-router-dom'
import Header from '../utility components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
// import { addToCart} from '../../../redux/cartSlice'


const ProductDetails = () => {

  
  const product = useSelector(state=>state.cartSlice.product)
  const dispatch = useDispatch()
  const addToCartHandler = ()=>{
    dispatch(addToCart(product))
  }
  
  return (
    <>

      
      <div className='flex flex-col'>
        <p>

          {product.name}
        </p>
        <p>

          {product.price}
        </p>

        <button className='text-red-600 bg-yellow-500 cursor-pointer'  onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </>


  )
}

export default ProductDetails