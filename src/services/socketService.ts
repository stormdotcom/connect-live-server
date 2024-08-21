import { Server, Socket } from 'socket.io';

interface SignalData {
  type: 'offer' | 'answer' | 'candidate';
  sdp?: string;
  candidate?: RTCIceCandidateInit;
  sessionId: string;
}
    
const socketService = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('A user connected:', socket.id);

    socket.on('join', (sessionId: string) => {
      socket.join(sessionId);
      console.log(`Socket ${socket.id} joined session ${sessionId}`);
    });

    socket.on('signal', (data: SignalData) => {
      const { sessionId, type, sdp, candidate } = data;
      console.log('Received signal:', { sessionId});

      // Broadcast the signaling data to other clients in the session
      socket.to(sessionId).emit('signal', {
        type,
        sdp,
        candidate,
        sessionId,
      });
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected:', socket.id);
    });
  });
};
export default socketService;
