/**
 * Creates a TCP Socket server
 */
// common module imports
import { Server, createServer, Socket } from "net";

const TCP_PORT = 5124;

// Create an instance of TCP socket server
const server: Server = createServer((socket: Socket): void => {
    console.log(socket);
});

// Error handler on server
server.on('error', (error: any): void => {
    console.log(error);
});

server.listen(TCP_PORT, () => {
    console.log(`TCP Server listening on ${TCP_PORT}`)
});
