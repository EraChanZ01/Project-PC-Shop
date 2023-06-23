import express from 'express'
import productController from '../controller/productController'


const productRouter = express.Router()

productRouter.get('/:category', productController.getProduct)

export default productRouter