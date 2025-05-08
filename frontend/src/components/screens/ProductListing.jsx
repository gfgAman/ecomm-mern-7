import React, { useEffect, useState } from 'react'
import Header from '../utility components/Header'
import { items } from '../../assets/data.js'
import { useNavigate } from 'react-router-dom'
import Card from '../utility components/Card.jsx'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {productDetail } from '../../../redux/cartSlice.jsx'
import ProductDetails from './ProductDetails.jsx'


const ProductListing = () => {
  const [products, setProducts] = useState([])
  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/getAllProducts')
    setProducts(response?.data);
  }

  const dispatch = useDispatch()
  useEffect(() => {
    fetchData()
  }, [])
  const navigate = useNavigate()
  const logoutHandler = () => {
    localStorage.removeItem('token')
    window.location.reload()
    navigate('/')
  }

  const onProductDetailHandler = (_id,name, description, price, image, rating, category) => {
    const obj = {
      _id:_id,
      name: name,
      description: description,
      price: price,
      image: image,
      rating: rating,
      category: category
    }

    
    dispatch(productDetail(obj))
    navigate(`/product-details/${_id}`)
  }
  return (
    <div>
      <div className='grid md:grid-cols-3 gap-y-5'>



        {
          products.map(({_id, name, description, price, image, rating, category }, ) => (
            <div key={_id} onClick={() => onProductDetailHandler(_id,name, description, price, image, rating, category)}>
              <Card name={name} description={description} price={price} category={category} image={image} rating={rating} />
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