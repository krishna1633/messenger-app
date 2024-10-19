import axios from 'axios';
import { Friend, Message } from './Types';

const BASE_URL = 'http://localhost:5000/api';

export const fetchFriends = async (): Promise<Friend[]> => {
  try {
    const response = await axios.get<Friend[]>(`${BASE_URL}/friends`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching friends:", error);
    throw error;
  }
};

export const fetchChatHistory = async (friendId: number): Promise<Message[]> => {
  try {
    const response = await axios.get<Message[]>(`${BASE_URL}/chats/${friendId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching chat history for friend ${friendId}:`, error);
    throw error;
  }
};

export const sendChatMessage = async (friendId: number, content: string): Promise<Message> => {
  try {
    const response = await axios.post<Message>(`${BASE_URL}/chats/${friendId}`, { content });
    return response.data;
  } catch (error) {
    console.error(`Error sending message to friend ${friendId}:`, error);
    throw error;
  }
};
