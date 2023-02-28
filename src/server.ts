/**
 * Creates a TCP Socket server
 */
// common module imports
import { Server, createServer, Socket } from "net";
import { TCP_PORT } from "./constants";

const sockets = [];

// Create an instance of TCP socket server
const server: Server = createServer((socket: Socket): void => {
    console.log('A client connected');

    const id = Math.floor(Math.random() * 100000);
    sockets.push({ socket });

    // Assign an id to client socket
    socket.write(JSON.stringify({ socketId: id }));

    // Receives data from client socket
    socket.on('data', (data: Buffer | string): void => {
        const clientMsg = data.toString('utf-8');
        socket.write(clientMsg);
    });
});

// Error handler on server
server.on('error', (error: any): void => {
    console.log(error);
});

server.listen(TCP_PORT, () => {
    console.log(`TCP Server listening on ${TCP_PORT}`)
}); 
