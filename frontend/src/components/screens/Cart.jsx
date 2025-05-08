
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../../../redux/cartSlice';


const Cart = () => {

  const data = useSelector(state => state.cartSlice.cart)

  console.log(data, 'dataaaa');

  // Optional: Handle case where context might be empty
  // if (!data || !data.title) {
  //   return <div>Cart is empty</div>
  // }
  const dispatch = useDispatch()
  return (
    <div>
      {

        data.map(item => (
          <>
            <b className='text-bold'>{item.name}</b>
            <h4>{item.price}</h4>
          </>
        ))
      }
      {data.length > 0 && <button onClick={() => dispatch(deleteCart(data))}>empty cart</button>}
    </div>
  )
}

export default Cart
