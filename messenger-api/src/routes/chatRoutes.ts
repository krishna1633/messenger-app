import { Router } from 'express';
import { getChatHistory, sendMessage } from '../controllers/chatController';

const router = Router();

router.get('/:friendId', getChatHistory);
router.post('/:friendId', sendMessage);

export default router;
