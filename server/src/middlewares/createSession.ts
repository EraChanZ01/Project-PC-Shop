const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const jwtSign = promisify(jwt.sign)
const db = require('../models')
import CONSTANTS from '../constants'
import TokenError from '../Errors/TokenError'


interface IToken {
    id: Number,
    phoneNumber: Number,
    firstName: string,
    lastName: string,
    password: string,
    createdAt: Date,
    updatedAt: Date
}

export const checkAuth = async (req: any, res: any, next: Function) => {
    try {
        const accessToken = req.headers.authorization;
        if (!accessToken) {
            throw 'err'
        }
        const tokenData = await jwt.verify(accessToken, CONSTANTS.SECRET)
        const userFind = await db.User.findOne({
            where: { id: tokenData.id },
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
        res.status(200).send({ data: userFind })
    } catch (e) {
        next(new TokenError('token error'))
    }
}

export const createdToken = async (
    {
        id,
        phoneNumber,
        firstName,
        lastName,
        password,
        createdAt,
        updatedAt
    }: IToken) => await jwtSign(
        {
            id,
            phoneNumber,
            firstName,
            lastName,
            password,
            createdAt,
            updatedAt
        },
        CONSTANTS.SECRET,
        {
            expiresIn: CONSTANTS.EXPIRES_TIME
        }
    )

export const verefyToken = async (req: any, res: any, next: Function) => {
    try {
        const accessToken = req.headers.authorization;
        if (!accessToken) {
            throw 'not accessToken'
        }
        req.tokenData = await jwt.verify(accessToken, CONSTANTS.SECRET)
        next()
    } catch (e) {
        next(e)
    }
}


export default {
    checkAuth,
    verefyToken
}