import ApplicationError from '../Errors/ApplicationError';
import { createdToken } from '../middlewares/createSession'
import bcrypt from 'bcrypt';
const db = require('../models')


export const registerUser = async (req: any, res: any, next: Function) => {
    try {
        const createUser = await db.User.create({ ...req.body, password: req.hashPass })
        res.status(200).send({ data: createUser })
    } catch (e) {
        next(new ApplicationError("register error", 500))
    }
}

export const loginUser = async (req: any, res: any, next: Function) => {
    try {
        const { phoneNumber, password } = req.body
        const userFind = await db.User.findOne({
            where: { phoneNumber: phoneNumber },
            include: [
                {
                    model: db.Product,
                    include: [
                        {
                            model: db.ComponentsProduct,
                            attributes: { exclude: ['productId', 'createdAt', 'updatedAt', 'ProductId'] }
                        }
                    ]
                }
            ]
        })
        const passwordCompare = await bcrypt.compare(password, userFind.password);
        if (passwordCompare) {
            const token = await createdToken({ ...userFind.dataValues })
            res.status(200).send({ data: userFind, token: token })
        }
    } catch (e) {
        next(new ApplicationError("Login error", 500))
    }
}

export default {
    registerUser,
    loginUser
}