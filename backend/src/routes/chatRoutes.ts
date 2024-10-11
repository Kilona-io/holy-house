import express from 'express';
import { sendMessage, getChatHistory } from '../controllers/chatController';
import { authenticateSupabaseToken } from '../middlewares/authMiddleware';

const router = express.Router();

//TODO: Uncomment this when we have authentication
// router.post('/send', authenticateSupabaseToken, sendMessage);
// router.get('/history', authenticateSupabaseToken, getChatHistory);

router.post('/send', sendMessage);
router.get('/history', getChatHistory);

export default router;
