import ApplicationError from '../Errors/ApplicationError';
const db = require('../models')

const getProduct = async (req: any, res: any, next: Function) => {
    try {
        const { params: { category }, query: { order } } = req
        const productFind = await db.Product.findAll({
            where: {
                category: category
            },
            order: [order.split('_')],
            include: [
                {
                    model: db.ComponentsProduct,
                    attributes: { exclude: ['productId', 'createdAt', 'updatedAt', 'ProductId'] }
                }
            ]
        })
        res.status(200).send({ data: productFind })
    } catch (e) {
        next(new ApplicationError('Failed to get products', 500))
    }
}
const addProductToFavorite = async (req: any, res: any, next: Function) => {
    try {
        const { userId, productId } = req.body
        const product = await db.Product.findByPk(productId)
        const findFavoriteProduct = await db.UserFavoriteProducts.findOne({
            where: { productId, userId }
        })
        if (findFavoriteProduct) {
            const deleteFavoriteProduct = await findFavoriteProduct.destroy()
            return res.status(200).send({
                data: { Products: [product], delete: true }
            })
        } else {
            const favoriteProduct = await db.UserFavoriteProducts.create({ productId, userId })
            return res.status(200).send({
                data: { Products: [product], delete: false }
            })
        }
    } catch (e) {
        next(new ApplicationError('Failed to get products', 500))
    }
}

export default {
    getProduct,
    addProductToFavorite
}