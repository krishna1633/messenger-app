import { Request, Response } from 'express';
import { friends } from '../models/dataModel';

export function getFriends(req: Request, res: Response) {
  res.json(friends);
}
