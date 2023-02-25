/**
 * Creates a TCP Socket server
 */
// common module imports
import { Server, createServer, Socket } from "net";
import { TCP_PORT } from "./constants";

// Create an instance of TCP socket server
const server: Server = createServer((serverSocket: Socket): void => {
    console.log('A client connected');
   
   // Receives data from client socket
    serverSocket.on('data', (data: Buffer | string): void => {
        console.log(data.toString());
    });

    serverSocket.write("Greetings from Server! \r\n");
});

// Error handler on server
server.on('error', (error: any): void => {
    console.log(error);
});

server.listen(TCP_PORT, () => {
    console.log(`TCP Server listening on ${TCP_PORT}`)
}); 
