const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");

const connectDB = require("./src/config/db");
const logger = require("./src/config/logger");

const httpServer = () => {
    connectDB().then(() => {
        httpServer.listen(PORT, () => {
            logger.info(`Server started on port ${PORT}`);
        })
    }).catch((err) => logger.error("server is stop"))

    const httpServer = createServer(app);

    const io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {
        console.log("User Connected:", socket.id);

        socket.on("send_message", (data) => {
            console.log("Message Received:", data);

            io.emit("receive_message", data);
        });

        socket.on("disconnect", () => {
            console.log("User Disconnected:", socket.id);
        });
    });

    const PORT = process.env.PORT || 3000;



}

httpServer()