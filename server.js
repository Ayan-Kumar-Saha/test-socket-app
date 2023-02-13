if (process.env.NODE_ENV == 'development')
  require('dotenv').config()

const PORT = process.env.PORT || 8080;

const http = require('http').createServer();

const io = require('socket.io')(http, {
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log('a user connected!');

  socket.on('message', (data) => {
    console.log(data);

    io.emit('message', data)
  })
})

http.listen(PORT, () => console.log(`Server is running on port ${PORT}`))