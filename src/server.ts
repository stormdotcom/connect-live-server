import app from './app';
import { createServer } from 'http';
import { Server } from 'socket.io';
import socketService from './services/socketService';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

// Create HTTP server
const httpServer = createServer(app);

// Initialize Socket.io server
const io = new Server(httpServer, {
  cors: {
    origin: "*",  // Configure this as per your security needs
  },
});

// Setup socket.io connection handling
socketService(io);

// Start the server
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
