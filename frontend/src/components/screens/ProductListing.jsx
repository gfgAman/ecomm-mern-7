import React from 'react'
import Header from '../utility components/Header'
import { items } from '../../assets/data.js'
import { useNavigate } from 'react-router-dom'
import Card from '../utility components/Card.jsx'

const ProductListing = () => {
  const navigate = useNavigate()
  

  const logoutHandler = () => {
    localStorage.removeItem('token')
    window.location.reload()
    navigate('/')
  }
  return (
    <div>
      <div className='grid md:grid-cols-3 gap-y-5'>



        {
          items.map(({ title, description, price, image, rating }, index) => (
            <div onClick={() => navigate(`/product-details/${index}`)}>
              <Card title={title} description={description} price={price} image={image} rating={rating} />
            </div>
          )
          )
        }
        <h1 onClick={logoutHandler}>Logout</h1>
      </div>
    </div>
  )
}

export default ProductListing