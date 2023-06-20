import express from 'express'
import userRouter from './userRouter'
import userAuthRouter from './userAuthRouter'

const router = express.Router()

router.use('/users', userRouter)
router.use('/auth', userAuthRouter)


export default router