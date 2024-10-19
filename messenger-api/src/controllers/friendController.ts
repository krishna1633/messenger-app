// src/controllers/friendController.ts

import { Request, Response } from 'express';
import { friends } from '../models/dataModel';

// Fetch the list of friends
export function getFriends(req: Request, res: Response) {
  res.json(friends);
}
