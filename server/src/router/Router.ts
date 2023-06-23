import express from 'express'
import userRouter from './userRouter'
import userAuthRouter from './userAuthRouter'
import productRouter from './productRouter'

const router = express.Router()

router.use('/users', userRouter)
router.use('/auth', userAuthRouter)
router.use('/product', productRouter)


export default router