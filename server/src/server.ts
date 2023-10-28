import express from "express"
import http from "http"
import Router from "./router/Router"
import cors from "cors"
import { handlerErrors } from './Errors/handlerErrors'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', Router)
app.use(handlerErrors)




const server = http.createServer(app)




server.listen(PORT, (): void => {
    console.log(`server start ${PORT}`)
})

