import app from './app';
import { createServer } from 'http';
import { Server } from 'socket.io';
import socketService from './services/socketService';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*", 
  },
});


socketService(io);
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
