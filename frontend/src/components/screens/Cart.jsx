
import { useSelector } from 'react-redux'


const Cart = () => {

  const data = useSelector(state => state.cartSlice.cart)

  console.log(data,'dataaaa');

  // Optional: Handle case where context might be empty
  // if (!data || !data.title) {
  //   return <div>Cart is empty</div>
  // }

  return (
    <div>
      {

        data.map(item => (
          <>
            <b className='text-bold'>{item.title}</b>
            <h4>{item.description}</h4>
          </>
        ))
      }
    </div>
  )
}

export default Cart
