import * as http from 'http'
import express from 'express'
import { Server } from 'socket.io'

const port = process.env.PORT || "8080";
const app = express()
const server = http.createServer(app)
const io = new Server(server);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});


