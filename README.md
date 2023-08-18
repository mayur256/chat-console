# Chat application
- This example demonstrates communication between a TCP **client** and **server**. It uses Socket to communicate with different entities on the same machine. However the example can also be extended to achieve communication across the network as well.
- This example was implemented to get a basic overview of how Socket communication can be achieved in Nodejs.
- In this particular example, we have a client that connects and send messages to a **TCP Server**. The server at the other end waits for an incoming connection, receives the messages, acknowledges them and echoes it back to the client.

Let's discuss entites involved in the communication at length
## Server
- The server is created with **Net** module's **createServer** function which accepts a callback that is invoked when a connection is made to the server.
- The listener callback has **Socket** as its argument to handle the connection.
- the **listen** method on server allows it to bind itself to specific port and listen for all incoming connections.
- In our example, the server merely decodes the message and echoes it to the client as an acknowledgement.

## Client
- A process on client machine initiates connection with the TCP server by invoking **createConnection** method from Node's Net module.
- The client waits to receive data ehoed from the server and closes the connection by invoking **destroy** method on client socket, when server echoes a special message that denotes client wishes to close the connection.
