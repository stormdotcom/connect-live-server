import WebRTCSession from '../models/WebRTCSession';

class WebRTCService {
  public static async createSession(sessionId: string, sdp: string, type: 'offer' | 'answer') {
    const session = new WebRTCSession({ sessionId, sdp, type });
    await session.save();
    return session;
  }

  // You can add more methods for signaling, session retrieval, etc.
}

export default WebRTCService;
