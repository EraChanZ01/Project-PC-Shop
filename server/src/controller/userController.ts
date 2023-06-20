const db = require('../models')
const { createdToken, verefyToken } = require('../middlewares/createSession')

export const registerUser = async (req: any, res: any) => {
    try {
        const createUser = await db.User.create(req.body)
        res.status(200).send({ data: createUser })
    } catch (e) {

    }
}
export const loginUser = async (req: any, res: any) => {
    try {
        const { phoneNumber, password } = req.body
        const userFind = await db.User.findOne({
            where: { phoneNumber: phoneNumber }
        })
        if (password === userFind.password) {
            const token = await createdToken({ ...userFind.dataValues })
            res.status(200).send({ data: userFind, token: token })
        }
    } catch (e) {

    }
}

export default {
    registerUser,
    loginUser
}