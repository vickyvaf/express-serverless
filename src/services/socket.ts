import { Server } from "socket.io";
import { Server as HttpServer } from "http";

export function initSocket(httpServer: HttpServer) {
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  return io;
}
