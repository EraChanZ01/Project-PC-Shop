const db = require('../models')
const ApplicationError = require('../Errors/ApplicationError')

const getProduct = async (req: any, res: any, next: Function) => {
    try {
        const { params: { category } } = req
        const productFind = await db.Product.findAll({
            where: {
                category: category
            },
            include: [
                {
                    model: db.ComponentsProduct,
                    attributes: { exclude: ['productId', 'createdAt', 'updatedAt', 'ProductId'] }
                }
            ]
        })
        res.status(200).send({ data: productFind })
    } catch (e) {
        next(ApplicationError('Failed to get products', 404))
    }
}

export default {
    getProduct
}