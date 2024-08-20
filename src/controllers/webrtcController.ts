import { Request, Response } from 'express';
import WebRTCService from '../services/WebRTCService';

export const createOffer = async (req: Request, res: Response) => {
  try {
    const { sessionId, sdp } = req.body;
    const session = await WebRTCService.createSession(sessionId, sdp, 'offer');
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const answerOffer = async (req: Request, res: Response) => {
  try {
    const { sessionId, sdp } = req.body;
    const session = await WebRTCService.createSession(sessionId, sdp, 'answer');
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
