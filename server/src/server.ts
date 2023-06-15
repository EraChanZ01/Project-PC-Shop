import express from "express"
import http from "http"

const app = express()
app.use(express.json())




const server = http.createServer(app)




server.listen(3000, (): void => {
    console.log('server start')
})

