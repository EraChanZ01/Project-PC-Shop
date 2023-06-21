import express from 'express'
import userController from "../controller/userController"
import checkToken from '../middlewares/createSession'
import hashPasswordMiddle from '../middlewares/hashPassword'

const userAuthRouter = express.Router()

userAuthRouter.post('/register', hashPasswordMiddle.hashPassword, userController.registerUser)
userAuthRouter.post('/login', userController.loginUser)
userAuthRouter.get('/checkAuth', checkToken.checkAuth)


export default userAuthRouter