// src/routes/friendRoutes.ts

import { Router } from 'express';
import { getFriends } from '../controllers/friendController';

const router = Router();

router.get('/', getFriends);

export default router;
