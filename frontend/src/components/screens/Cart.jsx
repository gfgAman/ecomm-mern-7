import React, { useContext } from 'react'
import { cartContext } from '../../App'
import { useSelector } from 'react-redux'


const Cart = () => {

  const data = useSelector(state=>state.cartSlice.cart)

  console.log(data);

  // Optional: Handle case where context might be empty
  // if (!data || !data.title) {
  //   return <div>Cart is empty</div>
  // }

  return (
    <div>
      {/* <h2>Cart</h2>
      <p>Title: {data.title}</p>
      <p>Description: {data.description}</p> */}
      ucbsb
    </div>
  )
}

export default Cart
