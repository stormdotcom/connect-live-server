import { Router } from 'express';
import { createOffer, answerOffer } from '../controllers/webrtcController';

const router = Router();

router.post('/offer', createOffer);
router.post('/answer', answerOffer);

export default router;
