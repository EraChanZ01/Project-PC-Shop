const db = require('../models')
const ApplicationError = require('../Errors/ApplicationError')

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
        next('Failed to get products', 404)
    }
}
const addProductToFavorite = async (req: any, res: any, next: Function) => {
    try {
        const { userId, productId } = req.body
        const favoriteProduct = await db.UserFavoriteProducts.create({ userId, productId })
        res.status(200).send({ data: [favoriteProduct] })
    } catch (e) {
        next('Failed to get products', 404)
    }
}

export default {
    getProduct,
    addProductToFavorite
}