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
        const findFavoriteProduct = await db.UserFavoriteProducts.findOne({
            where: { userId, productId }
        })
        if (findFavoriteProduct) {
            const deleteFavoriteProduct = await findFavoriteProduct.destroy()
            return res.status(200).send({
                data: { favoriteProduct: [{ userId, productId }], delete: true }
            })
        } else {
            const favoriteProduct = await db.UserFavoriteProducts.create({ userId, productId })
            return res.status(200).send({
                data: { favoriteProduct: [favoriteProduct], delete: false }
            })
        }
    } catch (e) {
        next('Failed to get products', 404)
    }
}

export default {
    getProduct,
    addProductToFavorite
}