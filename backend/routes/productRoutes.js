import express from 'express'
import { products } from '../controller/productController.js'

export const productRouter = express.Router()

productRouter.get('/getAllProducts', products)