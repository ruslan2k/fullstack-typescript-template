import * as http from 'http'
import * as path from 'path'
import express from 'express'
import morgan from 'morgan'
import { Server } from 'socket.io'

const port = process.env.PORT || 8080
const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../public')))

io.on('connection', (socket) => {
    console.log('a user connected')
})

server.listen(port, () => {
    console.log(`listening on *:${port}`)
})


