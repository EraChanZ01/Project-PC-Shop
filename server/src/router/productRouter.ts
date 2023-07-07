import express from 'express'
import productController from '../controller/productController'
import checkToken from '../middlewares/createSession'

const productRouter = express.Router()

productRouter.get('/:category', productController.getProduct)
productRouter.post('/addFavorite', checkToken.verefyToken, productController.addProductToFavorite)

export default productRouter