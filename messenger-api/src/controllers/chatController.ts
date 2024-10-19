import { Request, Response } from "express";
import { chatHistory, Message } from "../models/dataModel";

export function getChatHistory(req: Request, res: Response) {
  const friendId = parseInt(req.params.friendId);
  const messages = chatHistory[friendId] || [];
  res.json(messages);
}

export function sendMessage(req: Request, res: Response) {
  const friendId = parseInt(req.params.friendId);
  const { content } = req.body;

  const newMessage: Message = {
    id: chatHistory[friendId]?.length ? chatHistory[friendId].length + 1 : 1,
    senderId: friendId,
    content,
    timestamp: new Date().toISOString(),
  };

  if (!chatHistory[friendId]) {
    chatHistory[friendId] = [];
  }

  chatHistory[friendId].push(newMessage);

  res.status(201).json(newMessage);
}
