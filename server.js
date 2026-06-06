const app = require('./src/app')
const {createServer} = require('http')
const {Server} = require('socket.io')
const cors = require('cors')
const connectDB = require('./src/config/db')

connectDB()
const httpServer = createServer(app);

const io = new Server(httpServer,{
    cors:{
        origin:"*",
    },
})

io.on('connection',(socket)=>{
    console.log('user connected :',socket.id);

    socket.on('send_message',(data)=>{
        io.emit("receive_message", data)
    })

    socket.on('disconnect',()=>{
        console.log("User Disconnected:", socket.id);
    })
    
})


httpServer.listen(3000, () => {
  console.log("Server started on port 3000");
});
