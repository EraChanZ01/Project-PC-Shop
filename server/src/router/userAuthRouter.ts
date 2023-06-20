import express from 'express'
import userController from "../controller/userController"
import checkToken from '../middlewares/createSession'

const userAuthRouter = express.Router()

userAuthRouter.post('/register', userController.registerUser)
userAuthRouter.post('/login', userController.loginUser)
userAuthRouter.get('/checkAuth', checkToken.checkAuth)


export default userAuthRouter