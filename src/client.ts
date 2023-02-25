/**
 * Creates a TCP client
 */
// common module imports
import { Socket, createConnection } from "net";
import { TCP_PORT } from "./constants";

const client: Socket = createConnection({ port: TCP_PORT }, (): void => {
    // 'connect' listener.
    console.log('connected to server!');
});

client.on('data', (data: Buffer | string) => {
    console.log(data.toString());

    client.write("Greetings from client \r\n");
})
