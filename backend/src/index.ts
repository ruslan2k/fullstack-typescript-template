import * as http from 'http'
import express from 'express'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const io = new Server(server);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});


