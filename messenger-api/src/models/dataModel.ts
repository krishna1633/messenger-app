export interface Friend {
  id: number;
  name: string;
}

export interface Message {
  id: number;
  senderId: number;
  content: string;
  timestamp: string;
}

export const friends: Friend[] = [
  { id: 1, name: "Krishna" },
  { id: 2, name: "Gaurav" },
  { id: 3, name: "Aseeba" },
];

export const chatHistory: { [friendId: number]: Message[] } = {
  1: [
    {
      id: 1,
      senderId: 1,
      content: "Hey Krishna!",
      timestamp: new Date().toISOString(),
    },
  ],
  2: [
    {
      id: 1,
      senderId: 2,
      content: "Hi Gaurav!",
      timestamp: new Date().toISOString(),
    },
  ],
  3: [],
};
