/**
 * Creates a TCP client
 */
// common module imports
import { Socket, createConnection } from "net";
import { TCP_PORT } from "./constants";
import * as readline from "node:readline";

// Create a socket connection
const client: Socket = createConnection({ port: TCP_PORT }, (): void => {
    // 'connect' listener.
    console.log('connected to server!');

    // create a read/write interface on stdin and stdout
    const rwInterface: readline.Interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Initiate communication")
    console.log("Client Message : ")
    rwInterface.on('line', (line) => {
        console.log("Client Message : ");
        client.write(line);
    })

    // listen for data on the socket
    client.on('data', (data: Buffer | string) => {
        console.log("Server echoed: ", data.toString());
        console.log("Client Message : ");
    });
});
