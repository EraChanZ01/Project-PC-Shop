const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const jwtSign = promisify(jwt.sign)
const jwtVerify = promisify(jwt.verify)
const db = require('../models')



const EXPIRES_TIME = 100

const secret = 'qwerty'
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
        const tokenData = await jwt.verify(accessToken, secret)
        const userFind = await db.User.findOne({
            where: { id: tokenData.id }
        })
        res.status(200).send({ data: userFind })
    } catch (e) {
        next(e)
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
        secret,
        {
            expiresIn: EXPIRES_TIME
        }
    )

export const verefyToken = async (req: any, res: any, next: Function) => {
    try {
        const accessToken = req.headers.authorization;
        if (!accessToken) {
            throw 'err'
        }
        req.tokenData = await jwt.verify(accessToken, secret)
        next()
    } catch (e) {
        next(e)
    }
}


export default {
    checkAuth,
    verefyToken
}