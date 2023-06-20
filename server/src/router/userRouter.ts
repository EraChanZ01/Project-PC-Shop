import express from 'express'
import userController from "../controller/userController"
import checkToken from '../middlewares/createSession'

const userRouter = express.Router()

userRouter.use(checkToken.verefyToken)

export default userRouter