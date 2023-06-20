import express from "express"
import http from "http"
import Router from "./router/Router"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', Router)




const server = http.createServer(app)




server.listen(5000, (): void => {
    console.log('server start')
})

