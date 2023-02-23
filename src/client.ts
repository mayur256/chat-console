/**
 * Creates a TCP client
 */

// common module imports
import { Socket, createConnection } from "net";

const client: Socket = createConnection({ port: 5124 }, (): void => {
    // 'connect' listener.
    console.log('connected to server!');
    client.write('world!\r\n');
});
