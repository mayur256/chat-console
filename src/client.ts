/**
 * Creates a TCP client
 */
// common module imports
import { Socket, createConnection } from "net";
import { TCP_PORT } from "./constants";
import * as readline from "node:readline";

let socketId: string | null = null;
// Create a socket connection
const client: Socket = createConnection({ port: TCP_PORT }, (): void => {
    // 'connect' listener.
    console.log('connected to server!');

    // create a read/write interface on stdin and stdout
    const rwInterface: readline.Interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Client Message : ")
    rwInterface.on('line', (line) => {
        client.write(line);
    })

    // listen for data on the socket
    client.on('data', (data: Buffer | string) => {
        const echoedMsg = data.toString();

        if (echoedMsg.includes('socketId')) {
            socketId = JSON.parse(echoedMsg).socketId;
            return;
        }

        if (echoedMsg.toLocaleLowerCase() === "bye") {
            client.destroy();
            process.exit(0);
        }

        console.log("Server echoed: ", echoedMsg);
        console.log("Client Message : ");
    });
});
